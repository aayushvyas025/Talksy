/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes:[
      "dark",
       "dracula",
       "halloween",
       "synthwave",
       "forest",
       "aqua",
       "night",
       "sunset",
       "luxury",
       "dim"
    ]
  }
};
