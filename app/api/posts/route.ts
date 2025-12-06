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
    // Tambah layout dan gallery di sini
    const { title, content, imageUrl, layout, gallery } = body; 

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl: imageUrl || null,
        // Simpan data baru
        layout: layout || "standard",
        gallery: gallery || [], // Kalau kosong, simpan array kosong
        author: "Admin Aslab",
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Gagal simpan" }, { status: 500 });
  }
}