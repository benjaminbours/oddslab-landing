import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OddsLab - Smart Football Betting Tools",
  description:
    "A suite of tools for data-driven football betting. Track odds movements, build custom xG models, find value bets, and backtest strategies.",
  keywords: [
    "football betting tools",
    "odds tracker",
    "xG models",
    "value bet scanner",
    "sports betting analytics",
    "betting strategy backtest",
    "steam moves",
    "bookmaker intelligence",
  ],
  authors: [{ name: "Benjamin Bours" }],
  openGraph: {
    title: "OddsLab - Smart Football Betting Tools",
    description:
      "A suite of tools for data-driven football betting. Start simple, go deep.",
    url: "https://oddslab.gg",
    siteName: "OddsLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OddsLab - Smart Football Betting Tools",
    description:
      "A suite of tools for data-driven football betting. Start simple, go deep.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FTBXHSTHLW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FTBXHSTHLW');
        `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
