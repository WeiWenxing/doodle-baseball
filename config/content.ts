import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play ${siteConfig.name} - a free baseball game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Snake Game", href: "https://snake-game.online" },
        { text: "Evernote", href: "https://lite.evernote.com/note/a7633e02-bcf7-d080-171a-a858eec4a9d2" },
        { text: "CAL", href: "https://cal.com/vincent-ai" },
        { text: "Patreon", href: "https://www.patreon.com/posts/crazy-cattle-3d-129397709" },
        { text: "Pinterest", href: "https://www.pinterest.com/pin/581245895696208484/" },
        { text: "Linktr", href: "https://linktr.ee/vincent20250520" },
        { text: "Creem", href: "https://www.creem.io/bip/vincent-ai" },
        { text: "CrazyCattle3d Github", href: "https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md" },
      ]
    },
    games: {  // 添加 games section
      title: "Games",
      links: [
        { text: "Doodle Baseball", href: "#game-section" }
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Doodle Baseball. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Doodle Baseball",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 6
  },
  gameSection: {
    title: "Play Doodle Baseball Online Free",
    game: {
      title: "Doodle Baseball",
      url: "/doodle-baseball.embed"
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  features: {
    // Title emphasizing the game's fun, theme, and origin
    title: "Doodle Baseball: Swing with Food! Google Doodle Game Features - Play Free!",
    items: [
      {
        // Highlights the core gameplay and unique characters
        title: "Play as Iconic Food Characters",
        description: "Step up to the plate in Doodle Baseball as American fast foods like H-Dog (hot dog) or Power Pop (popcorn)! Face off against peanut pitchers in this hilarious free online game. It's classic Google Doodle fun!"
      },
      {
        // Focuses on the simple, addictive mechanics
        title: "Simple Click-to-Swing Action",
        description: "Easy to learn, tough to master! Just click to swing your bat in Doodle Baseball. Perfect timing is key to hitting home runs and avoiding strikes in this addictive unblocked game."
      },
      {
        // Emphasizes the unique Google Doodle art style and celebratory theme
        title: "Iconic Google Doodle Art & Sounds",
        description: "Enjoy the charming, hand-drawn Google Doodle art style and responsive sounds like crowd roars and 'Strike!'. See fireworks and Liberty Bells on home runs in this celebratory online game, often linked to the Fourth of July!"
      },
      {
        // Details the varying pitch difficulties
        title: "Dynamic Pitch Difficulty",
        description: "Challenge your reflexes! Pitches in Doodle Baseball change color to indicate speed: green/blue are slow, purple/yellow are faster, and red pitches are super fast. Adapt your timing to play and win!"
      },
      {
        // Highlights accessibility and broad appeal
        title: "Instant Fun for All Ages - Free & Unblocked",
        description: "Doodle Baseball is a fantastic free online game for everyone. Play instantly in your browser, unblocked, with no downloads required. Perfect for a quick, fun Google Doodle game session!"
      }
    ]
  },

  whatIs: {
    // Title clearly defines the game and its fame
    title: "What is Doodle Baseball? The Famous Google Doodle Food Fight Game!",
    // Description based on provided info, integrating keywords
    description: "Doodle Baseball is the thrilling and captivating Google Doodle sport game that baseball fans and food enthusiasts love! Originally celebrating events like Major League Baseball or the Fourth of July, this free online game features American summertime munchies as players, facing off against peanut pitchers.\n\n" +
      "The gameplay is simple: as a batter (like a hot dog or french fry), click to swing and hit the ball, aiming for home runs. Doodle Baseball combines perfect timing, prediction, and reaction skills, offering a stimulating and engaging experience. With its unique food characters (H-Dog, Power Pop, Big Red) and charming Google Doodle art, it's an unblocked game that provides endless fun.\n\n" +
      "Ready to play this iconic Google Doodle game? No downloads needed for Doodle Baseball. Step into the batter's box, swing for the fences, and enjoy this free online classic!",
    logo: {
      // Placeholder - update if you have a specific logo for your Doodle Baseball page
      src: "/assets/img/android-chrome-512x512.png",
      // Alt text updated for the game concept and keywords
      alt: "Doodle Baseball - Free Online Google Doodle Food Game Logo"
    }
  },

  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Doodle Baseball Online Free: A Google Doodle Game Guide",
    // Description focused on in-game controls and objectives
    description: "Playing Doodle Baseball online is incredibly simple and fun! Once the Google Doodle game loads, you'll automatically be in the batter's box as a food character. The pitcher (a peanut) will throw the ball. Your goal is to click your mouse (or tap your screen) at the perfect moment to swing the bat and hit the ball.\n\n" +
      "Aim to hit home runs to score the most points in this free game! Pay attention to the color of the pitch in Doodle Baseball: green/blue are easier, while purple, yellow, and especially red pitches are faster and require quicker reflexes. If you miss the ball three times (three strikes), you're out, and the game ends.\n\n" +
      "The more home runs you score, the higher your achievement. Play this unblocked Google Doodle game now and see if you can hit a grand slam against those tricky peanut pitchers!",
    // Placeholder - update if you have a specific gameplay image
    image: "/assets/doodle-baseball/doodle-baseball.webp",
    // Alt text updated
    imageAlt: "Doodle Baseball Online Game Guide - Free Google Doodle Click-to-Swing Gameplay"
  },

  faq: {
    // Title updated for clarity
    title: "Doodle Baseball: Your Questions Answered (Google Doodle Game FAQ)",
    items: [
      {
        value: "how-to-play-doodle-baseball", // Based on user FAQ
        question: "How do you play the Google Doodle Baseball game online?",
        answer: "To play Doodle Baseball, simply load the game in your browser. Once it starts, you'll be the batter. Click your mouse (or tap your screen) to swing the bat as the pitcher throws the ball. Time your swing to hit home runs and score points in this free online game!"
      },
      {
        value: "highest-score-doodle-baseball", // Based on user FAQ
        question: "What is the highest score in Google Doodle Baseball?",
        answer: "While some players claim very high scores like 49 runs in Doodle Baseball, achieving a personal best is the main goal! The fun in this Google Doodle game comes from improving your timing and trying to hit more home runs each time you play."
      },
      {
        value: "tricks-to-win-doodle-baseball", // Based on user FAQ
        question: "Are there any tricks to win Google Doodle Baseball?",
        answer: "The key to Doodle Baseball is timing and reflex. Watch the pitcher and the ball's color to anticipate its speed. Wait for the ball to get close, then click to swing. Practice helps you master hitting home runs in this free, unblocked game. There aren't hidden 'tricks' beyond skill!"
      },
      {
        value: "who-are-the-players",
        question: "Who are the players and characters in Doodle Baseball?",
        answer: "In this Google Doodle game, the batters are typically American fast foods like hot dogs (e.g., 'H-Dog'), french fries, ketchup, or even lettuce and lemonade. The pitchers and fielders are represented by peanuts. The audience is also made of food items like popcorn and burgers!"
      },
      {
        value: "difficulty-pitches",
        question: "How does the pitch difficulty work in this Google Doodle game?",
        answer: "The pitches in Doodle Baseball vary in speed and difficulty, indicated by color. Green and blue pitches are slower and easier to hit. Purple and yellow are faster, and red pitches are the fastest and hardest, requiring very quick reactions to play successfully."
      },
      {
        value: "is-it-free-unblocked",
        question: "Is Doodle Baseball free to play and unblocked?",
        answer: "Yes! Doodle Baseball is a classic Google Doodle game that is completely free to play online. You can usually find unblocked versions, allowing you to play instantly in your browser without any downloads."
      }
    ]
  }
} as const;



