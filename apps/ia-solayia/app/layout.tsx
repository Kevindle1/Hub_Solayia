import type { Metadata } from "next";
import { fontVariables } from "@solayia/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA Solayia",
  description: "L'assistant à agents de Solayia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
