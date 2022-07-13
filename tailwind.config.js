/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hmGreen : '#21b37e',
        hmDark : '#2b2d42',
        hmLogoGreen : '#00AC69',
        hmLogoDark : '#12284C',
        hmsectionTitle : '#777985',
        hmfooterBg : '#f3f4f4',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      fontSize : {
        'px-15' : '15px',
        'px-20' : '20px',
        'px-30': '30px',
        'px-35': '35px',
      },
      borderRadius : {
        DEFAULT : '5px'
      },
      boxShadow : {
        hmDefault : '0px 12px 22px 0px rgb(43 45 64 / 7%)',
        hmDefaultHover : '0px 12px 22px 0px rgb(43 45 64 / 14%)',
      },
      top: {
        'rightMenuTop': '200px'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes:["light"],
    darkMode:"light"
  },
}
