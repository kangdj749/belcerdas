import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BelCerdas – Sistem Bel Otomatis",
  description: "Landing page resmi produk BelCerdas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
