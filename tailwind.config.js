/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#5D47C1',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'maven': ['Maven Pro', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'redhat': ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 