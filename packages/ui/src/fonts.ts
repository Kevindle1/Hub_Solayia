import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/** Titres — Fraunces (serif chaleureuse). */
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Interface & corps — Plus Jakarta Sans. */
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

/**
 * À poser sur le `<html>` (ou `<body>`) racine de chaque app :
 * `<html className={fontVariables}>`.
 */
export const fontVariables = `${fraunces.variable} ${jakarta.variable}`;
