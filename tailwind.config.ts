import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#e74c3c",
      primaryDarkColor: "#34495e",
      customWhite: "#ecf0f1",
      customBlack: "#1e272e",
      customBlue: "#6E73F1",
      customGray: "#858887",

      "primary-50": "#E8E8FD",
      "primary-100": "#D0D2FB",
      "primary-200": "#9DA0F6",
      "primary-300": "#6E73F1",
      "primary-400": "#3B41ED",
      "primary-500": "#151DE0",
      "primary-600": "#1116B1",
      "primary-700": "#0D1187",
      "primary-800": "#080B59",
      "primary-900": "#04062F",
      "primary-950": "#020317",

      "accent-50": "#F1EFEF",
      "accent-100": "#E5E2E1",
      "accent-200": "#C9C1C0",
      "accent-300": "#AFA4A2",
      "accent-400": "#938481",
      "accent-500": "#766865",
      "accent-600": "#5D5250",
      "accent-700": "#473F3D",
      "accent-800": "#2F2928",
      "accent-900": "#191615",
      "accent-950": "#0B0A09",

      "custom-white-50": "#FFF",
      "custom-white-100": "#FFF",
      "custom-white-200": "#FBFDFE",
      "custom-white-300": "#FBFDFE",
      "custom-white-400": "#F8FAFC",
      "custom-white-500": "#F7FAFC",
      "custom-white-600": "#ADCCE0",
      "custom-white-700": "#67A0C6",
      "custom-white-800": "#366C91",
      "custom-white-900": "#1C384A",
      "custom-white-950": "#0E1C25",

      "custom-black-50": "#E6EAE6",
      "custom-black-100": "#CED4CE",
      "custom-black-200": "#9AA89A",
      "custom-black-300": "#6A7B6A",
      "custom-black-400": "#3D473D",
      "custom-black-500": "#000000",
      "custom-black-600": "#0E100E",
      "custom-black-700": "#0C0E0C",
      "custom-black-800": "#070807",
      "custom-black-900": "#050505",
      "custom-black-950": "#020302",

      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
