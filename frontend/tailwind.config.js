 /** @type {import("tailwindcss").Config} */
 module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "seecho": {
          "darkgreen": "#124F3B",
          "lightgreen": "#2DC43D",
          "gold": "#FFBF69",
          "orange": "#FF9F1C",
          "darkblue": "#01040A",
          "lightblue": "#2EC4B6",
          "black": "#1B1B1B",
          "darkgrey": "#2F2F2F",
          "lightgrey": "#464545"
        },
        "discord": "#5865F2",
      },
      boxShadow: {
        'seecho-bubble': '-14px 0 0 0 #2DC43D',
        'user-bubble': '14px 0 0 0 #FFBF69',
      },
    },
  },
  plugins: [],
}
