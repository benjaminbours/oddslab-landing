import "./landing.css";

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
    title: "Bookmaker Intelligence",
    description:
      "Track odds movements across bookmakers and spot steam moves before markets adjust.",
    status: "live",
    url: "https://market.oddslab.gg",
  },
  {
    icon: "🧪",
    title: "Model Builder",
    description:
      "Build custom xG prediction models. Test your football theories with real data.",
    status: "alpha",
    url: "https://app.oddslab.gg",
  },
  {
    icon: "💎",
    title: "Value Bet Scanner",
    description:
      "Daily value opportunities based on your model predictions vs bookmaker odds.",
    status: "coming-soon",
  },
  {
    icon: "🔄",
    title: "Backtest Lab",
    description:
      "Test strategies against historical data. See what would have worked before risking real money.",
    status: "coming-soon",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__brand">
            Odds <span className="lab-word">Lab</span>
          </h1>
          <h2 className="hero__title">Smart Football Betting Tools</h2>
          <p className="hero__subtitle">
            A suite of tools for data-driven football betting. Start simple, go
            deep.
          </p>
          <a href="#tools" className="hero__cta">
            Explore Tools
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
            Start with one tool, expand as you need. Each tool works standalone
            or together.
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
        <h2 className="cta-section__title">Ready to Level Up Your Betting?</h2>
        <p className="cta-section__subtitle">
          Start with Bookmaker Intelligence - it's live and free to use
        </p>
        <div className="cta-section__buttons">
          <a
            href="https://market.oddslab.gg"
            className="cta-section__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Bookmaker Intelligence
          </a>
          <a
            href="https://app.oddslab.gg"
            className="cta-section__button cta-section__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Model Builder (Alpha)
          </a>
        </div>
        <p className="cta-section__note">
          All tools are free during beta. Supporters will get early access to
          advanced features.
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
