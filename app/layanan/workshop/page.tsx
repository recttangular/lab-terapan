import Link from "next/link";
import { ArrowLeft, Users, Calendar, Clock, MapPin } from "lucide-react";

export default function WorkshopPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Beranda
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Workshop & Pelatihan</h1>
                <p className="text-xl text-gray-500">Upgrade skill diluar jam kuliah dengan materi industri.</p>
            </div>
            <button className="hidden md:block bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all">
                Lihat Semua Event
            </button>
        </div>

        {/* Featured Event (Besar) */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 text-white mb-16 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-90"></div>
            {/* Pattern Hiasan */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-green-500 rounded-full blur-[100px] opacity-20"></div>

            <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Minggu Ini</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">Mastering Next.js 15: From Zero to Hero</h2>
                    <p className="text-green-100 text-lg max-w-xl">
                        Pelajari cara membangun website modern dengan teknologi terbaru Next.js, Tailwind, dan Supabase langsung praktek.
                    </p>
                    
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-green-100 pt-4">
                        <div className="flex items-center gap-2"><Calendar size={18}/> Sabtu, 12 Des 2025</div>
                        <div className="flex items-center gap-2"><Clock size={18}/> 09:00 - 15:00</div>
                        <div className="flex items-center gap-2"><MapPin size={18}/> Lab Komputer 1</div>
                    </div>

                    <button className="bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all mt-4 inline-block">
                        Daftar Sekarang (Gratis)
                    </button>
                </div>
                
                {/* Kotak Ilustrasi Kanan */}
                <div className="w-full md:w-80 aspect-square bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center">
                    <Users size={64} className="text-white/50" />
                </div>
            </div>
        </div>

        {/* Upcoming Events (Grid) */}
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Akan Datang</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Dasar Internet of Things (IoT)", date: "19 Des 2025", color: "bg-blue-100 text-blue-600" },
                { title: "UI/UX Design dengan Figma", date: "26 Des 2025", color: "bg-pink-100 text-pink-600" },
                { title: "Keamanan Jaringan Dasar", date: "02 Jan 2026", color: "bg-orange-100 text-orange-600" },
            ].map((event, i) => (
                <div key={i} className="group p-6 rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all bg-white">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${event.color}`}>
                        <Users size={24}/>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{event.title}</h4>
                    <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                        <Calendar size={14}/> {event.date}
                    </p>
                    <button className="text-sm font-bold text-gray-400 group-hover:text-green-600 flex items-center gap-1 transition-colors">
                        Detail Event &rarr;
                    </button>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
}