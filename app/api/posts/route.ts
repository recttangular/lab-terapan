import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // 1. Baca data yang dikirim dari Dashboard
    const body = await request.json();
    const { title, content } = body;

    // 2. Simpan ke Database PostgreSQL via Prisma
    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: "Admin Aslab", // Nanti bisa dibikin dinamis
      },
    });

    // 3. Beri kabar sukses
    return NextResponse.json(newPost, { status: 201 });

  } catch (error) {
    console.error("Gagal simpan:", error);
    return NextResponse.json({ message: "Gagal menyimpan data" }, { status: 500 });
  }
}