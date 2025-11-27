import type { Config } from "tailwindcss";

const config: Config = {
  // BAGIAN INI YANG TADI KOSONG/SALAH
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Cari di folder app
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Cari di folder pages (jaga-jaga)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Cari di folder components
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // Cari di src (jaga-jaga)
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;