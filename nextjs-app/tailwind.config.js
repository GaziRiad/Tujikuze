/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "max-w-5xl",
    "max-w-lg",
    "lg:max-w-lg",
    "lg:float-left",
    "max-h-[420px]",
    "lg:pr-32",
    "lg:pl-20",
    "text-blue-500",
    "hover:underline",
    "hover:underline-offset-2",
    "transtion-all",
    "lg:inline-block",
    "clearfix",
    "clear-both",
    "lg:tracking-[-1px]",
    "lg:mb-5",
    "lg:mb-9",
    "lg:text-2xl",
    "lg:mt-48",
    "mt-16",
    "pr-12",
    "lg:pr-12",
    "xl:text-4xl",
    "lg:space-x-4",
    "space-x-2",
    "list-disc",
    "pl-8",
    // Add other classes that might be getting purged
  ],
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-arizona)"],
        secondary: ["var(--font-standard)"],
      },
      colors: {
        primary: {
          800: "#111B13",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        light: {
          500: "#FBFBFB",
          600: "#BABABA",
        },
        dark: {
          400: "#726f66",
          500: "#252525",
          600: "#1A1A1A",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
