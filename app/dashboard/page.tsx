"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import 'react-quill-new/dist/quill.snow.css'; 
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false }) as any;

export default function DashboardPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Biar tombolnya loading

  // Fungsi saat tombol ditekan
  const handlePublish = async () => {
    if (!title || !content) {
      alert("Judul dan Konten tidak boleh kosong!");
      return;
    }

    setIsLoading(true);

    try {
      // Kirim data ke API yang baru kita buat
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert("✅ Artikel Berhasil Disimpan!");
        setTitle('');   // Kosongkan form
        setContent(''); // Kosongkan editor
      } else {
        alert("❌ Gagal menyimpan artikel.");
      }
    } catch (error) {
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-700">DASHBOARD</h2>
        </div>
        <nav className="mt-6">
          <a href="#" className="block px-6 py-3 bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-medium">Buat Artikel</a>
          <Link href="/" className="block px-6 py-3 text-red-600 mt-12 hover:bg-red-50">Keluar</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Buat Artikel Baru ✍️</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-4">
             <label className="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
             <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg" 
                placeholder="Masukkan judul menarik..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
             />
          </div>

          <div className="mb-12 h-64">
            <label className="block text-sm font-medium text-gray-700 mb-1">Konten</label>
            <ReactQuill 
              theme="snow" 
              value={content} 
              onChange={setContent} 
              className="h-48"
            />
          </div>

          <button 
            onClick={handlePublish}
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg font-bold text-white transition-all mt-8 ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isLoading ? 'Menyimpan...' : 'PUBLISH ARTIKEL'}
          </button>
        </div>
      </main>
    </div>
  );
}