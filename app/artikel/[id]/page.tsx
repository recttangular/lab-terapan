import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

// Perbaikan untuk Next.js 15/16: Params adalah Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailArtikel(props: PageProps) {
  // 1. KITA TUNGGU DULU PARAMS-NYA (Wajib di Next.js 16)
  const params = await props.params;
  
  // 2. Ambil ID dan ubah jadi Angka
  const postId = parseInt(params.id);

  // Cek jika ID tidak valid (misal: /artikel/abc)
  if (isNaN(postId)) {
    notFound();
  }

  // 3. Cari artikel di database
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  // 4. Kalau artikel tidak ketemu
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/artikel" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
        &larr; Kembali ke Daftar Artikel
      </Link>

      <article>
        <header className="mb-8 border-b pb-8">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            Berita Lab
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="font-semibold text-gray-900">{post.author}</span>
            <span className="mx-2">•</span>
            <span>
              {new Date(post.createdAt).toLocaleDateString('id-ID', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </span>
          </div>
        </header>

        <div 
          className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}