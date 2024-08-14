import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      primary: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#379AEF',
        500: '#133D78',
        600: '#09275A',
        700: '#0C2A5D',
        800: '#1B1F5C',
        850: '#0B103C',
        900: '#040836',
      },
      // ...
    },
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
