/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "creator-banner": "url('/feedBg.png')",
      },
    },
  },
  plugins: [],
};
