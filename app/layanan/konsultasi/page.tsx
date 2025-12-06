import Link from "next/link";
import { ArrowLeft, Wrench, MessageCircle, User } from "lucide-react";

export default function KonsultasiPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Beranda
        </Link>

        <div className="text-center mb-16">
           <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center text-orange-600 mx-auto mb-6">
              <Wrench size={40} />
           </div>
           <h1 className="text-4xl font-extrabold text-gray-900">Klinik Koding & Hardware</h1>
           <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
             Punya error yang nggak kelar-kelar? Atau laptop tiba-tiba bluescreen?
             Diskusikan dengan tim teknis kami.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* List Mentor */}
            <div>
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="text-orange-500"/> Asisten Jaga Hari Ini
                </h3>
                <div className="space-y-4">
                    {['Ahmad (Web Expert)', 'Siti (IoT Engineer)', 'Budi (Networking)'].map((nama, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-700">
                                {nama.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{nama}</h4>
                                <p className="text-xs text-green-600 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
                                </p>
                            </div>
                            <button className="ml-auto bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm hover:bg-orange-50 hover:text-orange-600">
                                Chat
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Pengajuan */}
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-orange-100 border border-orange-100">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MessageCircle className="text-orange-500"/> Ajukan Tiket Bantuan
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">Kendala</label>
                        <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500/20">
                            <option>Error Koding (Software)</option>
                            <option>Masalah Hardware/Alat</option>
                            <option>Jaringan/Internet</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">Deskripsi Singkat</label>
                        <textarea className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500/20 h-32" placeholder="Jelaskan error yang muncul..."></textarea>
                    </div>
                    <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
                        Kirim Tiket
                    </button>
                </div>
            </div>
        </div>

      </div>
    </main>
  );
}