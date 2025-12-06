"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { signOut } from "next-auth/react"; 
import { UploadButton } from "@/lib/uploadthing";
import { LayoutTemplate, Images, Columns, Trash2, CheckCircle2, LogOut } from "lucide-react"; // Nambah icon Trash & Check

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false }) as any;

type Post = { id: number; title: string; createdAt: string; };

export default function DashboardPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 
  const [gallery, setGallery] = useState<string[]>([]); 
  const [layout, setLayout] = useState('standard'); 
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id: number) => {
    if(!confirm("Hapus artikel ini?")) return;
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    fetchPosts(); 
  };

  const handlePublish = async () => {
    if (!title) return alert("Judul wajib diisi!");
    setIsLoading(true);

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, imageUrl, gallery, layout }), 
    });

    alert("✅ Artikel Berhasil Terbit!");
    setTitle(''); setContent(''); setImageUrl(''); setGallery([]); setLayout('standard');
    setIsLoading(false);
    fetchPosts();
  };

  // --- STYLE UNTUK UPLOAD BUTTON (Custom Appearance) ---
  const uploadBtnStyle = {
    button: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-blue-200",
    allowedContent: "text-gray-400 text-xs mt-1"
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      
      {/* --- SIDEBAR GANTENG --- */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col fixed h-full p-8 z-10">
        <div className="mb-10 flex items-center gap-2 text-blue-700">
           <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">🚀</div>
           <h2 className="text-xl font-extrabold tracking-tight">LAB DASHBOARD</h2>
        </div>
        
        <nav className="flex-1 space-y-2">
            <div className="px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-semibold cursor-pointer">
                📝 Buat Artikel
            </div>
            <div className="px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-xl font-medium cursor-not-allowed opacity-50">
                ⚙️ Pengaturan (Soon)
            </div>
        </nav>

        <button 
            onClick={() => signOut({ callbackUrl: "/login" })} 
            className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-xl font-medium transition-colors"
        >
            <LogOut size={18} /> Keluar
        </button>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-6 md:p-12 md:ml-72 max-w-6xl mx-auto">
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Editor <span className="text-blue-600">Artikel</span> ✨
            </h1>
            <p className="text-gray-500 mt-2">Bagikan pengetahuan dan riset terbaru laboratorium.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* KOLOM KIRI (EDITOR) - Span 2 Kolom */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* CARD 1: JUDUL & KONTEN */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="space-y-6">
                        <div>
                            <label className="text-sm font-bold text-gray-700 mb-2 block uppercase tracking-wide">Judul Artikel</label>
                            <input 
                                type="text" 
                                className="w-full px-5 py-4 text-lg font-semibold rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-300" 
                                placeholder="Tulis judul yang menarik..." 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold text-gray-700 mb-2 block uppercase tracking-wide">Konten</label>
                            <div className="prose-editor">
                                <ReactQuill theme="snow" value={content} onChange={setContent} className="h-64 rounded-xl overflow-hidden" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 2: MEDIA UPLOAD (Cover & Gallery) */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <Images size={20} className="text-blue-500"/> Media & Gambar
                    </h3>
                    
                    <div className="space-y-8">
                        {/* Cover Upload */}
                        <div className="p-6 border border-dashed border-gray-300 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                            <label className="text-sm font-bold text-gray-600 mb-4 block text-center">Cover Utama (Thumbnail)</label>
                            
                            {imageUrl ? (
                                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group">
                                    <img src={imageUrl} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button onClick={() => setImageUrl('')} className="bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:bg-red-600 flex items-center gap-2">
                                            <Trash2 size={16}/> Hapus
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex justify-center py-4">
                                    <UploadButton 
                                        endpoint="imageUploader" 
                                        appearance={uploadBtnStyle}
                                        onClientUploadComplete={(res) => setImageUrl(res[0].url)} 
                                        onUploadError={() => alert("Gagal Upload")}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Gallery Upload */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-bold text-gray-600">Galeri Tambahan</label>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">{gallery.length}/10 Foto</span>
                            </div>
                            
                            {/* Grid Preview Gallery */}
                            <div className="grid grid-cols-4 gap-3 mb-4">
                                {gallery.map((url, i) => (
                                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden border group">
                                        <img src={url} className="w-full h-full object-cover" />
                                        <button 
                                            onClick={() => setGallery(gallery.filter((_, idx) => idx !== i))} 
                                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                                        >
                                            <Trash2 size={12}/>
                                        </button>
                                    </div>
                                ))}
                                {/* Tombol Add More Kecil */}
                                {gallery.length < 10 && (
                                    <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                                         <UploadButton 
                                            endpoint="imageUploader" 
                                            appearance={{
                                                button: "bg-transparent text-blue-500 text-xs font-bold px-2",
                                                allowedContent: "hidden"
                                            }}
                                            content={{ button: "+ Add" }}
                                            onClientUploadComplete={(res) => setGallery([...gallery, ...res.map(f => f.url)])} 
                                         />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* KOLOM KANAN (SIDEBAR SETTINGS) */}
            <div className="space-y-8">
                
                {/* CARD 3: LAYOUT SELECTOR */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Pengaturan Tampilan</h3>
                    
                    <div className="space-y-3">
                        {['standard', 'gallery', 'split'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setLayout(type)}
                                className={`
                                    w-full relative p-4 rounded-xl border-2 text-left transition-all duration-200 group
                                    ${layout === type 
                                        ? 'border-blue-600 bg-blue-50/50 shadow-md ring-1 ring-blue-500' 
                                        : 'border-gray-100 hover:border-blue-300 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`
                                        p-3 rounded-lg 
                                        ${layout === type ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-blue-200 group-hover:text-blue-600'}
                                    `}>
                                        {type === 'standard' && <LayoutTemplate size={20} />}
                                        {type === 'gallery' && <Images size={20} />}
                                        {type === 'split' && <Columns size={20} />}
                                    </div>
                                    <div>
                                        <h4 className={`font-bold capitalize ${layout === type ? 'text-blue-900' : 'text-gray-700'}`}>{type} Layout</h4>
                                        <p className="text-xs text-gray-400">
                                            {type === 'standard' && 'Gambar besar di atas'}
                                            {type === 'gallery' && 'Grid foto & album'}
                                            {type === 'split' && 'Gambar & teks 50:50'}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Centang Biru kalau dipilih */}
                                {layout === type && (
                                    <div className="absolute top-4 right-4 text-blue-600">
                                        <CheckCircle2 size={20} fill="currentColor" className="text-white" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="h-px bg-gray-100 my-6"></div>

                    <button 
                        onClick={handlePublish} 
                        disabled={isLoading} 
                        className="w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all transform hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-blue-600 to-indigo-600"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/> Loading...
                            </span>
                        ) : '🚀 PUBLISH SEKARANG'}
                    </button>
                </div>

                {/* CARD 4: RIWAYAT ARTIKEL */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Riwayat Terakhir</h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                        {posts.length === 0 && <p className="text-gray-400 text-sm text-center py-4">Belum ada artikel.</p>}
                        {posts.map(p => (
                            <div key={p.id} className="group flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all">
                                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px]">{p.title}</span>
                                <button 
                                    onClick={() => handleDelete(p.id)} 
                                    className="text-gray-400 hover:text-red-500 bg-gray-100 hover:bg-red-50 p-2 rounded-md transition-colors"
                                    title="Hapus Artikel"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </main>

      {/* GLOBAL STYLE FIXES */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
        .ql-container { border-bottom-left-radius: 0.75rem; border-bottom-right-radius: 0.75rem; font-size: 1rem; }
        .ql-toolbar { border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem; background-color: #f8fafc; border-color: #e2e8f0 !important; }
        .ql-container.ql-snow { border-color: #e2e8f0 !important; }
      `}</style>
    </div>
  );
}