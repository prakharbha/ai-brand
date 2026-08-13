"use client";

import { useEffect } from "react";

/**
 * PreviewKeeper
 *
 * When ?preview=true is present in the URL, this component patches:
 *   1. history.pushState / replaceState  → keeps ?preview=true visible in the address bar
 *   2. window.fetch                      → injects ?preview=true into every same-origin RSC
 *                                          fetch so Next.js client-side navigation passes
 *                                          through the middleware check on the server
 *
 * No cookies, no localStorage — purely URL-param based.
 */
export default function PreviewKeeper() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") !== "true") return; // not in preview mode, do nothing

    // ── 1. Patch history so the param stays visible in the browser URL bar ──
    const addPreview = (url: string | URL | null | undefined) => {
      if (!url) return url;
      try {
        const u = new URL(String(url), window.location.origin);
        // Only patch same-origin URLs
        if (u.origin !== window.location.origin) return url;
        if (!u.searchParams.has("preview")) {
          u.searchParams.set("preview", "true");
        }
        return u.pathname + u.search + u.hash;
      } catch {
        return url;
      }
    };

    const origPush = history.pushState.bind(history);
    const origReplace = history.replaceState.bind(history);

    history.pushState = (state, title, url) =>
      origPush(state, title, addPreview(url as string) ?? url);

    history.replaceState = (state, title, url) =>
      origReplace(state, title, addPreview(url as string) ?? url);

    // ── 2. Patch fetch so RSC requests also carry ?preview=true ──
    const origFetch = window.fetch.bind(window);

    window.fetch = function (input, init) {
      try {
        const href =
          input instanceof Request ? input.url : String(input);
        const u = new URL(href, window.location.origin);

        if (
          u.origin === window.location.origin &&
          !u.searchParams.has("preview")
        ) {
          u.searchParams.set("preview", "true");

          // Rebuild the input preserving any Request options
          const newInput =
            input instanceof Request
              ? new Request(u.toString(), input)
              : u.toString();

          return origFetch(newInput, init);
        }
      } catch {
        // If URL parsing fails, fall through to original fetch
      }
      return origFetch(input, init);
    };

    // Cleanup on unmount (unlikely but good practice)
    return () => {
      history.pushState = origPush;
      history.replaceState = origReplace;
      window.fetch = origFetch;
    };
  }, []);

  return null; // renders nothing
}
