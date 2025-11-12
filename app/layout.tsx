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
  title: "OddsLab - Your Football Prediction Laboratory",
  description: "Experiment with models, test theories, find value bets. Interactive football prediction tools for passionate fans and data-driven bettors.",
  keywords: ["football betting", "soccer predictions", "expected value", "sports betting", "data analytics", "value betting", "prediction models"],
  authors: [{ name: "Benjamin Bours" }],
  openGraph: {
    title: "OddsLab - Your Football Prediction Laboratory",
    description: "Experiment with models, test theories, find value bets. Interactive football prediction tools for passionate fans.",
    url: "https://oddslab.gg",
    siteName: "OddsLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OddsLab - Your Football Prediction Laboratory",
    description: "Experiment with models, test theories, find value bets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head> */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
