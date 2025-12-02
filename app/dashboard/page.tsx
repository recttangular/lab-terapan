"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import 'react-quill-new/dist/quill.snow.css'; 

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false }) as any;

type Post = {
  id: number;
  title: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [title, setTitle] = useState('');
  // STATE BARU UNTUK GAMBAR
  const [imageUrl, setImageUrl] = useState(''); 
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      if (!res.ok) throw new Error("Gagal fetch");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    if(!confirm("Yakin mau hapus artikel ini?")) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    alert("Artikel dihapus!");
    fetchPosts(); 
  };

  const handlePublish = async () => {
    if (!title || !content) return alert("Judul dan Konten wajib diisi!");
    setIsLoading(true);

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // KIRIM IMAGE URL JUGA
      body: JSON.stringify({ title, content, imageUrl }), 
    });

    alert("✅ Artikel Berhasil Disimpan!");
    setTitle('');
    setImageUrl(''); // Reset input gambar
    setContent('');
    setIsLoading(false);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Sama seperti sebelumnya) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block fixed h-full">
        <div className="p-6"><h2 className="text-xl font-bold text-blue-700">DASHBOARD</h2></div>
        <nav className="mt-6">
          <a href="#" className="block px-6 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-medium">Kelola Artikel</a>
          <Link href="/" className="block px-6 py-3 text-red-600 mt-12 hover:bg-red-50">Keluar</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:ml-64">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tulis Artikel Baru ✍️</h1>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
          
          {/* Input Judul */}
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
             <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                placeholder="Judul Artikel..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />
          </div>

          {/* --- INPUT BARU: LINK GAMBAR --- */}
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-700 mb-1">Link Gambar Utama (Opsional)</label>
             <input 
                type="url" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" 
                placeholder="https://contoh.com/gambar.jpg" 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
             />
             <p className="text-xs text-gray-500 mt-1">*Copy-paste link gambar dari internet (akhiran .jpg/.png)</p>
          </div>
          {/* ------------------------------- */}

          {/* Editor */}
          <div className="mb-12 h-64">
            <label className="block text-sm font-medium text-gray-700 mb-1">Konten</label>
            <ReactQuill theme="snow" value={content} onChange={setContent} className="h-48" />
          </div>
          
          <button 
            onClick={handlePublish}
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-all mt-4"
          >
            {isLoading ? 'Menyimpan...' : 'PUBLISH SEKARANG'}
          </button>
        </div>

        {/* Tabel Daftar Artikel (Sama seperti sebelumnya) */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar Artikel ({posts.length})</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('id-ID')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}