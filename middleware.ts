import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("AuthToken")?.value || "";
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/" || path === "/signup";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/home",
    "/signup",
    "/",
    "/about",
    "/contact",
    "/details",
    "/ticket",
    "/ticket-price",
    "/show-time",
  ],
};
