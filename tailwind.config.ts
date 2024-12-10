import type { Config } from "tailwindcss";

const config: Config = {
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
      typography: {
        // Custom prose styles for Markdown content
        mdx: {
          css: {
            color: "#fff",
            h1: {
              fontWeight: "bold",
              fontSize: "2rem", // Apply smaller size for responsiveness
              "@screen lg": {
                fontSize: "3rem", // Larger size for large screens
                lineHeight: "tight", // Use line-tight for better spacing
              },
              marginBottom: "1rem",
            },
            h2: {
              fontWeight: "bold",
            },
            p: {
              color: "rgb(161 161 170 / var(--tw-text-opacity))",
              marginTop: "3rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#2563eb", // Tailwind blue-600
              textDecoration: "underline",
              "&:hover": {
                color: "#3b82f6", // Tailwind blue-500
              },
            },

            img: {
              borderRadius: "1rem", // rounded-xl
              border: "1px solid #3b3f43", // border-zinc-800 equivalent
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
