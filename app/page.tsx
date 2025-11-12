import "./landing.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__brand">
            Odds <span className="lab-word">Lab</span>
          </h1>
          <h2 className="hero__title">Your Football Prediction Laboratory</h2>
          <p className="hero__subtitle">
            Experiment with models, test theories, find value bets
          </p>
          <a
            href="https://app.oddslab.gg"
            className="hero__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App (Beta)
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <h2 className="features__title">
            Why Odds <span className="lab-word">Lab</span>?
          </h2>
          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon">🧪</div>
              <h3 className="feature-card__title">Test Your Theories</h3>
              <p className="feature-card__description">
                Think home advantage matters more in certain leagues? Believe in
                momentum? Build models based on what you think matters most.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">📊</div>
              <h3 className="feature-card__title">Data-Driven Predictions</h3>
              <p className="feature-card__description">
                Combine your football knowledge with statistical rigor.
                Poisson-based models, expected goals (xG), and historical data
                at your fingertips.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">💎</div>
              <h3 className="feature-card__title">Find Value Bets</h3>
              <p className="feature-card__description">
                Identify bets where the odds are in your favor. Focus on
                Expected Value (EV) and beat the closing line.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">⚡</div>
              <h3 className="feature-card__title">Instant Calculations</h3>
              <p className="feature-card__description">
                Built with Rust and WebAssembly for blazing-fast predictions.
                Experiment and iterate without waiting.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">🔄</div>
              <h3 className="feature-card__title">Backtest Strategies</h3>
              <p className="feature-card__description">
                Test your models against historical data. See what would have
                worked before risking real money.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">🎯</div>
              <h3 className="feature-card__title">Full Control</h3>
              <p className="feature-card__description">
                Not a black box. Understand every prediction. Adjust parameters,
                experiment with features, make it yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots">
        <div className="screenshots__container">
          <h2 className="screenshots__title">See It In Action</h2>
          <p className="screenshots__subtitle">
            Explore the interface and features that make OddsLab powerful
          </p>
          <div className="screenshots__grid">
            <div className="screenshot-card">
              <img
                src="/screenshots/model_builder.png"
                alt="Custom Model Builder"
                className="screenshot-card__image"
              />
              <div className="screenshot-card__caption">
                <h3 className="screenshot-card__title">Build Custom Models</h3>
                <p className="screenshot-card__description">
                  Adjust weights, select features, and create prediction models
                  tailored to your theories
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <img
                src="/screenshots/feature_registry.png"
                alt="Feature Registry"
                className="screenshot-card__image"
              />
              <div className="screenshot-card__caption">
                <h3 className="screenshot-card__title">Feature Registry</h3>
                <p className="screenshot-card__description">
                  Browse and select from a library of statistical features to
                  power your predictions
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <img
                src="/screenshots/find_value_bet.png"
                alt="Value Bet Finder"
                className="screenshot-card__image"
              />
              <div className="screenshot-card__caption">
                <h3 className="screenshot-card__title">Find Value Bets</h3>
                <p className="screenshot-card__description">
                  Compare your model's predictions against bookmaker odds to
                  identify value opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-section__title">
          Ready to Test Your Football Theories?
        </h2>
        <p className="cta-section__subtitle">
          Join OddsLab and start building smarter predictions today
        </p>
        <a
          href="https://app.oddslab.gg"
          className="cta-section__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Beta Now
        </a>
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
