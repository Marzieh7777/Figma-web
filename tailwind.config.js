/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px"
    },
    extend: {
      colors: {

        black1: '#263238',
        d_Grey: '#4D4D4D',
        grey: '#717171',
        l_grey: '#89939E',
        grey_blue: '#ABBED1',
        silver: '#F5F7FA',
        white: '#FFFFFF',

        primary: '#4CAF4F',
        secondry: '#263238',
        info: '#2194f3',

        shade1: '#43A046',
        shade2: '#388E3B',
        shade3: '#237D31',
        shade4: '#1B5E1F',
        shade5: '#103E13',

        tint1: '#66BB69',
        tint2: '#81C784',
        tint3: '#A5D6A7',
        tint4: '#C8E6C9',
        tint5: '#E8F5E9',


      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage: {

      }

    },
    fontFamily: {
      Baloo: ["BalooBhaijaan2", "sans-serif"],
      Zain: ["Zain", "sans-serif"],
      Winky: ["Winky Sans", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      }
    },

  },
  plugins: [],
}