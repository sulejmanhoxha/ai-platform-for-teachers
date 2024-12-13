import type { Session } from "better-auth/types";
import { type NextRequest, NextResponse } from "next/server";

export default async function authMiddleware(request: NextRequest) {
  const response = await fetch(
    `${request.nextUrl.origin}/api/auth/get-session`,
    {
      method: "GET",
      headers: {
        // Get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  const session: Session | null = await response.json();

  const { pathname } = request.nextUrl;

  console.log(session);

  // Protect '/dashboard' from unauthenticated users
  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Protect '/signin' and '/signup' from authenticated users
  if (
    (pathname.startsWith("/signin") || pathname.startsWith("/signup")) &&
    session
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/signin", "/signup"],
};
