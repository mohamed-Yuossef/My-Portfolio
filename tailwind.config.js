import { Transition } from "@react-spring/web";

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {
         animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "200%":{transform: "translateX(-20%)" },
          "40%":{transform: "translateX(-40%)" },
          "60%":{transform: "translateX(-60%)" },
          "80%":{transform: "translateX(-80%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

