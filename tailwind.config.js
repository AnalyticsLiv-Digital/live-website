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
        trainingheading: '#30486A',
        trainingsection: '#EAF0FF',
        serviceheading: '#30486A',
        servicesection: '#EAF0FF',
        servicemedia: '#30486A',
        serviceanalytics: '#6A305D',
        servicesolutions: '#1B8AAD',
        servicetraining: '#6A3030',
        analyticsheading: '#30486A',
        analyticssection: '#EAF0FF',
        lookerheading: '#30486A',
        lookersection: '#EAF0FF',
    }
    },
  },
  plugins: [],
}