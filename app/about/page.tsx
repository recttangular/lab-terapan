export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tentang Laboratorium</h1>

      {/* Konten 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Selamat datang di Laboratorium Terapan. Kami adalah pusat pengembangan inovasi
            dan praktikum mahasiswa yang berfokus pada teknologi modern.
          </p>
          <p>
            Lab ini dikelola oleh tim asisten yang berdedikasi untuk membantu mahasiswa
            dalam memahami materi praktikum dan menyediakan fasilitas riset yang memadai.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-4">
            <h3 className="font-bold text-blue-800 mb-2">Visi Kami</h3>
            <p className="text-sm">Menjadi laboratorium unggulan yang mencetak talenta digital berstandar industri.</p>
          </div>
        </div>

        {/* Kolom Kanan: Kotak Gambar (Placeholder) */}
        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
          <span className="text-gray-400 font-medium">[Foto Kegiatan Lab]</span>
        </div>
      </div>
    </main>
  );
}