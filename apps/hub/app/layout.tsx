import type { Metadata } from "next";
import { fontVariables } from "@solayia/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hub Solayia",
  description: "L'espace de travail de l'agence Solayia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
