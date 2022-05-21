module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff7a7c",

          "secondary": "#ef97aa",

          "accent": "#ede17b",

          "neutral": "#242433",

          "base-100": "#ffffff",

          "info": "#2DACE6",

          "success": "#27AA92",

          "warning": "#E79418",

          "error": "#F53266",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
