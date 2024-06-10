import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore Next PWA",
  description: `Explore Next PWA`,
  manifest: "/site.webmanifest",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + PWA</title>
        <meta name="title" content="Explore Next PWA" />
        <meta name="description" content="Explore Next PWA" />

        <meta property="og:title" content="Explore Next PWA" />
        <meta property="og:description" content="Explore Next PWA" />
        <meta property="og:image" content="/apple-touch-icon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Next PWA" />
        <meta name="twitter:description" content="Explore Next PWA" />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
