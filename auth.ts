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
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Pastikan tidak ada merah disini setelah langkah 2 tadi
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
        });

        if (!user) return null;

        if (user.password === credentials.password) {
          return {
            ...user,
            id: String(user.id), // Pastikan ini ada
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});