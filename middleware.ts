import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/signup", "/", "/about", "/contact", "/details"],
};
