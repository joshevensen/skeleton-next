import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export const palette = {
  orange: "#F25430",
  teal: "#1C6C7D",

  blue: "#1E88E5",
  green: "#4CAF50",
  yellow: "#F9B301",
  red: "#C62828",

  black: "#1d1f20",
  gray: {
    900: "#263238",
    800: "#37474F",
    700: "#455A64",
    600: "#546E7A",
    500: "#607D8B",
    400: "#78909C",
    300: "#90A4AE",
    200: "#B0BEC5",
    100: "#CFD8DC",
    50: "#EFF2F2",
  },
  white: "#fcfdfe",
};

const config: Config = {
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  content: [
    "./src/app.config.ts",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/forms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "30em", // > 480px
      sm: "40em", // > 640px
      md: "48em", // > 768px
      lg: "64em", // > 1024px
      xl: "80em", // > 1280px
    },
    colors: {
      transparent: "transparent",
      black: palette.black,
      gray: palette.gray,
      white: palette.white,

      primary: {
        DEFAULT: palette.orange,
        hover: palette.teal,
        active: palette.teal,
        disabled: palette.gray[400],
      },
      secondary: {
        DEFAULT: palette.teal,
        hover: palette.orange,
        active: palette.orange,
        disabled: palette.gray[400],
      },
      light: {
        DEFAULT: palette.gray[600],
        hover: palette.orange,
        active: palette.orange,
        disabled: palette.gray[400],
      },

      info: palette.blue,
      success: palette.green,
      warning: palette.yellow,
      error: palette.red,

      text: {
        muted: palette.gray[400],
        light: palette.gray[700],
        DEFAULT: palette.gray[900],
      },
      link: {
        DEFAULT: palette.teal,
        hover: palette.orange,
        active: palette.orange,
        disabled: palette.gray[400],
      },
      border: {
        DEFAULT: palette.gray[100],
        dark: palette.gray[200],
      },
      background: {
        DEFAULT: palette.gray[50],
        card: palette.white,
      },
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text.DEFAULT"),
            "--tw-prose-headings": theme("colors.text.DEFAULT"),
            "--tw-prose-lead": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme("colors.link.DEFAULT"),
            "--tw-prose-bold": theme("colors.text.dark"),
            "--tw-prose-counters": theme("colors.text.DEFAULT"),
            "--tw-prose-bullets": theme("colors.text.light"),
            "--tw-prose-hr": theme("colors.border.DEFAULT"),
            "--tw-prose-quotes": theme("colors.text.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.border.DEFAULT"),
            "--tw-prose-captions": theme("colors.text.light"),
            "--tw-prose-kbd": theme("colors.text.DEFAULT"),
            "--tw-prose-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.background.DEFAULT"),
            "--tw-prose-th-borders": theme("colors.border.DEFAULT"),
            "--tw-prose-td-borders": theme("colors.border.DEFAULT"),
            h2: {
              marginTop: "1.25rem",
              marginBottom: "0.625rem",
            },
            a: {
              "&:hover": {
                color: theme("colors.link['hover']"),
              },
            },
            pre: {
              padding: 0,
              backgroundColor: "transparent",
            },
          },
        },
      }),
    },
  },
};

export default config;
