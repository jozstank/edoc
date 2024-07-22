/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 3.5s ease-in-out",
        fadeInLeft: "fadeInLeft 2s ease-in-out",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          from: {
            opacity: 0,
            transform: "translateX(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
