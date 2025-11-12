# OddsLab Landing Page

Marketing website for **OddsLab** - Your Football Prediction Laboratory

## Project Overview

This is the landing page for OddsLab, deployed at **oddslab.gg**. It serves as the marketing and presentation site, with the actual application hosted at **app.oddslab.gg**.

## Brand Identity

**Project Name:** OddsLab
**Domain:** oddslab.gg
**App Domain:** app.oddslab.gg

**Headline:** "Your Football Prediction Laboratory"
**Subheadline:** "Experiment with models, test theories, find value bets"

### Brand Values
- Experimentation and transparency ("Lab" suggests open exploration)
- Data-driven betting intelligence
- User empowerment (build your own models)
- For passionate football fans who have theories to test

### Target Audience
- Passionate football fans with strong tactical opinions
- Sharp bettors seeking value
- Football analytics enthusiasts
- Data-driven sports bettors who want control over prediction models

### Key Differentiators
- Interactive model building (not a black box)
- Test your own football theories with data
- Focus on Expected Value (EV) and Closing Line Value (CLV)
- Rust/WASM for instant client-side calculations

### Important Notes
- **OddsLab is NOT open source** - it's a proprietary platform with transparent methodologies
- Emphasize experimentation, not "guaranteed profits"
- Target football enthusiasts who want to test theories, not just make money

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS with BEM (Block Element Modifier) methodology
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## Design System

### Color Palette (matches main app)

```css
/* Background colors */
--color-bg-primary: #0f1116;      /* Main background */
--color-bg-secondary: #1a1d24;    /* Cards, sections */
--color-bg-tertiary: #2a2f3a;     /* Panels, inputs */

/* Border colors */
--color-border-primary: #2a2f3a;
--color-border-secondary: #3a3f4a;

/* Text colors */
--color-text-primary: #ffffff;
--color-text-secondary: #888888;

/* Accent colors */
--color-accent-primary: #4a9eff;   /* Primary blue */
--color-accent-secondary: #6ab4ff; /* Hover blue */
--color-accent-yellow: #ffc107;    /* Secondary accent */
```

### Typography

- **Font Family:** "Segoe UI", Tahoma, Geneva, Verdana, sans-serif
- **Sizes:** 0.938rem (15px) base, up to 3.5rem (56px) for hero title

### Spacing & Layout

- **Border Radius:** 8px (cards, buttons)
- **Max Width:** 1200px (content containers)
- **Section Padding:** 6rem vertical, 2rem horizontal
- **Grid Gap:** 2rem

## CSS Methodology - BEM

This project uses **BEM (Block Element Modifier)** for all styling:

```css
/* Block - standalone component */
.hero { }

/* Element - part of a block */
.hero__title { }
.hero__subtitle { }
.hero__cta { }

/* Modifier - variation of block or element */
.hero--dark { }
.hero__cta--secondary { }
```

**Benefits:**
- Clear, predictable naming
- No CSS specificity issues
- Easy to maintain and refactor
- Reusable component patterns

**Rules:**
- NO inline styles
- NO Tailwind or utility classes
- All styles in dedicated CSS files
- One CSS file per major section/component

## Project Structure

```
oddslab-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── app/
│   ├── page.tsx                # Main landing page
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── globals.css             # Global styles + resets
│   └── landing.css             # Landing page styles (BEM)
├── public/
│   ├── favicon.svg             # Lab flask icon
│   └── screenshots/            # App screenshots (add these!)
│       ├── prediction-builder.png
│       ├── match-analysis.png
│       └── backtest-results.png
├── next.config.ts              # Static export configuration
├── package.json
├── README.md                   # Setup and deployment guide
└── CLAUDE.md                   # This file
```

## Landing Page Sections

### 1. Hero Section
- Main headline: "Your Football Prediction Laboratory"
- Subheadline: "Experiment with models, test theories, find value bets"
- CTA button: "Launch App (Beta)" → links to app.oddslab.gg
- Dark background with subtle blue radial gradient

### 2. Features Section (6 cards)
- 🧪 Test Your Theories
- 📊 Data-Driven Predictions
- 💎 Find Value Bets
- ⚡ Instant Calculations
- 🔄 Backtest Strategies
- 🎯 Full Control

### 3. Screenshots Section
- "See It In Action"
- 3 screenshot cards with captions
- **TODO:** Add actual app screenshots to `/public/screenshots/`

### 4. CTA Section
- "Ready to Test Your Football Theories?"
- Secondary CTA button to app

### 5. Footer
- Built by Benjamin Bours
- Links: GitHub, Ko-fi, Twitter
- Copyright notice

## Development

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Visit http://localhost:3000
```

### Build

```bash
# Build static site
npm run build

# Output in /out directory
```

### Preview Production Build

```bash
npm run build
npx serve out
```

## Deployment

### GitHub Pages Setup

**Already configured!** Pushes to `main` branch automatically deploy.

#### Initial Deployment:

1. **Create GitHub repository:**
   ```bash
   git remote add origin https://github.com/benjaminbours/oddslab-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to: Settings → Pages
   - Source: **GitHub Actions**

3. **Update for custom domain:**
   - Remove `basePath` from `next.config.ts`
   - Add `public/CNAME` with content: `oddslab.gg`
   - Configure DNS A records (see README.md)

### DNS Configuration

Point your domain registrar to GitHub Pages:

```
Type: A     Name: @    Value: 185.199.108.153
Type: A     Name: @    Value: 185.199.109.153
Type: A     Name: @    Value: 185.199.110.153
Type: A     Name: @    Value: 185.199.111.153
Type: CNAME Name: www  Value: benjaminbours.github.io
```

## Adding Screenshots

### Required Screenshots (3 total)

1. **prediction-builder.png** - Model builder interface
2. **match-analysis.png** - Team statistics view
3. **backtest-results.png** - Backtest charts/results

### Screenshot Guidelines

- **Dimensions:** 1200-1600px width, maintain aspect ratio
- **Format:** PNG or WebP
- **Size:** Keep under 500KB each
- **Content:** Show real UI, not placeholder data
- **Quality:** High resolution for Retina displays

### Adding Screenshots

```bash
# Create directory
mkdir -p public/screenshots

# Add your 3 screenshots
cp ~/path/to/screenshot.png public/screenshots/prediction-builder.png
# ... etc

# Commit and deploy
git add public/screenshots/
git commit -m "Add app screenshots"
git push
```

## Content Guidelines

### Writing Copy

**DO:**
- Emphasize testing theories and experimentation
- Target passionate football fans
- Use "you/your" language (empowering)
- Mention transparency and control
- Keep tone professional but accessible

**DON'T:**
- Promise guaranteed profits
- Use aggressive "beat the bookies" language
- Claim it's "secret" or "insider" knowledge
- Sound like a tipster service
- Oversell or use hype

### Example Good Copy:
✅ "Test your football theories with data"
✅ "Build predictions based on what you think matters"
✅ "Not a black box - understand every prediction"

### Example Bad Copy:
❌ "Make money with our secret algorithm"
❌ "Beat the bookies every time"
❌ "Professional tipster predictions"

## Support Page Setup

### Ko-fi / Buy Me a Coffee

When creating the OddsLab support page:

**Name:** OddsLab
**Username:** oddslab (or oddslab_gg)
**Profile Pic:** Use `/public/favicon.svg`

**About Text:**
```
Building OddsLab - a football prediction laboratory where you test theories with data.

Your support helps me:
• Keep the app free and accessible
• Add new leagues and features
• Cover API costs for live odds data
• Dedicate more time to development

Not a black box. Not another tipster site. Just transparent tools for football fans who want to test their own theories.

Built with passion for football and data by Benjamin.
```

See the conversation history for full Ko-fi setup details including tiers and goals.

## Related Projects

- **Main App:** [benjaminbours/footdata](https://github.com/benjaminbours/footdata) - The Rust/Dioxus application
- **Prediction Engine:** `footdata/typescript/` - Data scraping and prediction models
- **Shared Data:** `footdata/shared/` - Team statistics and domain knowledge

## Maintenance

### Updating Content

All content is in `app/page.tsx`. To update:

1. Edit section content
2. Test locally: `npm run dev`
3. Commit and push to deploy

### Updating Styles

All styles in `app/landing.css` using BEM:

1. Find the relevant BEM block (e.g., `.hero`, `.feature-card`)
2. Edit CSS
3. Test locally
4. Commit and push

### Updating SEO

Edit metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: [...],
  openGraph: {...},
  twitter: {...},
};
```

## Roadmap

### Phase 1: Launch (Current)
- [x] Dark theme landing page
- [x] Feature highlights
- [x] Screenshots section
- [x] Favicon
- [x] Add actual app screenshots
- [ ] Deploy to oddslab.gg

### Phase 2: Enhance (Post-Launch)
- [ ] Add testimonials section (once we have users)
- [ ] Add FAQ section
- [ ] Blog/changelog section
- [ ] Pricing page (if we add premium tiers)
- [ ] Email capture form

### Phase 3: Optimize (Month 2+)
- [ ] Add analytics (Plausible or Simple Analytics)
- [ ] A/B test headlines and CTAs
- [ ] Add demo video
- [ ] Optimize for conversions

## Contact

**Developer:** Benjamin Bours
**GitHub:** [@benjaminbours](https://github.com/benjaminbours)
**Ko-fi:** [Support OddsLab](https://ko-fi.com/benjaminbours)

---

Built with ⚽ and 📊 for passionate football fans who love data.
