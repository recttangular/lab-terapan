import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailArtikel(props: PageProps) {
  const params = await props.params;
  const postId = parseInt(params.id);

  if (isNaN(postId)) return notFound();

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER GAMBAR BESAR */}
      <div className="relative h-[60vh] w-full bg-gray-900">
        {post.imageUrl ? (
          <>
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 opacity-90">
             <span className="text-white/20 font-bold text-9xl">{post.title.charAt(0)}</span>
          </div>
        )}

        {/* JUDUL DI ATAS GAMBAR */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/artikel" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm font-medium transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/50"
            >
              <ArrowLeft size={16} className="mr-2" /> Kembali ke Artikel
            </Link>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
              <div className="flex items-center gap-2">
                <User size={18} className="text-blue-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-400" />
                <span>{new Date(post.createdAt).toLocaleDateString('id-ID', { dateStyle: 'long' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-400" />
                <span>2 min baca</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ISI KONTEN */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div 
          className="prose prose-lg prose-blue max-w-none 
          prose-headings:font-bold prose-headings:text-gray-900 
          prose-p:text-gray-600 prose-p:leading-relaxed 
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-2xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* SHARE / FOOTER KECIL */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm text-center italic">
            Akhir dari artikel. Terima kasih sudah membaca. 👋
          </p>
        </div>
      </article>
    </main>
  );
}