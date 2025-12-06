import Link from "next/link";
import { ArrowLeft, Calendar, BookOpen, Download } from "lucide-react";

export default function PraktikumPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Beranda
        </Link>

        <div className="flex items-center gap-6 mb-8">
           <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600">
              <Calendar size={32} />
           </div>
           <div>
              <h1 className="text-4xl font-extrabold text-gray-900">Praktikum Rutin</h1>
              <p className="text-xl text-gray-600 mt-2">Jadwal harian dan unduh modul pembelajaran.</p>
           </div>
        </div>

        {/* Tabel Jadwal (Mockup) */}
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm mb-12">
            <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700">Jadwal Minggu Ini</h3>
            </div>
            <div className="p-8">
                <div className="grid gap-4">
                    {[
                        { day: "Senin", matkul: "Pemrograman Web Lanjut", jam: "08:00 - 11:00", lab: "Lab RPL 1" },
                        { day: "Selasa", matkul: "Basis Data Terdistribusi", jam: "13:00 - 15:00", lab: "Lab Jaringan" },
                        { day: "Rabu", matkul: "Kecerdasan Buatan", jam: "09:00 - 12:00", lab: "Lab Multimedia" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase w-20 text-center">{item.day}</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.matkul}</h4>
                                    <p className="text-sm text-gray-500">{item.jam} • {item.lab}</p>
                                </div>
                            </div>
                            <span className="text-sm font-semibold text-violet-600 mt-2 md:mt-0">Sesi 1</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Download Modul */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="text-violet-600"/> Modul Terbaru
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
            {['Modul React.js Dasar', 'Tutorial Docker Container', 'Panduan Instalasi Laravel'].map((modul, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all group cursor-pointer bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-violet-50 rounded-lg text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            <BookOpen size={24}/>
                        </div>
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">PDF</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{modul}</h4>
                    <p className="text-sm text-gray-500 mb-4">Update: 2 Hari lalu</p>
                    <button className="w-full py-2 rounded-lg border border-violet-200 text-violet-600 font-semibold hover:bg-violet-50 flex items-center justify-center gap-2">
                        <Download size={16}/> Unduh
                    </button>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
}