import { NextRequest, NextResponse } from "next/server";

// Set to `true` to turn maintenance mode back on
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";

const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "true";

// Paths that should always pass through
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

  // Always allow internal/asset paths
  if (BYPASS_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Maintenance mode is off — let everyone through
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  // Allow if ?preview=true is present in the URL (no cookie needed)
  const previewParam = searchParams.get("preview");
  if (previewParam === PREVIEW_SECRET) {
    return NextResponse.next();
  }

  // Block everyone else → redirect to maintenance page
  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  maintenanceUrl.search = "";
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)).*)",
  ],
};
