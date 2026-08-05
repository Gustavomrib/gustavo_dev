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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor Java em formação",
  description:
    "Portfólio de Gustavo Marques Lopes Ribeiro — estudante de Engenharia de Software focado em Java & Spring Boot, buscando primeira oportunidade em Portugal.",
  keywords: [
    "desenvolvedor java",
    "java",
    "spring boot",
    "backend",
    "júnior",
    "portugal",
    "react",
    "next.js",
    ".net",
    "c#",
    "python",
    "portfolio",
    "engenharia de software",
  ],
  authors: [{ name: "Gustavo Marques Lopes Ribeiro" }],
  creator: "Gustavo Marques Lopes Ribeiro",
  openGraph: {
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor Java em formação",
    description:
      "Estudante de Engenharia de Software focado em Java & Spring Boot, buscando primeira oportunidade em Portugal.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gustavo Marques Lopes Ribeiro - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor em formação",
    description:
      "Estudante de Engenharia de Software focado em Java & Spring Boot, buscando primeira oportunidade em Portugal.",
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
