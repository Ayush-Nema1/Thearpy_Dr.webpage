import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { primary: "#1E3B3F", secondary: "#F0EAE1", accent: "#9A7B4F", paper: "#FAF8F5", sage: "#DCE6E1", brass: "#D9B98A" },
    fontFamily: { serif: ['"Cormorant Garamond"', "serif"], sans: ["Mulish", "sans-serif"], script: ["Allura", "cursive"] },
  } },
  plugins: [],
} satisfies Config;
