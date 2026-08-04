import "./landing.css";
import { LogoMark } from "./LogoMark";

type ToolStatus = "live" | "alpha" | "beta" | "coming-soon";

interface Tool {
  icon: string;
  title: string;
  description: string;
  status: ToolStatus;
  url?: string;
}

const tools: Tool[] = [
  {
    icon: "📈",
    title: "Market Monitor",
    description:
      "Follow how the price moves across bookmakers, and catch the steam moves that show where the money is going.",
    status: "live",
    url: "https://market.oddslab.gg",
  },
  {
    icon: "🔬",
    title: "Prediction Lens",
    description:
      "Choose the features and weights you actually trust, get a fair price for the match, and compare it to the market.",
    status: "beta",
    url: "https://app.oddslab.gg",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <LogoMark className="hero__mark" />
          <h1 className="hero__heading">
            <span className="hero__brand">
              Odds <span className="lab-word">Lab</span>
            </span>
            <span className="hero__title">
              The research desk for football markets
            </span>
          </h1>
          <p className="hero__subtitle">
            Every financial market has instrumentation — pricing, position
            tracking, risk discipline, a record you can audit. Football has none
            of it. OddsLab is that toolkit, built in the open.
          </p>
          <a href="#tools" className="hero__cta">
            Explore the desk
          </a>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools" id="tools">
        <div className="tools__container">
          <h2 className="tools__title">
            The Odds<span className="lab-word">Lab</span> Suite
          </h2>
          <p className="tools__subtitle">
            Two instruments: one for reading the market, one for pricing it
            yourself. Each works on its own, or as a pair.
          </p>
          <div className="tools__grid">
            {tools.map((tool, index) => {
              const isClickable = tool.status !== "coming-soon";
              const CardWrapper = isClickable ? "a" : "div";
              const cardProps = isClickable
                ? {
                    href: tool.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <CardWrapper
                  key={index}
                  className={`tool-card tool-card--${tool.status}`}
                  {...cardProps}
                >
                  <div className="tool-card__header">
                    <div className="tool-card__icon">{tool.icon}</div>
                    <span
                      className={`tool-card__badge tool-card__badge--${tool.status}`}
                    >
                      {tool.status === "live" && "Live"}
                      {tool.status === "alpha" && "Alpha"}
                      {tool.status === "beta" && "Beta"}
                      {tool.status === "coming-soon" && "Coming Soon"}
                    </span>
                  </div>
                  <h3 className="tool-card__title">{tool.title}</h3>
                  <p className="tool-card__description">{tool.description}</p>
                  {isClickable && (
                    <span className="tool-card__action">
                      {tool.status === "live" && "Launch →"}
                      {tool.status === "alpha" && "Try Alpha →"}
                      {tool.status === "beta" && "Try Beta →"}
                    </span>
                  )}
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-section__title">See the market, then price it yourself</h2>
        <p className="cta-section__subtitle">
          Follow how the market moves with the Market Monitor, then build the
          model you actually believe with the Prediction Lens — both live and
          free to use.
        </p>
        <div className="cta-section__buttons">
          <a
            href="https://market.oddslab.gg"
            className="cta-section__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Market Monitor
          </a>
          <a
            href="https://app.oddslab.gg"
            className="cta-section__button cta-section__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Prediction Lens
          </a>
        </div>
        <p className="cta-section__note">
          Both instruments are free during beta. Supporters help keep them
          running.
        </p>
        <p className="cta-section__note">
          OddsLab is a modelling and research toolkit, not a tipping service. It
          promises no winnings — our own published results show how hard beating
          the closing line really is, and most people who try lose money. If
          this stops being a considered decision, stop. 18+.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__text">
            Built with passion for football and data by{" "}
            <a
              href="https://benjaminbours.github.io/portfolio"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Benjamin Bours
            </a>
          </p>
          <div className="footer__links">
            <a
              href="https://github.com/benjaminbours"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/wCkkH8XKwD"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              href="https://ko-fi.com/oddslab"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support on Ko-fi
            </a>

            <a
              href="https://buymeacoffee.com/oddslab"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Me a Coffee
            </a>
            <a
              href="https://x.com/oddslabgg"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <p
            className="footer__text"
            style={{ marginTop: "1.5rem", fontSize: "0.875rem" }}
          >
            © 2025 OddsLab. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
