module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9e0109",

          "secondary": "#006643",

          "accent": "#ea0e80",

          "neutral": "#1F2028",

          "base-100": "#373B3E",

          "info": "#6BB2EF",

          "success": "#21DE7C",

          "warning": "#926107",

          "error": "#FC534A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
