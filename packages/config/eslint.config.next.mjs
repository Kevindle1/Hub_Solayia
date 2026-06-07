import nextPlugin from "@next/eslint-plugin-next";
import { baseConfig } from "./eslint.config.base.mjs";

/**
 * Configuration ESLint pour les apps Next.js (flat config).
 * = base partagée + règles `@next/next` (recommended + core-web-vitals).
 */
export default [
  ...baseConfig,
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: ["**/.next/**", "**/next-env.d.ts"],
  },
];
