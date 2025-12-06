import Link from "next/link";
import { Monitor, Calendar, Wrench, Users, ArrowRight } from "lucide-react";

export default function LayananPage() {
  // Data Layanan (Konsisten dengan Navbar & Home)
  const services = [
    {
      title: "Peminjaman Alat",
      desc: "Layanan peminjaman perangkat keras tugas akhir.",
      icon: <Monitor size={32} />,
      href: "/layanan/peminjaman",
      color: "bg-blue-100 text-blue-600",
      border: "hover:border-blue-300"
    },
    {
      title: "Praktikum Rutin",
      desc: "Jadwal dan modul praktikum harian mata kuliah.",
      icon: <Calendar size={32} />,
      href: "/layanan/praktikum",
      color: "bg-violet-100 text-violet-600",
      border: "hover:border-violet-300"
    },
    {
      title: "Konsultasi Teknis",
      desc: "Sesi tanya jawab kendala koding & hardware.",
      icon: <Wrench size={32} />,
      href: "/layanan/konsultasi",
      color: "bg-orange-100 text-orange-600",
      border: "hover:border-orange-300"
    },
    {
      title: "Workshop Mingguan",
      desc: "Pelatihan skill baru yang diadakan tiap minggu.",
      icon: <Users size={32} />,
      href: "/layanan/workshop",
      color: "bg-green-100 text-green-600",
      border: "hover:border-green-300"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Layanan <span className="text-blue-600">Laboratorium</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai fasilitas dan program untuk menunjang 
            kebutuhan akademik serta pengembangan skill mahasiswa.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.href}
              className={`group bg-white p-8 rounded-3xl border-2 border-transparent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${item.border}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${item.color} transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-lg leading-relaxed flex-1">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}