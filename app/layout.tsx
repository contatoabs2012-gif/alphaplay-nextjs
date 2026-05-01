import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaplaytv.com.br"),
  title: {
    default: "AlphaPlay TV – Assine Agora | IPTV com +600 Canais",
    template: "%s | AlphaPlay TV",
  },
  description:
    "AlphaPlay TV: assine o melhor IPTV do Brasil. +600 canais ao vivo, +12.000 filmes e +2.900 séries. Disponível em TV Box, celular e Smart TV. Teste grátis 24h via WhatsApp.",
  keywords: [
    "alphaplay tv",
    "alphaplay apk",
    "alphaplay recarga",
    "recarga alphaplay",
    "alphaplay tv box",
    "tv box alphaplay",
    "apk alphaplay",
    "renovar alphaplay",
    "código recarga alphaplay",
    "código resgate alphaplay",
    "alphaplay mensal",
    "alphaplay download",
    "alphaplay teste grátis",
    "suporte alphaplay",
    "whatsapp alphaplay",
    "IPTV brasil",
    "tv online",
    "canais ao vivo",
    "filmes online",
    "séries online",
  ],
  authors: [{ name: "AlphaPlay TV", url: "https://alphaplaytv.com.br" }],
  creator: "AlphaPlay TV",
  publisher: "AlphaPlay TV",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://alphaplaytv.com.br",
  },
  openGraph: {
    title: "AlphaPlay TV – +600 Canais, Filmes e Séries",
    description:
      "O melhor IPTV do Brasil. +600 canais ao vivo, +12.000 filmes, +2.900 séries. TV Box, celular e Smart TV. Teste grátis 24h.",
    url: "https://alphaplaytv.com.br",
    siteName: "AlphaPlay TV",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/alphaplay-tv-online-streaming.webp",
        width: 1200,
        height: 630,
        alt: "AlphaPlay TV – IPTV com +600 Canais ao Vivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaPlay TV – +600 Canais, Filmes e Séries",
    description:
      "O melhor IPTV do Brasil. Teste grátis 24h via WhatsApp.",
    images: ["/alphaplay-tv-online-streaming.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AlphaPlay TV",
  url: "https://alphaplaytv.com.br",
  logo: "https://alphaplaytv.com.br/alphaplay-tv-logo.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-64-99327-5252",
    contactType: "customer support",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },
  sameAs: ["https://wa.me/5564993275252"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
