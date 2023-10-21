import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const authToket = request.cookies.get("Ticke Mela")?.value;
  console.log(authToket);
  console.log(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/signup", "/", "/about", "/contact", "/details"],
};
