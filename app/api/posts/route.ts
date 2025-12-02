import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Pastikan import dari lib/prisma

// ... kode POST yang lama biarkan di atas sini ...

export async function POST(request: Request) {
  // ... (biarkan kode POST kamu yang lama, jangan dihapus) ...
  // Kalau kode POST kamu masih import { PrismaClient }... ganti jadi import { prisma } from '@/lib/prisma' ya, biar konsisten.
  const body = await request.json();
    const { title, content } = body;

    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: "Admin Aslab",
      },
    });
    return NextResponse.json(newPost, { status: 201 });
}

// --- TAMBAHKAN BAGIAN INI ---
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' }, // Urutkan dari yang terbaru
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Gagal mengambil data" }, { status: 500 });
  }
}