import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Calendar, User, ArrowRight, ImageIcon } from "lucide-react";

export const revalidate = 0; 

export default async function ArtikelPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Berita & <span className="text-blue-600">Artikel</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru seputar kegiatan praktikum, riset teknologi, dan pengumuman laboratorium.
          </p>
        </div>

        {/* EMPTY STATE */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ImageIcon className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Belum ada artikel</h3>
            <p className="text-gray-500 mt-2">Nantikan update terbaru dari kami.</p>
          </div>
        ) : (
          
          /* GRID ARTIKEL */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                
                {/* GAMBAR (Dengan Efek Zoom) */}
                <div className="h-56 overflow-hidden relative bg-gray-100">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                      <span className="text-blue-200 font-bold text-6xl select-none">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Badge Tanggal */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </div>
                </div>

                {/* KONTEN KARTU */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    <span>Berita Lab</span>
                  </div>

                  <Link href={`/artikel/${post.id}`} className="block mb-3">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Cuplikan Isi (HTML Strip sederhana biar rapi) */}
                  <div 
                    className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1 prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />

                  {/* FOOTER KARTU */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/artikel/${post.id}`} 
                      className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Baca <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}