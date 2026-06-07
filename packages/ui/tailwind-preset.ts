import type { Config } from "tailwindcss";

/**
 * Preset Tailwind partagé — charte Solayia.
 * Toutes les apps l'étendent via `presets: [solayiaPreset]`.
 */
const solayiaPreset = {
  content: [],
  theme: {
    extend: {
      colors: {
        bg: "#f4f4ef",
        surface: "#ffffff",
        "surface-2": "#faf9f4",
        navy: {
          DEFAULT: "#0e1937",
          d: "#0a1229",
          tint: "#eceef3",
        },
        gold: {
          DEFAULT: "#cca95b",
          d: "#b8964a",
          bg: "#f7efd9",
        },
        ink: {
          DEFAULT: "#0e1937",
          2: "#56607a",
        },
        faint: "#9aa0ad",
        line: "#e6e5dd",
      },
      fontFamily: {
        title: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        title: "-0.4px",
      },
      borderRadius: {
        btn: "12px",
        field: "18px",
        card: "20px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(14,25,55,.07), 0 1px 3px rgba(14,25,55,.05)",
        "soft-lg": "0 12px 40px rgba(14,25,55,.10), 0 2px 6px rgba(14,25,55,.06)",
      },
      transitionTimingFunction: {
        solayia: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Partial<Config>;

export default solayiaPreset;
