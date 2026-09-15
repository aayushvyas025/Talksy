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
      "light",
      "dark",
       "dracula",
       "halloween",
       "valentine",
       "synthwave",
       "garden",
       "forest",
       "aqua",
       "night",
       "sunset",
       "luxury",
       "dim"
    ]
  }
};
