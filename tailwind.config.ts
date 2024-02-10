import type { Config } from "tailwindcss";
import { amber, black, current, cyan, emerald, fuchsia, indigo, lime, neutral, pink, rose, sky, slate, stone, teal, transparent, violet, zinc } from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  safelist: [
    ...Array.from(Array(360).keys()).map((i) => `rotate-${i}`),
    'bg-vatsim',
    'bg-ivao',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      gray: {
        50: "rgb(var(--gray-050) / <alpha-value>)",
        100: "rgb(var(--gray-100) / <alpha-value>)",
        200: "rgb(var(--gray-200) / <alpha-value>)",
        300: "rgb(var(--gray-300) / <alpha-value>)",
        400: "rgb(var(--gray-400) / <alpha-value>)",
        500: "rgb(var(--gray-500) / <alpha-value>)",
        600: "rgb(var(--gray-600) / <alpha-value>)",
        700: "rgb(var(--gray-700) / <alpha-value>)",
        800: "rgb(var(--gray-800) / <alpha-value>)",
        850: "rgb(var(--gray-850) / <alpha-value>)",
        900: "rgb(var(--gray-900) / <alpha-value>)",
      },
      red: {
        50: "rgb(var(--red-050) / <alpha-value>)",
        100: "rgb(var(--red-100) / <alpha-value>)",
        200: "rgb(var(--red-200) / <alpha-value>)",
        300: "rgb(var(--red-300) / <alpha-value>)",
        400: "rgb(var(--red-400) / <alpha-value>)",
        500: "rgb(var(--red-500) / <alpha-value>)",
        600: "rgb(var(--red-600) / <alpha-value>)",
        700: "rgb(var(--red-700) / <alpha-value>)",
        800: "rgb(var(--red-800) / <alpha-value>)",
        900: "rgb(var(--red-900) / <alpha-value>)",
        950: "rgb(var(--red-950) / <alpha-value>)",
      },
      orange: {
        50: "rgb(var(--orange-050) / <alpha-value>)",
        100: "rgb(var(--orange-100) / <alpha-value>)",
        200: "rgb(var(--orange-200) / <alpha-value>)",
        300: "rgb(var(--orange-300) / <alpha-value>)",
        400: "rgb(var(--orange-400) / <alpha-value>)",
        500: "rgb(var(--orange-500) / <alpha-value>)",
        600: "rgb(var(--orange-600) / <alpha-value>)",
        700: "rgb(var(--orange-700) / <alpha-value>)",
        800: "rgb(var(--orange-800) / <alpha-value>)",
        900: "rgb(var(--orange-900) / <alpha-value>)",
        950: "rgb(var(--orange-950) / <alpha-value>)",
      },
      yellow: {
        50: "rgb(var(--yellow-050) / <alpha-value>)",
        100: "rgb(var(--yellow-100) / <alpha-value>)",
        200: "rgb(var(--yellow-200) / <alpha-value>)",
        300: "rgb(var(--yellow-300) / <alpha-value>)",
        400: "rgb(var(--yellow-400) / <alpha-value>)",
        500: "rgb(var(--yellow-500) / <alpha-value>)",
        600: "rgb(var(--yellow-600) / <alpha-value>)",
        700: "rgb(var(--yellow-700) / <alpha-value>)",
        800: "rgb(var(--yellow-800) / <alpha-value>)",
        900: "rgb(var(--yellow-900) / <alpha-value>)",
        950: "rgb(var(--yellow-950) / <alpha-value>)",
      },
      green: {
        50: "rgb(var(--green-050) / <alpha-value>)",
        100: "rgb(var(--green-100) / <alpha-value>)",
        200: "rgb(var(--green-200) / <alpha-value>)",
        300: "rgb(var(--green-300) / <alpha-value>)",
        400: "rgb(var(--green-400) / <alpha-value>)",
        500: "rgb(var(--green-500) / <alpha-value>)",
        600: "rgb(var(--green-600) / <alpha-value>)",
        700: "rgb(var(--green-700) / <alpha-value>)",
        800: "rgb(var(--green-800) / <alpha-value>)",
        900: "rgb(var(--green-900) / <alpha-value>)",
        950: "rgb(var(--green-950) / <alpha-value>)",
      },
      blue: {
        50: "rgb(var(--blue-050) / <alpha-value>)",
        100: "rgb(var(--blue-100) / <alpha-value>)",
        200: "rgb(var(--blue-200) / <alpha-value>)",
        300: "rgb(var(--blue-300) / <alpha-value>)",
        400: "rgb(var(--blue-400) / <alpha-value>)",
        500: "rgb(var(--blue-500) / <alpha-value>)",
        600: "rgb(var(--blue-600) / <alpha-value>)",
        700: "rgb(var(--blue-700) / <alpha-value>)",
        800: "rgb(var(--blue-800) / <alpha-value>)",
        900: "rgb(var(--blue-900) / <alpha-value>)",
        950: "rgb(var(--blue-950) / <alpha-value>)",
      },
      purple: {
        50: "rgb(var(--purple-050) / <alpha-value>)",
        100: "rgb(var(--purple-100) / <alpha-value>)",
        200: "rgb(var(--purple-200) / <alpha-value>)",
        300: "rgb(var(--purple-300) / <alpha-value>)",
        400: "rgb(var(--purple-400) / <alpha-value>)",
        500: "rgb(var(--purple-500) / <alpha-value>)",
        600: "rgb(var(--purple-600) / <alpha-value>)",
        700: "rgb(var(--purple-700) / <alpha-value>)",
        800: "rgb(var(--purple-800) / <alpha-value>)",
        900: "rgb(var(--purple-900) / <alpha-value>)",
        950: "rgb(var(--purple-950) / <alpha-value>)",
      },
      amber,
      black,
      cyan,
      emerald,
      fuchsia,
      indigo,
      lime,
      neutral,
      pink,
      rose,
      sky,
      slate,
      stone,
      teal,
      violet,
      zinc,
      current,
      transparent
    },
    extend: {
      colors: {
        /*
         * ShadCn UI Color Palette for components
         * @see ui.shadcn.com
         */
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        ivao: "#0D2C99",
      },
      backgroundImage: {
        vatsim: "linear-gradient(50deg, #29B473 0%, #2483C5 75%, #2B3990 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ],
} satisfies Config

export default config