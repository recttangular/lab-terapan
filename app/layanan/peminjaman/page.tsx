import Link from "next/link";
import { ArrowLeft, CheckCircle2, Monitor } from "lucide-react";

export default function PeminjamanPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumb / Back */}
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Beranda
        </Link>

        {/* Header Icon */}
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
           <Monitor size={32} />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Layanan Peminjaman Alat</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          Fasilitas peminjaman perangkat keras (Hardware) dan Laboratorium Komputer untuk keperluan 
          praktikum mandiri, pengerjaan skripsi, atau riset mahasiswa.
        </p>

        {/* Gambar Ilustrasi (Opsional) */}
        <div className="w-full h-64 bg-gray-100 rounded-3xl mb-12 flex items-center justify-center border border-gray-200">
           <span className="text-gray-400 font-medium">Tempat Foto Lab / Alat</span>
        </div>

        {/* Syarat & Ketentuan */}
        <div className="grid md:grid-cols-2 gap-12">
           <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prosedur Peminjaman</h3>
              <ul className="space-y-4">
                 {[
                    "Login ke sistem menggunakan akun mahasiswa.",
                    "Pilih alat dan tanggal peminjaman.",
                    "Tunggu persetujuan dari Kepala Lab (Max 1x24 Jam).",
                    "Ambil alat dengan menyerahkan KTM asli."
                 ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-600">
                       <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                       {item}
                    </li>
                 ))}
              </ul>
           </div>

           <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alat Tersedia</h3>
              <ul className="space-y-3">
                 {['Arduino Kit & Sensor', 'Raspberry Pi 4', 'Oscilloscope Digital', 'PC High-Spec (RTX 3060)'].map((alat, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                       <CheckCircle2 size={18} className="text-green-500" /> {alat}
                    </li>
                 ))}
              </ul>
              
              <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                 Ajukan Peminjaman Sekarang
              </button>
           </div>
        </div>

      </div>
    </main>
  );
}