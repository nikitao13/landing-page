// @type {import('tailwindcss').Config}
import clipPath from "tailwind-clip-path";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        skew: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
        "notched-br":
          "polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)"
      }
    }
  },
  plugins: [clipPath]
};
