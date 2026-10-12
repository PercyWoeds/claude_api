import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Console",
  description: "Facturación — Claude Console",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}