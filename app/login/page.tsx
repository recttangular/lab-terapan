"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; // Import fungsi login
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Panggil Satpam (NextAuth)
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Jangan redirect otomatis biar kita handle sendiri
    });

    if (result?.error) {
      setError("Email atau Password salah!");
      setIsLoading(false);
    } else {
      // Login Sukses! Bawa ke Dashboard
      router.push("/dashboard");
      router.refresh(); // Refresh agar navbar berubah
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-700">Login Asisten</h1>
          <p className="text-gray-500 text-sm mt-2">Masuk untuk mengelola konten lab</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="admin@lab.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isLoading ? "Memproses..." : "MASUK"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/" className="text-gray-400 hover:text-gray-600">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}