import localFont from "next/font/local";

/**
 * Polices auto-hébergées (sous-ensemble latin, couvre les accents français).
 * On évite ainsi tout appel réseau à Google Fonts au build → builds reproductibles.
 * Fichiers variables : un seul woff2 couvre les graisses 400–700.
 */

/** Titres — Fraunces (serif chaleureuse). */
export const fraunces = localFont({
  src: "./fonts/fraunces-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

/** Interface & corps — Plus Jakarta Sans. */
export const jakarta = localFont({
  src: "./fonts/jakarta-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-jakarta",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

/**
 * À poser sur le `<html>` (ou `<body>`) racine de chaque app :
 * `<html className={fontVariables}>`.
 */
export const fontVariables = `${fraunces.variable} ${jakarta.variable}`;
