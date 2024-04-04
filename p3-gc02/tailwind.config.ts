import type { Config } from "tailwindcss";
// const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "poppins-regular": ['"Poppins-Regular"', "sans-serif"],
        "poppins-black": ['"Poppins-Black"', "sans-serif"],
        "poppins-black-italic": ['"Poppins-BlackItalic"', "sans-serif"],
        "poppins-bold": ['"Poppins-Bold"', "sans-serif"],
        "poppins-bold-italic": ['"Poppins-BoldItalic"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
