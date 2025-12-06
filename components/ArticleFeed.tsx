"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, List, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Tipe data artikel
type Article = {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  author: string;
  createdAt: Date;
};

export default function ArticleFeed({ posts }: { posts: Article[] }) {
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-8">
      {/* --- TOMBOL GANTI LAYOUT --- */}
      <div className="flex justify-end">
        <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm inline-flex">
          <button
            onClick={() => setLayout("grid")}
            className={`p-2 rounded-md transition-all ${
              layout === "grid" 
                ? "bg-blue-100 text-blue-600 shadow-sm" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`p-2 rounded-md transition-all ${
              layout === "list" 
                ? "bg-blue-100 text-blue-600 shadow-sm" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* --- AREA KONTEN (ANIMATED) --- */}
      <motion.div 
        layout 
        className={
          layout === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "flex flex-col gap-6 max-w-4xl mx-auto"
        }
      >
        <AnimatePresence>
          {posts.map((post) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={post.id}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                layout === "list" ? "flex flex-col md:flex-row items-center md:items-stretch" : "flex flex-col"
              }`}
            >
              
              {/* GAMBAR */}
              <div className={`relative overflow-hidden ${
                layout === "list" ? "w-full md:w-64 h-48 md:h-auto shrink-0" : "h-56 w-full"
              }`}>
                {post.imageUrl ? (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                    <span className="text-blue-200 font-bold text-5xl">{post.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* TEKS KONTEN */}
              <div className="p-6 flex flex-col flex-1 w-full">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">
                  <span className="bg-blue-50 px-2 py-1 rounded">Artikel</span>
                </div>

                <Link href={`/artikel/${post.id}`}>
                  <h2 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug ${
                    layout === "list" ? "text-2xl" : "text-xl"
                  }`}>
                    {post.title}
                  </h2>
                </Link>

                {/* Preview Text (Hanya muncul di List View biar rapi) */}
                {layout === "list" && (
                  <div 
                    className="text-gray-500 text-sm line-clamp-2 mb-4 prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />
                )}

                {/* FOOTER META DATA */}
                <div className="mt-auto flex items-center justify-between text-gray-500 text-xs sm:text-sm border-t border-gray-50 pt-4 w-full">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> 
                      {new Date(post.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  
                  <Link href={`/artikel/${post.id}`} className="flex items-center gap-1 text-gray-900 font-semibold group-hover:translate-x-1 transition-transform">
                    Baca <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}