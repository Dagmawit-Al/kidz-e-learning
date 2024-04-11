/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }
    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    colors: {
      logo: "rgba(255,247,21,255)",
      pink: "#E6777A",
      rose: "#ffe4e6",
      fuchisa: "#FDE2EC",
      blue: "#7D9BE2",
      purple: "#7E60CC",
      cyan: "#5FDFF0",
      // pink: "#ff49db",
      orange: "#FB9060",
      cream: "#F7F9F3",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      red: "#fee2e2",
      white: "#f8fafc",
      greentwo: "#15803d",
      black: "#020617",
      header: "#5abea4",
      background: "#faf8f0",
      white: "#F7F9F3",
    },
    fontFamily: {
      header: ["ui-serif", "Georgia"],
      paragraph: ["ui-monospace", "SFMono-Regular"],
    },
    colors: {
      "regal-blue": "#243c5a",
      white: "#Ffffff",
      greentwo: "#15803d",
      // middlesection: "#f1faf0",
      // button: "#F7F9F3",
      middlesection: "#7D9BE2",
      button: "#FB9060",
      navbarBack: "#7D9BE2",
      pdfBorder: "#05cbf7",
      buttoncolor: "#ffd01e",
      bodyback: "#0081a1",
      cardColor: "#41aac4",
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    require("flowbite/plugin"),
  ],
  
};
