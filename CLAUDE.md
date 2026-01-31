# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

**KXCJ-LP 105.7fm** is a community radio station in Cave Junction, Oregon. This repository contains the station's website (kxcj.org).

**Primary user:** Phillip (station manager) - not a software engineer. Keep explanations simple and avoid jargon. When Phillip asks for changes, confirm what he wants in plain language before making code changes.

**History:** Built over 4 years by volunteer developer Rob Lark (FE engineer at Discogs) during limited volunteer hours. The codebase has accumulated technical debt including dead code, poorly named files (e.g., "test" in production component names), and unused assets.

**Content management:** Phillip updates site content through Sanity CMS at https://kxcj-lp-back-end.sanity.studio/ - he does NOT need to touch code for content changes.

## Deployment (Netlify)

- **Live site:** kxcj.org]
- **Plan:** Netlify Free (300 build minutes/month)
- **Build time:** ~1-3 minutes per deploy
- **Important:** If build minutes are exceeded, the site is suspended until next month. Batch multiple changes into single deploys when possible.
- **Deploy process:** Pushes to main branch trigger automatic builds

## Repository Structure

```
kxcj-lp-frontend/
├── kxcj-lp-front-end/    # React frontend (Create React App)
│   └── src/
│       ├── *.tsx         # Page components (Home, Donate, etc.)
│       ├── lib/          # Shared components (Header, Footer, SideButtons)
│       ├── forms/        # Form components (PSA, DJ application, volunteer)
│       ├── styles/       # CSS files
│       └── assets/       # Images and static files
└── kxcj-lp-back-end/     # Sanity CMS studio
    └── schemas/          # Content type definitions
```

## Commands

### Frontend (from `kxcj-lp-front-end/`)
```bash
npm start     # Dev server at localhost:3000
npm run build # Production build (test before deploying)
npm test      # Run tests
```

### Backend (from `kxcj-lp-back-end/`)
```bash
npm start     # Sanity studio at localhost:3333
npm run build # Build Sanity studio
```

## Tech Stack

- **Frontend:** React 18, TypeScript, Apollo Client (GraphQL), React Router 6
- **CMS:** Sanity v2.34 (Project ID: `5xzup7mu`, Dataset: `production`)
- **Forms:** EmailJS for email delivery
- **Hosting:** Netlify (free tier)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/listenNow` | Streaming player (desktop) |
| `/listenNowMobile` | Streaming player (mobile) |
| `/donate` | Donation options |
| `/getInvolved` | Ways to participate |
| `/volunteer` | Volunteer signup |
| `/becomeadj` | DJ application |
| `/submit` | PSA submission |
| `/merch` | Merchandise/shop |
| `/about` | Station history |
| `/supporters` | Supporter list |
| `/whatsOn` | Event schedule |

## Known Technical Debt

- Files named "test" or "redux" that are actually production code
- Multiple implementations of same components (e.g., `GetInvolved.tsx` and `getInvolvedRedux.tsx`)
- Unused image assets in `/assets`
- Unused code files
- Inconsistent naming conventions

## Data Flow

Frontend queries Sanity GraphQL API:
```
[React App] --GraphQL--> https://5xzup7mu.api.sanity.io/v1/graphql/production/default
```

Content editors use Sanity Studio to update content, which automatically reflects on the site.

## For Phillip

**To update site content:** Use Sanity Studio (your usual login) - no code changes needed.

**To request website changes:** Describe what you want in plain English. Examples:
- "Can you change the background color on the donate page to blue?"
- "The listen button isn't working on mobile"
- "Can you add a new page for our upcoming fundraiser?"

**Before deploying:** Always ask Claude to run `npm run build` first to catch errors before they go live.
