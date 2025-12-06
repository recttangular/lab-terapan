import Link from 'next/link';
import { ArrowRight, Monitor, Calendar, Wrench, Users } from 'lucide-react';

export default function Home() {
  
  // Data Layanan (Sama persis dengan Navbar biar konsisten)
  const services = [
    {
      title: "Peminjaman Alat",
      desc: "Layanan peminjaman perangkat keras tugas akhir.",
      icon: <Monitor size={28} />,
      href: "/layanan/peminjaman",
      color: "bg-blue-100 text-blue-600 border-blue-200"
    },
    {
      title: "Praktikum Rutin",
      desc: "Jadwal dan modul praktikum harian mata kuliah.",
      icon: <Calendar size={28} />,
      href: "/layanan/praktikum",
      color: "bg-violet-100 text-violet-600 border-violet-200"
    },
    {
      title: "Konsultasi Teknis",
      desc: "Sesi tanya jawab kendala koding & hardware.",
      icon: <Wrench size={28} />,
      href: "/layanan/konsultasi",
      color: "bg-orange-100 text-orange-600 border-orange-200"
    },
    {
      title: "Workshop Mingguan",
      desc: "Pelatihan skill baru yang diadakan tiap minggu.",
      icon: <Users size={28} />,
      href: "/layanan/workshop",
      color: "bg-green-100 text-green-600 border-green-200"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 animate-pulse">
            Sistem Informasi Laboratorium v2.0
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Pusat Inovasi & <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Teknologi Terapan
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Platform terintegrasi untuk manajemen inventaris, jadwal praktikum, 
            dan pengembangan skill mahasiswa secara real-time.
          </p>

          <div className="flex justify-center gap-4">
            <Link 
              href="/layanan/peminjaman" 
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2 hover:-translate-y-1"
            >
              Mulai Peminjaman <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
            >
              Tentang Lab
            </Link>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full -z-0 pointer-events-none" />
      </section>

      {/* SERVICE CARDS SECTION (YANG KITA EDIT) */}
      <section className="bg-white py-20 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Layanan Unggulan</h2>
            <p className="text-gray-500 mt-2">Akses fasilitas laboratorium dalam satu genggaman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {services.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${item.color}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-blue-600 transition-colors mt-auto">
                  Akses Layanan <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}