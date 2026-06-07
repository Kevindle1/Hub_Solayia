/**
 * Configuration ESLint de base partagée (Solayia).
 * Les apps Next.js étendent en plus `next/core-web-vitals`.
 */
module.exports = {
  root: false,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "no-undef": "off",
  },
  ignorePatterns: ["node_modules/", "dist/", ".next/", ".turbo/"],
};
