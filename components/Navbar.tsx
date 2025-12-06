import Link from 'next/link';
import { Beaker, Calendar, Users, Monitor, ChevronDown, Wrench } from 'lucide-react';

export default function Navbar() {
  
  // Data Layanan (DISAMAKAN DENGAN GAMBAR HALAMAN UTAMA)
  const services = [
    {
      title: "Peminjaman Alat",
      desc: "Layanan peminjaman perangkat keras tugas akhir.",
      icon: <Monitor size={24} className="text-blue-600" />,
      href: "/layanan/peminjaman"
    },
    {
      title: "Praktikum Rutin",
      desc: "Jadwal dan modul praktikum harian mata kuliah.",
      icon: <Calendar size={24} className="text-violet-600" />,
      href: "/layanan/praktikum"
    },
    {
      title: "Konsultasi Teknis",
      desc: "Sesi tanya jawab kendala koding & hardware.",
      icon: <Wrench size={24} className="text-orange-500" />,
      href: "/layanan/konsultasi"
    },
    {
      title: "Workshop Mingguan",
      desc: "Pelatihan skill baru yang diadakan tiap minggu.",
      icon: <Users size={24} className="text-green-600" />,
      href: "/layanan/workshop"
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Beaker size={24} />
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">
              Lab<span className="text-blue-600">Terapan</span>
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg">
              Beranda
            </Link>

            {/* --- MEGA MENU LAYANAN (POPUP) --- */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 group-hover:text-blue-600 font-medium py-4 outline-none px-3 rounded-lg group-hover:bg-gray-50 transition-all">
                Layanan <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300"/>
              </button>

              {/* KOTAK POPUP (Isinya sesuai 4 kartu di halaman utama) */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 z-50">
                
                <div className="grid grid-cols-2 gap-4">
                  {services.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-all group/item"
                    >
                      <div className="bg-gray-100 p-3 rounded-xl group-hover/item:bg-white group-hover/item:shadow-md transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 group-hover/item:text-blue-700 transition-colors text-base">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Bagian Bawah Menu Popup */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center px-2">
                   <span className="text-xs text-gray-400 font-medium">Butuh bantuan lain?</span>
                   <Link href="/layanan" className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1">
                      Lihat Semua Layanan <ChevronDown size={12} className="-rotate-90"/>
                   </Link>
                </div>

                {/* Panah Kecil di Atas Kotak (Opsional, pemanis visual) */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
              </div>
            </div>
            {/* --------------------------------------- */}

            <Link href="/artikel" className="text-gray-600 hover:text-blue-600 font-medium transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg">
              Artikel
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors hover:bg-gray-50 px-3 py-2 rounded-lg">
              Tentang
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <div className="hidden md:block">
            <Link 
              href="/login" 
              className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Login Aslab
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}