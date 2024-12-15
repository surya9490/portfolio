import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "275px",
      md: "768px",
      lg: "1200px",
      xl: "1560px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        // General Colors
        primary: {
          light: "#ffffff", 
          dark: "#18181b", 
        },
        secondary: {
          light: "gray-700", // Secondary color for light mode
          dark: "gray-300",  // Secondary color for dark mode
        },
        accent: {
          light: "amber-500", // Accent color for light mode
          dark: "amber-400",  // Accent color for dark mode
        },
        header: {
          light: "gray-900", // Header text for light mode
          dark: "gray-100",  // Header text for dark mode
        },

        // Feedback Colors
        success: {
          light: "green-500", // Success color for light mode
          dark: "green-400",  // Success color for dark mode
        },
        warning: {
          light: "yellow-500", // Warning color for light mode
          dark: "yellow-400",  // Warning color for dark mode
        },
        error: {
          light: "red-500", // Error color for light mode
          dark: "red-400",  // Error color for dark mode
        },
        text: {
          light: "gray-900", // Text color for light mode
          dark: "gray-100",  // Text color for dark mode
        },

        // Border Colors
        border: {
          light: "gray-300", // Border for light mode
          dark: "gray-700",  // Border for dark mode
        },
      },
      fontFamily: {
        sans: "var(--font-sans)", // Ensure CSS custom variables are defined in your styles
        serif: "var(--font-serif)",
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
