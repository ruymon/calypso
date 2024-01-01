import type { Config } from "tailwindcss";
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
    extend: {
      colors: {
        /*
         * IVAO Atmosphere Color Palette
         * @see ui.shadcn.com
         */
        fuselage: {
          50: "rgb(var(--fuselage-50) / <alpha-value>)",
          100: "rgb(var(--fuselage-100) / <alpha-value>)",
          150: "rgb(var(--fuselage-150) / <alpha-value>)",
          200: "rgb(var(--fuselage-200) / <alpha-value>)",
          250: "rgb(var(--fuselage-250) / <alpha-value>)",
          300: "rgb(var(--fuselage-300) / <alpha-value>)",
          400: "rgb(var(--fuselage-400) / <alpha-value>)",
          450: "rgb(var(--fuselage-450) / <alpha-value>)",
          500: "rgb(var(--fuselage-500) / <alpha-value>)",
          550: "rgb(var(--fuselage-550) / <alpha-value>)",
          600: "rgb(var(--fuselage-600) / <alpha-value>)",
          700: "rgb(var(--fuselage-700) / <alpha-value>)",
          800: "rgb(var(--fuselage-800) / <alpha-value>)",
          900: "rgb(var(--fuselage-900) / <alpha-value>)",
          950: "rgb(var(--fuselage-950) / <alpha-value>)",
        },
        atmos: {
          50: "rgb(var(--atmos-50) / <alpha-value>)",
          100: "rgb(var(--atmos-100) / <alpha-value>)",
          200: "rgb(var(--atmos-200) / <alpha-value>)",
          300: "rgb(var(--atmos-300) / <alpha-value>)",
          400: "rgb(var(--atmos-400) / <alpha-value>)",
          500: "rgb(var(--atmos-500) / <alpha-value>)",
          600: "rgb(var(--atmos-600) / <alpha-value>)",
          700: "rgb(var(--atmos-700) / <alpha-value>)",
          800: "rgb(var(--atmos-800) / <alpha-value>)",
          900: "rgb(var(--atmos-900) / <alpha-value>)",
        },
        ocean: {
          50: "rgb(var(--ocean-50) / <alpha-value>)",
          100: "rgb(var(--ocean-100) / <alpha-value>)",
          200: "rgb(var(--ocean-200) / <alpha-value>)",
          300: "rgb(var(--ocean-300) / <alpha-value>)",
          400: "rgb(var(--ocean-400) / <alpha-value>)",
          500: "rgb(var(--ocean-500) / <alpha-value>)",
          600: "rgb(var(--ocean-600) / <alpha-value>)",
          700: "rgb(var(--ocean-700) / <alpha-value>)",
          800: "rgb(var(--ocean-800) / <alpha-value>)",
          900: "rgb(var(--ocean-900) / <alpha-value>)",
        },
        semantic: {
          red: {
            50: "rgb(var(--semantic-red-50) / <alpha-value>)",
            100: "rgb(var(--semantic-red-100) / <alpha-value>)",
            200: "rgb(var(--semantic-red-200) / <alpha-value>)",
            300: "rgb(var(--semantic-red-300) / <alpha-value>)",
            400: "rgb(var(--semantic-red-400) / <alpha-value>)",
            500: "rgb(var(--semantic-red-500) / <alpha-value>)",
            600: "rgb(var(--semantic-red-600) / <alpha-value>)",
            700: "rgb(var(--semantic-red-700) / <alpha-value>)",
            800: "rgb(var(--semantic-red-800) / <alpha-value>)",
            900: "rgb(var(--semantic-red-900) / <alpha-value>)",
          },
          green: {
            50: "rgb(var(--semantic-green-50) / <alpha-value>)",
            100: "rgb(var(--semantic-green-100) / <alpha-value>)",
            200: "rgb(var(--semantic-green-200) / <alpha-value>)",
            300: "rgb(var(--semantic-green-300) / <alpha-value>)",
            400: "rgb(var(--semantic-green-400) / <alpha-value>)",
            500: "rgb(var(--semantic-green-500) / <alpha-value>)",
            600: "rgb(var(--semantic-green-600) / <alpha-value>)",
            700: "rgb(var(--semantic-green-700) / <alpha-value>)",
            800: "rgb(var(--semantic-green-800) / <alpha-value>)",
            900: "rgb(var(--semantic-green-900) / <alpha-value>)",
          },
          yellow: {
            50: "rgb(var(--semantic-yellow-50) / <alpha-value>)",
            100: "rgb(var(--semantic-yellow-100) / <alpha-value>)",
            200: "rgb(var(--semantic-yellow-200) / <alpha-value>)",
            300: "rgb(var(--semantic-yellow-300) / <alpha-value>)",
            400: "rgb(var(--semantic-yellow-400) / <alpha-value>)",
            500: "rgb(var(--semantic-yellow-500) / <alpha-value>)",
            600: "rgb(var(--semantic-yellow-600) / <alpha-value>)",
            700: "rgb(var(--semantic-yellow-700) / <alpha-value>)",
            800: "rgb(var(--semantic-yellow-800) / <alpha-value>)",
            900: "rgb(var(--semantic-yellow-900) / <alpha-value>)",
          },
          blue: {
            50: "rgb(var(--semantic-blue-50) / <alpha-value>)",
            100: "rgb(var(--semantic-blue-100) / <alpha-value>)",
            200: "rgb(var(--semantic-blue-200) / <alpha-value>)",
            300: "rgb(var(--semantic-blue-300) / <alpha-value>)",
            400: "rgb(var(--semantic-blue-400) / <alpha-value>)",
            500: "rgb(var(--semantic-blue-500) / <alpha-value>)",
            600: "rgb(var(--semantic-blue-600) / <alpha-value>)",
            700: "rgb(var(--semantic-blue-700) / <alpha-value>)",
            800: "rgb(var(--semantic-blue-800) / <alpha-value>)",
            900: "rgb(var(--semantic-blue-900) / <alpha-value>)",
          },
        },

        /*
         * Shadcn UI Color Palette for components
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
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)"},
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        logo: ["var(--font-logo)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config