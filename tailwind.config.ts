import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        button: "#BDC3C7"
      },
      fontFamily: {
        'Poppins' : ['"Poppins"', 'sans-serif'],
        'Roboto' : ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        "bgAbout1" : "./public/img/T5.jpeg",
        "bgAbout2" : "./public/img/T7.jpeg",

      }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")
  ],
  varians: {
    scrollbar :['rounded', 'hover'],
  }
} satisfies Config;
