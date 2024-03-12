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
      fontFamily: {
        'gilroy': ['Gilroy-Bold', 'sans-serif'],
      },
      boxShadow: {
        btnshadow: '1px 1px 23px 2px rgba(255, 251, 251, 0.25)',
        btn2shadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        formshadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.25)',
        testishadow: '1px 1px 6px 0px rgba(0, 0, 0, 0.25)',
        custom: '-5px 5px 4px 2px rgba(0, 0, 0, 0.25)',
        cards: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        casestudy: '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        foter: '0px 4px 4px 0px rgba(0, 0, 0, .25)',
        foter1: '0px 4px 4px 0px #000',
        serviceoffer: '1px 1px 6px 0px rgba(0, 0, 0, 0.25)',
      },
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
        menuheading: '#30486A',
        homepagebtn: "#30486A",
        homepagebg: "#F0F0F9",
        dvbackgrnd: "#F8FBFD",
        "maintext": "#18265B",
        "homepagebtn": "#30486A",
        "homepagebg": "#F0F0F9",
        "ractangl": "rgba(194, 233, 245, 0.92)"
    }
    },
  },
  plugins: [],
}