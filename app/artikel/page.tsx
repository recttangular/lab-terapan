import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const revalidate = 0; 

export default async function ArtikelPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Artikel & Berita Lab</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-xl mb-4" />
            )}
            <Link href={`/artikel/${post.id}`}>
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}