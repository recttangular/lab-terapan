import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// --- FUNGSI 1: GET (Ambil Data) ---
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Gagal ambil data" }, { status: 500 });
  }
}

// --- FUNGSI 2: POST (Simpan Data) ---
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, imageUrl } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl: imageUrl || null,
        author: "Admin Aslab",
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal simpan data" }, { status: 500 });
  }
}