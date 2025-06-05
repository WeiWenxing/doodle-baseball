# Doodle Baseball Game Website

🎮 **Official Website**: [Doodle Baseball Official Website](https://doodle-baseball.net/)

📖 **中文版本**: [README.md](./README.md)

This is the official website project for Doodle Baseball game, built with Next.js. The website provides the classic Google Doodle baseball game experience, optimized for search engines and AI crawlers.

## Project Overview

Doodle Baseball is a baseball game based on the classic Google Doodle that runs directly in browsers without downloads. This project is the official website for the game, recreating the classic baseball gaming experience that captivated millions of players.

## About the Game

**Doodle Baseball** is a faithful recreation and enhanced version of the classic Google Doodle baseball game. The game maintains the original's simple yet addictive gameplay while adding modern improvements including better graphics, smoother animations, and optimized performance.

### Game Highlights

🎯 **Classic Baseball Experience**: Recreates the classic timing challenge gameplay of the original Google Doodle

⚡ **Easy to Learn**: Just click or touch the screen - anyone can start playing immediately

🌟 **Perfect Timing**: Success depends on precise timing mastery, not complex operations

📱 **Cross-Platform Compatible**: Runs perfectly on desktop, tablet, and mobile devices

🎮 **Free to Play**: Completely free, no downloads required, no ads

### Why Choose Our Doodle Baseball?

- **Nostalgic Experience**: Relive the wonderful memories of the classic Google Doodle
- **Modern Optimization**: Maintains the original flavor while providing better performance and experience
- **Instant Play**: Open your browser and start playing immediately, no barriers
- **All Ages Friendly**: Suitable for players of all ages to enjoy
- **Skill Challenge**: Simple rules hide the ultimate test of timing

The game perfectly captures the essence of baseball - the eternal duel between pitcher and batter. Each pitch is a new challenge, and every perfect hit brings satisfaction.

### Main Features

- **Classic Baseball Game Experience** - Faithfully recreates the core gameplay of Google Doodle baseball
- **Game Features, Gameplay & FAQ Introduction** - Detailed game guides and common questions
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data
- **AI Crawler Special Content Optimization** - Dedicated llms.txt files
- **Responsive Design** - Supports various devices and screen sizes
- **Accessibility** - Ensures all users can enjoy the game

## Project Structure

```
/
├── app/                    # Main application directory
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage (Doodle Baseball)
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   └── terms-of-service/   # Terms of service page
├── components/             # React component library
│   ├── game-section/       # Game display components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── home/               # Homepage components
│   ├── features/           # Game features components
│   ├── what-is/            # Game introduction components
│   ├── how-to-play/        # Gameplay instruction components
│   ├── faq/                # FAQ components
│   └── ui/                 # Basic UI components
├── config/                 # Configuration files
│   ├── site.js/ts          # Site basic configuration
│   └── content.ts          # Game content configuration
├── public/                 # Static assets
│   ├── assets/             # Images and other resources
│   │   ├── doodle-baseball/ # Doodle Baseball related images
│   │   └── img/            # Site common images
│   ├── game/               # Game files directory
│   │   └── doodle-baseball/ # Doodle Baseball game files
│   ├── llms.txt            # AI crawler dedicated content summary
│   ├── llms-full.txt       # AI crawler dedicated full content
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # Site map
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

The website embeds games through iframe:

- `/doodle-baseball.embed` → `/game/doodle-baseball/index.html`

Game files are located in the `public/game/doodle-baseball/` directory, containing complete game resources and startup page.

## Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Bing Webmaster Tools (optional)
NEXT_PUBLIC_BING_ID=XXXXXXXXXX
```

## Related Links and Resources

### Official Pages
- 🏠 **Homepage**: [Doodle Baseball Official Website](https://doodle-baseball.net/)
- 📞 **Contact Us**: [Contact Us](https://doodle-baseball.net/contact)
- ℹ️ **About Us**: [About Us](https://doodle-baseball.net/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://doodle-baseball.net/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://doodle-baseball.net/terms-of-service)

## AI Crawler Optimization

This project has special optimization for AI crawlers:

1. **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured game information
2. **robots.txt Configuration**: Guides AI crawlers to access dedicated files
3. **Supported AI Crawlers**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot, etc.

## Deployment

The project is configured for automatic deployment through Vercel. Changes pushed to the main branch will automatically deploy to production.

### Automatic Deployment

- **Production**: Push to `main` branch triggers automatic deployment
- **Preview**: Creating Pull Requests automatically generates preview links

## Game Features

### Core Gameplay
- **Classic Baseball Mechanics**: Authentic pitching and batting physics
- **Perfect Timing System**: Success depends on precise timing mastery
- **Progressive Difficulty**: Difficulty gradually increases as the game progresses
- **Score Tracking**: Records your best performances and progress

### Technical Advantages
- **No Download Required**: Complete browser-based gaming experience
- **Cross-Platform Compatible**: Seamless operation on desktop, tablet, and mobile
- **Optimized Performance**: Smooth 60fps gameplay on modern browsers
- **Responsive Design**: Automatically adapts to different screen sizes and orientations

### User Experience
- **Intuitive Controls**: Simple click or touch operations
- **Visual Feedback**: Clear visual and audio cues
- **Family Friendly**: Suitable for all ages, no violence or inappropriate content
- **Accessibility Design**: Designed for users with varying abilities

## Game History

### Original Google Doodle
The original Doodle Baseball was created by Google as an interactive doodle to celebrate baseball season. Released as a simple browser game, it quickly became one of the most popular Google Doodles ever created, with millions of players worldwide trying to achieve the perfect game.

### Our Enhanced Version
Our version of Doodle Baseball was created to preserve and enhance this beloved gaming experience. We've maintained the core gameplay that made the original so addictive while adding modern improvements:

- **Enhanced Graphics**: Crisp, high-resolution sprites and animations
- **Improved Physics**: More realistic ball movement and collision detection
- **Better Audio**: Enhanced sound effects and optional background music
- **Performance Optimization**: Smoother gameplay across all devices and browsers
- **Accessibility Features**: Better support for different input methods and screen sizes

### Cultural Impact
Doodle Baseball represents more than just a game - it's a cultural phenomenon that introduced millions of people to browser-based gaming. Its simple yet engaging gameplay proved that great games don't need complex mechanics or high-end graphics to be entertaining and memorable.

## How to Play

### Basic Controls
- **Desktop**: Use your mouse to click when you want to swing the bat
- **Mobile**: Tap the screen at the perfect moment to make contact with the ball
- **Timing**: Watch the pitcher's motion and click/tap just as the ball reaches the optimal hitting zone

### Gameplay Strategy
1. **Observe the Pitcher**: Each pitch has a consistent timing pattern - learn to recognize it
2. **Focus on the Ball**: Keep your eyes on the ball's trajectory from the pitcher's hand
3. **Perfect Timing**: Click or tap at the exact moment the ball enters your hitting zone
4. **Aim for Distance**: Well-timed hits will send the ball farther and earn more points
5. **Stay Consistent**: Develop a rhythm and stick to it for better overall performance

### Scoring System
- **Distance Matters**: Longer hits earn higher scores
- **Timing Bonus**: Perfect timing provides additional point multipliers
- **Consecutive Hits**: Maintaining a hitting streak increases your score multiplier
- **Personal Records**: The game tracks your best individual hits and overall game scores

## Why Play Doodle Baseball?

### Nostalgic Appeal
Our version stays true to the original Google Doodle experience while adding modern enhancements. We've preserved the gameplay mechanics that made the original so beloved while improving the technical aspects for today's devices and browsers.

### Accessibility
Unlike many online games, our Doodle Baseball is designed to be accessible to everyone. No downloads, no complicated setup, no barriers to entry - just click and play.

### Skill Development
While the game is easy to learn, mastering the timing provides a satisfying challenge that keeps players coming back. It's perfect for improving hand-eye coordination and reaction time.

### Universal Appeal
Whether you're a baseball fan or just looking for a fun way to pass time, Doodle Baseball delivers an entertaining experience that captures the spirit of America's favorite pastime.

## License

© 2025 Doodle Baseball. All rights reserved. 