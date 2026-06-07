import type { Metadata } from "next";
import { fontVariables } from "@solayia/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRM Solayia",
  description: "Clients, prospects et contrats — le socle de données partagé.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
