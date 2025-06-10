# Free Online Games Platform

🎮 **Official Website**: [doodle-baseball.net](https://doodle-baseball.net/)

📖 **中文版本**: [README.md](./README.md)

This is a free online games website project built with Next.js. The site provides a collection of classic and addictive browser games, optimized for search engines and AI crawlers.

## Project Overview

This project aims to provide a high-quality, free-to-play online gaming platform where players can enjoy a variety of fun games directly in their browsers, with no downloads or installation required.

## Supported Games List

1.  **[Doodle Baseball](https://doodle-baseball.net/doodle-baseball)** - A recreation of the classic Google Doodle baseball game, simple to play but challenging to master.
2.  **[Drift Boss](https://doodle-baseball.net/drift-boss)** - Test your drifting skills and reflexes on an endless, twisty road.

### Main Features

- **Multiple Game Experiences** - Enjoy different types of classic games on a single platform.
- **Game Features, Gameplay & FAQ Introduction** - Detailed guides and FAQs for each game.
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data.
- **AI Crawler Special Content Optimization** - Dedicated `llms.txt` files.
- **Responsive Design** - Supports various devices and screen sizes.
- **Accessibility** - Ensures all users can enjoy the games.

## Project Structure

```
/
├── app/                    # Main application directory
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage
│   ├── [game_slug]/        # Game page directory (e.g., doodle-baseball/, drift-boss/)
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   └── terms-of-service/   # Terms of service page
├── components/             # React component library
│   └── ...
├── config/                 # Configuration files
│   ├── site.js/ts          # Site basic configuration
│   └── content.ts          # Global content configuration
├── public/                 # Static assets
│   ├── assets/             # Images and other resources
│   │   ├── [game_slug]/    # Game-specific images
│   │   └── img/            # Site common images
│   ├── game/               # Game files directory
│   │   └── [game_slug]/    # Game embed files
│   ├── llms.txt            # AI crawler dedicated content summary
│   ├── llms-full.txt       # AI crawler dedicated full content
│   └── ...
└── next.config.js          # Configuration file (includes game route rewrites)
```

## Development Guide

### Environment Requirements
- Node.js 16.x or higher
- npm or yarn

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Local Development
```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000 to view the website.

### Build Project
```bash
npm run build
# or
yarn build
```

## Game Embed

The website embeds games through an iframe, with rewrite rules defined in `next.config.js`:

- `/[game_slug].embed` → `/game/[game_slug]/index.html`

Game files are located in the `public/game/[game_slug]/` directory.

## Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Bing Webmaster Tools (optional)
BING_VERIFICATION_KEY=BingVerificationXXXXXXXXXXXXXXXX
```

## Related Links and Resources

### Official Pages
- 🏠 **Homepage**: [Official Website](https://doodle-baseball.net/)
- 📞 **Contact Us**: [Contact Us](https://doodle-baseball.net/contact)
- ℹ️ **About Us**: [About Us](https://doodle-baseball.net/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://doodle-baseball.net/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://doodle-baseball.net/terms-of-service)

## AI Crawler Optimization

This project has special optimization for AI crawlers:
1.  **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured game information.
2.  **robots.txt Configuration**: Guides AI crawlers to access dedicated files.
3.  **Supported AI Crawlers**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot, etc.

## Deployment

The project is configured for automatic deployment through Vercel. Changes pushed to the main branch will automatically deploy to production.

### Automatic Deployment
- **Production**: Push to `main` branch triggers automatic deployment.
- **Preview**: Creating Pull Requests automatically generates preview links.

## License

© 2025 Doodle Baseball. All rights reserved. 