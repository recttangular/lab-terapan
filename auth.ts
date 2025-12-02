import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // Fungsi untuk mengecek password
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // 1. Cari user di database berdasarkan email
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
        });

        // 2. Kalau user gak ketemu
        if (!user) {
          return null;
        }

        // 3. Cek Password (Sederhana dulu: text vs text)
        // Nanti kita upgrade pakai bcrypt biar aman
        if (user.password === credentials.password) {
          // Sukses Login! Kembalikan data user
          return user; 
        }

        return null; // Password salah
      },
    }),
  ],
  pages: {
    signIn: "/login", // Halaman login kustom kita
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token.sub) {
        // Masukkan ID user ke sesi biar bisa dipakai
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = String(user.id);
      }
      return token;
    }
  },
  session: {
    strategy: "jwt", // Pakai JSON Web Token biar ringan
  },
});