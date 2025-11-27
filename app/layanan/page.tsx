export default function LayananPage() {
  // Data Dummy Layanan (Nanti ini diambil dari Database)
  const services = [
    { title: "Peminjaman Alat", desc: "Layanan peminjaman perangkat keras untuk keperluan tugas akhir dan riset." },
    { title: "Praktikum Rutin", desc: "Jadwal dan modul praktikum harian untuk mata kuliah terkait." },
    { title: "Konsultasi Teknis", desc: "Sesi tanya jawab dengan asisten lab terkait kendala koding dan hardware." },
    { title: "Workshop Mingguan", desc: "Pelatihan skill baru yang diadakan setiap minggu untuk umum." },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Layanan Kami</h1>
        <p className="text-gray-500 mt-2">Fasilitas yang dapat dimanfaatkan oleh mahasiswa</p>
      </div>

      {/* Grid Kartu Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}