import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PostHogProvider from "./PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://oddslab.gg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "OddsLab — Football Odds Tracker & Betting Tools",
  description:
    "Track football odds movements and steam moves across top leagues, build custom prediction models, and find value bets. A free suite of data-driven football betting tools.",
  keywords: [
    "football odds tracker",
    "odds tracking",
    "odds movement tracker",
    "line movement tracker",
    "steam moves",
    "closing line value",
    "football betting tools",
    "value bet scanner",
    "sports betting analytics",
    "betting strategy backtest",
    "bookmaker intelligence",
    "xG models",
  ],
  authors: [{ name: "Benjamin Bours" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OddsLab — Football Odds Tracker & Betting Tools",
    description:
      "Track football odds movements and steam moves, build prediction models, and find value bets. A free, data-driven betting toolkit.",
    url: SITE_URL,
    siteName: "OddsLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@oddslabgg",
    creator: "@oddslabgg",
    title: "OddsLab — Football Odds Tracker & Betting Tools",
    description:
      "Track football odds movements and steam moves, build prediction models, and find value bets. A free, data-driven betting toolkit.",
  },
};

// Brand-root structured data: an Organization (with sameAs to the social
// profiles — feeds Google's knowledge panel / sitelinks) plus a WebSite, and
// the two live sub-apps as free WebApplications so search engines understand
// the subdomains as part of the same product family.
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "OddsLab",
      url: SITE_URL,
      sameAs: [
        "https://x.com/oddslabgg",
        "https://github.com/benjaminbours",
        "https://discord.gg/wCkkH8XKwD",
      ],
      founder: { "@type": "Person", name: "Benjamin Bours" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "OddsLab",
      description:
        "A free suite of data-driven football betting tools: odds tracking, steam-move detection, custom prediction models, and value-bet scanning.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      name: "OddsLab Bookmaker Intelligence",
      url: "https://market.oddslab.gg",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "Track football odds movements and catch steam moves as sharp money moves the market.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebApplication",
      name: "OddsLab Prediction Lens",
      url: "https://app.oddslab.gg",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "Build a prediction lens — choose the features and weights you trust, get fair odds, and spot value against the bookmakers.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
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
        <PostHogProvider />
        {children}
      </body>
    </html>
  );
}
