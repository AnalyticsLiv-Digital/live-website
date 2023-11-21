/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: '#4285F4',
        h1: '#6D6D6D',
        back: '#F8FDFE',
        txt: '#30486A',
        menu: '#7DD3FC',
        sec: '#DFEBFF',
        bacbtn: '#7FADF8',
        casep: '#3B3C3B',
    }
    },
  },
  plugins: [],
}