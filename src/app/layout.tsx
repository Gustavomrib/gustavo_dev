import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0E0D",
  width: "device-width",
  initialScale: 1,
};

const metaDescription =
  "Portfólio de Gustavo Marques Lopes Ribeiro — estudante de Engenharia de Software, estagiário em IA e bolsista de iniciação científica na UFF, com foco em desenvolvimento Full Stack com Node.js para vagas júnior remotas no Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gustavo Marques Lopes Ribeiro | Desenvolvimento Full Stack com Node.js em formação",
  description: metaDescription,
  keywords: [
    "desenvolvedor full stack",
    "node.js",
    "javascript",
    "typescript",
    "react",
    "júnior",
    "remoto",
    "backend",
    "frontend",
    "engenharia de software",
    "portfolio",
  ],
  authors: [{ name: "Gustavo Marques Lopes Ribeiro" }],
  creator: "Gustavo Marques Lopes Ribeiro",
  openGraph: {
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvimento Full Stack com Node.js em formação",
    description: metaDescription,
    type: "website",
    locale: "pt_BR",
    siteName: "Gustavo Marques Lopes Ribeiro - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvimento Full Stack com Node.js em formação",
    description: metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
