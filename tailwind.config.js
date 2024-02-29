/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
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
      pink: "#fdf2f8",
      rose: "#ffe4e6",
      fuchisa: "#FDE2EC",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      // pink: "#ff49db",
      orange: "#ff7849",
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
    },
    fontFamily: {
      header: ["ui-serif", "Georgia"],
      paragraph: ["ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
