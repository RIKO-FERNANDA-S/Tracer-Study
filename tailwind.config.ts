import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			kuningMawa1: '#FFC107',
			biruMawa2: '#1E37A1',
			biruSMKPK: "#2A70B6",
  		},
  		backgroundColor: {
  			button: '#BDC3C7',
			kuningMawa1: '#F9C223',
			biruMawa2: '#1E37A1',
			biruSMKPK: "#2A70B6"
  		},
  		fontFamily: {
  			Poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			Roboto: [
  				'Roboto',
  				'sans-serif'
  			],
			Monstserrat: [
				'Monstserrat',
				'sans-serif'
			],
			Lora: [
				'Lora',
				'sans-serif'
			]
  		},
  		backgroundImage: {
			"bgHome" : "url('/img/img3.jpg')",
			"bgForm" : "url('/img/papan1.jpeg')",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
      require("tailwindcss-animate")
],
  varians: {
    scrollbar :['rounded', 'hover'],
  }
} satisfies Config;
