import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Perhatikan baris di bawah ini. Kita mundur satu folder (..) lalu masuk components
import Navbar from "../components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistem Informasi Laboratorium",
  description: "Web Portal Laboratorium Terapan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}