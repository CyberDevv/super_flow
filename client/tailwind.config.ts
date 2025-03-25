import fluid, { extract, fontSize, screens } from "fluid-tailwind";
import TailwindAnimate from "tailwindcss-animate";
import { Config } from "tailwindcss/types/config";

export default {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    fontSize,
    screens,
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        robo_flex: ["var(--font-roboto_flex)", "sans"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "var(--accent)",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false, // default: true
    }),
    TailwindAnimate,
  ],
} satisfies Config;
