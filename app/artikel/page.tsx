import { prisma } from "@/lib/prisma"; // Import helper yang tadi kita buat
import Link from "next/link";

// Tambahkan revalidate agar data tidak nyangkut (cache)
export const revalidate = 0; 

export default async function ArtikelPage() {
  // 1. AMBIL DATA DARI DATABASE (Langsung!)
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc', // Urutkan dari yang terbaru
    },
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Artikel & Berita Lab</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">Belum ada artikel yang diterbitkan.</p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              
              {/* Placeholder Gambar (Nanti bisa ditambah fitur upload gambar) */}
              <div className="w-full md:w-64 h-40 bg-blue-100 rounded-xl flex-shrink-0 flex items-center justify-center text-blue-500 font-bold text-4xl">
                {post.title.charAt(0)}
              </div>
              
              <div className="flex flex-col justify-center w-full">
                <span className="text-blue-600 text-sm font-semibold mb-2">Berita Lab</span>
                
                <Link href={`/artikel/${post.id}`}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">{post.title}</h2>
                </Link>
                
                {/* Menampilkan isi HTML dari Rich Text Editor dengan aman */}
                <div 
                  className="text-gray-600 mb-4 line-clamp-2 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                <div className="flex items-center text-sm text-gray-500 mt-auto">
                  <span className="font-medium text-gray-900">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}