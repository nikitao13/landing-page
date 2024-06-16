// @type {import('tailwindcss').Config}
import clipPath from "tailwind-clip-path";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        skew: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
        "notched-br":
          "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)",
        "notched-bl":
        "polygon(0 0, 100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px))"
      },
      colors: {
        'light-blue': '#04aefe',
        'sticker-yellow': '#ffd200', 
        'sticker-red': '#dd1619', 
        'sticker-blue': '#0c6cb9',
      },
    },
  },
  plugins: [clipPath],
};
