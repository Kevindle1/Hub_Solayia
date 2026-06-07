import type { Config } from "tailwindcss";
import solayiaPreset from "@solayia/ui/tailwind-preset";

const config: Config = {
  presets: [solayiaPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
};

export default config;
