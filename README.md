# OddsLab Landing Page

Landing page for **OddsLab** - Your Football Prediction Laboratory

**Live Site:** [oddslab.gg](https://oddslab.gg) (coming soon)
**App:** [app.oddslab.gg](https://app.oddslab.gg)

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **CSS with BEM Methodology** (no frameworks)
- **GitHub Pages** for hosting

## Project Structure

```
oddslab-landing/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── app/
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout with SEO
│   ├── globals.css             # Global styles
│   └── landing.css             # Landing page styles (BEM)
├── public/                     # Static assets
├── next.config.ts              # Next.js config (static export)
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
# Build for production (static export to /out)
npm run build

# Preview production build locally
npx serve out
```

## Deployment

### GitHub Pages Setup

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

#### Initial Setup:

1. **Create GitHub repository:**
   ```bash
   git remote add origin https://github.com/benjaminbours/oddslab-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. **Update `next.config.ts`:**
   - If your repo name is `oddslab-landing`, the basePath is correct: `/oddslab-landing`
   - If you use a custom domain (oddslab.gg), remove the `basePath` line

#### Custom Domain Setup (oddslab.gg):

1. **Remove basePath from `next.config.ts`:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // Remove: basePath: '/oddslab-landing',
     reactCompiler: true,
   };
   ```

2. **Add CNAME file:**
   ```bash
   echo "oddslab.gg" > public/CNAME
   ```

3. **Configure DNS:**
   - Add these DNS records at your domain registrar:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153

     Type: A
     Name: @
     Value: 185.199.109.153

     Type: A
     Name: @
     Value: 185.199.110.153

     Type: A
     Name: @
     Value: 185.199.111.153

     Type: CNAME
     Name: www
     Value: benjaminbours.github.io
     ```

4. **Enable HTTPS:**
   - Go to repository **Settings** → **Pages**
   - Check **Enforce HTTPS**

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Configure custom domain"
   git push
   ```

### Manual Deployment

```bash
# Build
npm run build

# The /out directory contains the static site
# Upload contents to any static host (Netlify, Vercel, Cloudflare Pages, etc.)
```

## CSS Methodology

This project uses **BEM (Block Element Modifier)** methodology for CSS:

```css
/* Block */
.hero { }

/* Element */
.hero__title { }
.hero__subtitle { }

/* Modifier */
.hero--dark { }
```

**Benefits:**
- Clear naming conventions
- No CSS specificity issues
- Easy to maintain
- Reusable components

## Brand Identity

**Project:** OddsLab
**Headline:** "Your Football Prediction Laboratory"
**Subheadline:** "Experiment with models, test theories, find value bets"

**Target Audience:**
- Passionate football fans with strong tactical opinions
- Sharp bettors seeking value
- Data-driven sports bettors

**Key Values:**
- Experimentation and transparency
- User empowerment (not a black box)
- Football passion meets data science

## Links

- **Main App:** [app.oddslab.gg](https://app.oddslab.gg)
- **GitHub:** [@benjaminbours](https://github.com/benjaminbours)
- **Ko-fi:** [Support Development](https://ko-fi.com/benjaminbours)

## License

© 2025 OddsLab. All rights reserved.

---

Built with ⚽ and 📊 by [Benjamin Bours](https://github.com/benjaminbours)
