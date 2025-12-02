import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/artikel" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
        &larr; Kembali ke Daftar Artikel
      </Link>

      <article>
        <header className="mb-8 border-b pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-8 shadow-md"
            />
          )}

          <div className="text-gray-500 text-sm">
            {new Date(post.createdAt).toLocaleDateString('id-ID')}
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}