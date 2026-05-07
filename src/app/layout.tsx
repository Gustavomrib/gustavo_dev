import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#06060a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor em formação",
  description:
    "Portfólio de Gustavo Marques Lopes Ribeiro — estudante de Engenharia de Software buscando primeira oportunidade como Desenvolvedor Júnior ou Estagiário. Projetos em React, Next.js, .NET, C# e Python.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "estágio",
    "júnior",
    "react",
    "next.js",
    ".net",
    "c#",
    "typescript",
    "python",
    "portfolio",
    "engenharia de software",
  ],
  authors: [{ name: "Gustavo Marques Lopes Ribeiro" }],
  creator: "Gustavo Marques Lopes Ribeiro",
  openGraph: {
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor em formação",
    description:
      "Estudante de Engenharia de Software buscando primeira oportunidade como Desenvolvedor Júnior ou Estagiário. Projetos em React, Next.js, .NET, C# e Python.",
    type: "website",
    locale: "pt_BR",
    siteName: "Gustavo Marques Lopes Ribeiro - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Marques Lopes Ribeiro | Desenvolvedor em formação",
    description:
      "Estudante de Engenharia de Software buscando primeira oportunidade como Desenvolvedor Júnior ou Estagiário.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
