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
  title: "OddsLab — Football Market Research & Odds Tracking",
  description:
    "Track football odds movements and steam moves across the top leagues, build your own prediction models, and measure them against the closing line. A free research toolkit for football markets.",
  keywords: [
    "football odds tracker",
    "odds tracking",
    "odds movement tracker",
    "line movement tracker",
    "steam moves",
    "closing line value",
    "football betting tools",
    "sports betting analytics",
    "bookmaker intelligence",
    "xG models",
  ],
  authors: [{ name: "Benjamin Bours" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OddsLab — Football Market Research & Odds Tracking",
    description:
      "The research desk for football markets: track how the price moves, build the model you believe, and measure it against the closing line.",
    url: SITE_URL,
    siteName: "OddsLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@oddslabgg",
    creator: "@oddslabgg",
    title: "OddsLab — Football Market Research & Odds Tracking",
    description:
      "The research desk for football markets: track how the price moves, build the model you believe, and measure it against the closing line.",
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
        "A free research toolkit for football markets: odds-movement and steam-move tracking, plus custom prediction models priced against the market.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      name: "OddsLab Market Monitor",
      url: "https://market.oddslab.gg",
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      description:
        "Follow how football odds move across bookmakers and catch the steam moves that show where the money is going.",
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
        "Build a prediction lens — choose the features and weights you trust, get a fair price for the match, and compare it to the market.",
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
