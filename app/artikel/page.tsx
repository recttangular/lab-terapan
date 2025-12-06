import { prisma } from "@/lib/prisma";
import ArticleFeed from "@/components/ArticleFeed"; // Import komponen baru
import { ImageIcon } from "lucide-react";

export const revalidate = 0; 

export default async function ArtikelPage() {
  // 1. Ambil data dari database (Server Side)
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER GANTENG */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Blog & Informasi</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
            Kabar Laboratorium
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan wawasan teknologi terbaru dan dokumentasi kegiatan kami.
          </p>
        </div>

        {/* LOGIKA TAMPILAN */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Belum ada artikel</h3>
            <p className="text-gray-500 mt-2">Nantikan update terbaru dari kami.</p>
          </div>
        ) : (
          // Panggil komponen Client yang punya fitur Switch Layout
          <ArticleFeed posts={posts} />
        )}
      </div>
    </main>
  );
}