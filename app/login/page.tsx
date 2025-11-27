import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-700">Login Asisten</h1>
          <p className="text-gray-500 text-sm mt-2">Masuk untuk mengelola konten lab</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email / NIM</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="admin@lab.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <Link href="/dashboard" className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all">
            MASUK
          </Link>
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