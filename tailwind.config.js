module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounceIndicator: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 15s ease infinite",

        "bounce-indicator": "bounceIndicator 1.5s infinite ease-in-out",
      },
    },
  },
  fontFamily: {
    sans: ["InterVariable", "sans-serif"],
  },
};
