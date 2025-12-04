// 1. Import Font (Bisa ganti Inter dengan 'Poppins' atau 'Plus_Jakarta_Sans')
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// 2. Konfigurasi Font
const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Ambil ketebalan yang dibutuhkan
  variable: "--font-sans", // Variable CSS
});

export const metadata = {
  title: "Lab Terapan",
  description: "Portal Sistem Informasi Laboratorium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* 3. Pasang class font di body */}
      <body className={`${fontSans.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <Navbar />
        <div className="pt-20"> {/* Tambah padding biar konten gak ketabrak navbar */}
          {children}
        </div>
      </body>
    </html>
  );
}