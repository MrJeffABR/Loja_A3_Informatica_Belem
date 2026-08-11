import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://a3-informatica.mrjeffb.chatgpt.site").replace(/\/$/, "");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Assistência Técnica em Belém | A3 Informática",
  description:
    "Assistência técnica multimarcas em Belém para celular, notebook, desktop, tablet, TV Box e caixa Bluetooth, com diagnóstico e delivery agendado.",
  keywords: [
    "assistência técnica Belém",
    "assistência técnica Sacramenta",
    "conserto de celular Belém",
    "troca de tela celular Belém",
    "manutenção de notebook Belém",
    "conserto de computador Belém",
    "manutenção de desktop Belém",
    "conserto de tablet Belém",
    "conserto de TV Box Belém",
    "conserto de caixa Bluetooth Belém",
    "assistência técnica multimarcas",
    "delivery assistência técnica Belém",
    "Samsung Galaxy",
    "Apple iPhone MacBook",
    "Xiaomi Redmi POCO",
    "Motorola Moto G",
    "Dell Lenovo Acer Asus HP",
    "A3 Informática",
  ],
  alternates: { canonical: "/" },
  applicationName: "A3 Informática",
  category: "Assistência técnica de eletrônicos",
  creator: "A3 Informática",
  publisher: "A3 Informática",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Assistência Técnica em Belém | A3 Informática",
    description: "Reparo multimarcas de celular, notebook, desktop, tablet, TV Box e caixa Bluetooth, com diagnóstico e A3 Informática Delivery.",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "A3 Informática",
    images: [{ url: "/images/a3-hero.png", width: 1448, height: 1086, alt: "Técnico da A3 Informática realizando diagnóstico de equipamento em Belém" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistência Técnica em Belém | A3 Informática",
    description: "Diagnóstico e reparo multimarcas com opção de coleta e devolução agendada em Belém.",
    images: ["/images/a3-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
