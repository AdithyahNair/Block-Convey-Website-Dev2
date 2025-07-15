/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          lightest: "#FAF9F9",
          light: "#ADD2C9",
          DEFAULT: "#5EA3A3",
          dark: "#488B8F",
        },
        navy: {
          800: "var(--navy-800)",
          900: "var(--navy-900)",
        },
      },
      animation: {
        counter: "counter 2s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        counter: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.1" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hover\\:pause-animation:hover": {
          "animation-play-state": "paused",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
