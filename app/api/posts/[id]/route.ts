import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: Promise<{ id: string }>;
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    // 1. TANGKAP ID (Wajib pakai await di Next.js 16)
    const { id } = await params; 
    const postId = parseInt(id);

    // 2. HAPUS DARI DATABASE
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: "Berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Gagal hapus:", error); // Biar kelihatan errornya di terminal
    return NextResponse.json({ message: "Gagal menghapus" }, { status: 500 });
  }
}