"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Beaker } from 'lucide-react'; // Import Icon

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk menu HP

  // Daftar halaman dimana Navbar TIDAK BOLEH MUNCUL
  const disableNavbar = ["/login", "/dashboard", "/dashboard/editor"];

  if (disableNavbar.includes(pathname) || pathname.startsWith("/dashboard")) {
    return null;
  }

  // Data Menu biar kodingan rapi
  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Lab', href: '/about' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Artikel', href: '/artikel' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Beaker size={24} />
            </div>
            <Link href="/" className="text-xl font-bold text-gray-800 tracking-tight">
              Lab<span className="text-blue-600">Terapan</span>
            </Link>
          </div>

          {/* MENU DESKTOP (Hidden di HP) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-blue-600 font-bold' 
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Tombol Login Spesial */}
            <Link 
              href="/login" 
              className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 hover:shadow-xl"
            >
              Login Aslab
            </Link>
          </div>

          {/* TOMBOL MENU HP (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU DROPDOWN HP (Muncul kalau isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                   pathname === link.href 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <Link 
                href="/login"
                className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-bold"
              >
                Login Aslab
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}