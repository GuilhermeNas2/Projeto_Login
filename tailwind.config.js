/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/3' : '33%'
      },
      fontSize: {
        'pequeno' : '0.7rem',
        'menor' : '1rem'
      },
      inset: {
        '25' : '25px'  
      },
      width: {
        'grande' : '100%'
      }
    },
  },
  plugins: [],
}

