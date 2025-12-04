import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Sistem Informasi Laboratorium v1.0
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
            Pusat Inovasi & <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Teknologi Terapan
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Platform terintegrasi untuk manajemen inventaris, jadwal praktikum, 
            dan publikasi riset mahasiswa secara real-time dan efisien.
          </p>

          <div className="flex justify-center gap-4">
            <Link 
              href="/layanan" 
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center gap-2"
            >
              Jelajahi Layanan <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Background Decoration (Blur Blob) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-200/30 blur-[100px] rounded-full -z-0 pointer-events-none" />
      </section>

      {/* FEATURES / STATS SECTION */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fasilitas Lengkap</h3>
              <p className="text-gray-600">Lebih dari 50+ perangkat keras dan komputer high-end siap menunjang praktikum.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 transition-all group">
              <div className="bg-violet-100 w-12 h-12 rounded-lg flex items-center justify-center text-violet-600 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modul Terupdate</h3>
              <p className="text-gray-600">Akses ratusan artikel dan modul pembelajaran terbaru hasil riset asisten lab.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-all group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mentor Berpengalaman</h3>
              <p className="text-gray-600">Dibimbing langsung oleh tim asisten laboratorium yang ahli di bidangnya.</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}