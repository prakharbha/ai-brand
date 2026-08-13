import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";
const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "true";
const PREVIEW_COOKIE = "aib_preview";

// Paths that should never be redirected (Next.js internals, assets, etc.)
const BYPASS_PATHS = [
  "/maintenance",
  "/_next",
  "/favicon",
  "/icon",
  "/robots",
  "/sitemap",
  "/api",
];

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Always allow bypass paths through
  if (BYPASS_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // If maintenance mode is off, do nothing
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  // Check if the secret preview param is present → set cookie and redirect cleanly
  const previewParam = searchParams.get("preview");
  if (previewParam === PREVIEW_SECRET) {
    // Strip the ?preview= param from the URL for a cleaner experience
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete("preview");

    const response = NextResponse.redirect(cleanUrl);
    // Cookie lasts 8 hours (one working day)
    response.cookies.set(PREVIEW_COOKIE, PREVIEW_SECRET, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 8,
      path: "/",
    });
    return response;
  }

  // Check for existing preview cookie
  const previewCookie = request.cookies.get(PREVIEW_COOKIE);
  if (previewCookie?.value === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  // Redirect everyone else to /maintenance
  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  maintenanceUrl.search = "";
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, icons, public assets
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)).*)",
  ],
};
