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
        "custom": {
          "lightpink": "#ffc9dc",
          "darkpink": "#ff80a0",
          "purple": "#5e5fab",
          "tan": "#eed29c"
        },
      },
      boxShadow: {
        'user-bubble': '-14px 0 0 0 #2DC43D',
        'seecho-bubble': '14px 0 0 0 #FFBF69',
      },
      dropShadow: {
        "text": "9px 5px rgba(0,0,0,0.6)",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            transform: "translate(0, 20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
      },
      animation: {
        fade: "fade 1s"
      },
    },
  },
  plugins: [],
}
