import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlphaPlay TV – Assine Agora",
  description:
    "TV Online Completa na palma da sua mão. Assista canais, filmes, séries, esportes e muito mais em qualquer dispositivo, a qualquer hora.",
  keywords: "IPTV, TV online, canais ao vivo, filmes, séries, AlphaPlay",
  openGraph: {
    title: "AlphaPlay TV – Assine Agora",
    description:
      "TV Online Completa na palma da sua mão. +600 canais, +12.000 filmes, +2.900 séries.",
    url: "https://alphaplaytv.com.br",
    siteName: "AlphaPlay TV",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
