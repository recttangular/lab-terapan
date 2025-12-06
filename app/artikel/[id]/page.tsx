import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface PageProps { params: Promise<{ id: string }> }

export default async function DetailArtikel(props: PageProps) {
  const params = await props.params;
  const post = await prisma.post.findUnique({ where: { id: parseInt(params.id) } });
  if (!post) return notFound();

  const renderLayout = () => {
    // --- LAYOUT 1: STANDARD (Gambar Atas Besar) ---
    if (post.layout === 'standard') {
      return (
        <>
          {post.imageUrl && (
            <img src={post.imageUrl} className="w-full h-[50vh] md:h-[60vh] object-cover rounded-3xl mb-8 shadow-xl" />
          )}
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      );
    }

    // --- LAYOUT 2: SPLIT (Gambar Kiri, Teks Kanan) ---
    if (post.layout === 'split') {
      return (
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-24">
             {post.imageUrl && (
              <img src={post.imageUrl} className="w-full aspect-[3/4] object-cover rounded-3xl shadow-xl" />
            )}
          </div>
          <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      );
    }

    // --- LAYOUT 3: GALLERY (Banyak Gambar Grid) ---
    if (post.layout === 'gallery') {
      return (
        <>
          {/* Teks Dulu */}
          <div className="prose prose-lg max-w-none mb-12 mx-auto text-center" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          {/* Grid Foto */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {post.imageUrl && <img src={post.imageUrl} className="w-full h-64 object-cover rounded-xl" />}
            {post.gallery.map((img, i) => (
              <img key={i} src={img} className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform" />
            ))}
          </div>
        </>
      );
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen bg-white">
      <Link href="/artikel" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
        <ArrowLeft size={20} className="mr-2" /> Kembali
      </Link>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">{post.title}</h1>
      <p className="text-center text-gray-500 mb-12">Diposting oleh {post.author}</p>

      {/* RENDER SESUAI PILIHAN */}
      {renderLayout()}

    </main>
  );
}