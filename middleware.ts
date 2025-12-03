import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  const isOnLogin = req.nextUrl.pathname.startsWith("/login");

  // 1. Kalau user mau ke Dashboard tapi BELUM Login
  if (isOnDashboard && !isLoggedIn) {
    // Tendang ke halaman Login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2. Kalau user SUDAH Login tapi buka halaman Login lagi
  if (isOnLogin && isLoggedIn) {
    // Arahkan langsung ke Dashboard (ngapain login lagi?)
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

// Tentukan halaman mana saja yang dijaga middleware ini
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};