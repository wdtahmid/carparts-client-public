module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dc2626",

          "secondary": "#1f2937",

          "accent": "#ea0e80",

          "neutral": "#6b7280",

          "base-100": "#f3f4f6",

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
