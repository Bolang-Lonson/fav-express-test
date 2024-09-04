/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        favblue: '#2f3d6c',
        favbluelight: '#eaf1fe',
        red: '#ff0000',
      },
      fontSize: {
        md: '14px',
        x: '16px'
      },
      fontFamily: {
        poppins: ['var(--poppins-font)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
