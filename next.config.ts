import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Matikan pemeriksaan TypeScript saat build
  typescript: {
    ignoreBuildErrors: true,
  },
  // 2. Matikan pemeriksaan ESLint (Aturan kerapian) saat build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 3. Izinkan gambar dari mana saja (Supabase, UploadThing, dll)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;