import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pride: "url('/pride.png')",
      },
      backgroundPosition: {
        pride: "center",
      },
      backgroundSize: {
        pride: "cover",
      },
    },
  },
  plugins: [],
};
export default config;
