"use client"; // 1. Wajib tambah ini karena kita pakai Hooks (usePathname)

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Import pendeteksi lokasi

export default function Navbar() {
  const pathname = usePathname(); // 3. Ambil lokasi sekarang

  // 4. Daftar halaman di mana Navbar HARUS SEMBUNYI
  const disableNavbar = ["/login", "/dashboard", "/dashboard/editor"];

  // 5. Jika lokasi sekarang ada di daftar terlarang, jangan tampilkan apa-apa
  if (disableNavbar.includes(pathname)) {
    return null;
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      {/* ... (SISA KODE DI BAWAHNYA SAMA PERSIS DENGAN SEBELUMNYA) ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-700">
              LAB TERAPAN 🔬
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors">Beranda</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors">Tentang Lab</Link>
              <Link href="/layanan" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors">Layanan</Link>
              <Link href="/artikel" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md font-medium transition-colors">Artikel</Link>
            </div>
          </div>
          <div>
            <Link href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md">Login Aslab</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}