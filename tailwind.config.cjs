/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d802bc",

          secondary: "#9be4ff",

          accent: "#c5fca4",

          neutral: "#2C2234",

          "base-100": "#E6E7EA",

          info: "#5B7DE1",

          success: "#11553A",

          warning: "#F3AB53",

          error: "#E03D2E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
