export default function ArtikelPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Artikel & Berita Lab</h1>

      <div className="grid gap-8">
        {/* Contoh Artikel 1 */}
        <article className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          {/* Kotak Gambar */}
          <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl flex-shrink-0"></div>
          
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 text-sm font-semibold mb-2">Tutorial</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
              Cara Install Next.js untuk Pemula
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              Panduan lengkap instalasi framework Next.js menggunakan terminal VS Code dan konfigurasi awal...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Oleh: Aslab Web</span>
              <span className="mx-2">•</span>
              <span>26 Nov 2024</span>
            </div>
          </div>
        </article>

        {/* Contoh Artikel 2 */}
        <article className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl flex-shrink-0"></div>
          <div className="flex flex-col justify-center">
             <span className="text-green-600 text-sm font-semibold mb-2">Info Lab</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
              Jadwal Perekrutan Asisten Baru
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">
              Laboratorium membuka kesempatan bagi mahasiswa semester 3 ke atas untuk bergabung menjadi asisten...
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Oleh: Koordinator</span>
              <span className="mx-2">•</span>
              <span>25 Nov 2024</span>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}