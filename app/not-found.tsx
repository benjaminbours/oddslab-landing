import type { Metadata } from "next";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Page not found - OddsLab",
  description:
    "We couldn't find that page. Explore the OddsLab tools instead.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">
          This page took a bad bounce.
        </h1>
        <p className="not-found__subtitle">
          The page you&apos;re after doesn&apos;t exist or has moved. No worries
          — both OddsLab tools are live and ready to dig into.
        </p>
        <div className="not-found__buttons">
          <a
            href="https://market.oddslab.gg"
            className="not-found__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Market Monitor
          </a>
          <a
            href="https://app.oddslab.gg"
            className="not-found__button not-found__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prediction Lens
          </a>
        </div>
        <a href="/" className="not-found__home">
          ← Back to home
        </a>
      </div>
    </div>
  );
}
