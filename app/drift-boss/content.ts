import { content as globalContent } from "@/config/content";
import { withAssetPrefix } from "@/lib/utils";

export const driftBossContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Drift Boss",
    game: {
      url: '/drift-boss.embed',
      title: "Drift Boss",
      externalUrl: '/game/drift-boss/index.html'
    }
  },

  // 特性部分配置
  features: {
    // Title emphasizing core gameplay and keywords
    title: "Drift Boss: Online Drifting Game Features - Play Free & Unblocked!",
    items: [
      {
        // Highlights the unique control scheme
        title: "Simple One-Button Drifting Controls",
        description: "Master the art of drifting in Drift Boss with intuitive one-button controls! Click or tap to turn right, release to go left. It's an easy-to-learn system perfect for this free online car game."
      },
      {
        // Focuses on the core challenge
        title: "Endless Zigzagging Roads & Tricky Curves",
        description: "Navigate your car through an endless road full of sharp turns, tricky curves, and unexpected twists in this unblocked game. Perfect timing is key to avoid falling into space when you play Drift Boss!"
      },
      {
        // Details the unlockable content
        title: "Unlockable Vehicles with Upgraded Handling",
        description: "Collect coins as you drift and unlock a variety of cool vehicles like trucks, taxis, police cars, and more in Drift Boss. Each car might offer different handling in this fun online game."
      },
      {
        // Emphasizes rewards and engagement
        title: "Daily Rewards & Exciting Boosters",
        description: "Play Drift Boss daily to earn rewards! Get boosters like Double Score, Car Insurance, and Coin Rush to enhance your drifting game experience and achieve higher scores in this free game."
      },
      {
        // Highlights accessibility and appeal
        title: "Addictive Gameplay for All Ages",
        description: "Drift Boss offers simple yet highly addictive gameplay that will keep you captivated. Its appealing graphics and engaging mechanics make it a fantastic unblocked car game for players of all ages."
      }
    ]
  },
  
  whatIs: {
    // Title clearly defines the game and its core appeal
    title: "What is Drift Boss? The Ultimate One-Button Online Drifting Game",
    // Description based on provided info, integrating keywords
    description: "Welcome to Drift Boss, an exhilarating free online drift car game where perfect timing is everything! Drive your car along an endless, winding road, expertly navigating tricky curves and twists to avoid falling into space. This unblocked game challenges your reflexes and precision.\n\n" +
                  "Drift Boss offers addictive one-button gameplay that's easy to pick up but hard to master. Show off your super-driving skills as you maneuver past challenging obstacles. With impressive graphics and engaging sound effects, this online drifting game provides a thrilling experience. Play Drift Boss now and see how far you can go!\n\n" +
                  "Unlock various vehicles, earn daily rewards, and utilize boosters to maximize your score. It’s a fantastic choice among free online games for quick fun or long sessions of testing your drifting prowess. Can you become the ultimate Drift Boss?",
    logo: {
      // Placeholder - update if you have a specific logo for Drift Boss
      src: withAssetPrefix("/assets/drift-boss/drift-boss-logo.webp"),
      // Alt text updated for the game concept and keywords
      alt: "Drift Boss - Free Online Unblocked Drifting Car Game Logo"
    }
  },
  
  howToPlay: {
    // Title reflecting the game and keywords
    title: "How to Play Drift Boss Online Free: Mastering the Drift",
    // Description focused on controls and core gameplay loop
    description: "Playing Drift Boss online is all about precise timing and control! The basic rule of this free game is to maneuver your car on an endless road full of curves, aiming to drive as far as possible. Avoid falling into space, or the game is over. You'll face complicated turns and bumps, so stay alert when you play this unblocked game.\n\n" +
                  "Controls are simple: on PC, press the Left Mouse Button or Space Bar to drift right, and release to go left. On Mobile, tap the screen to drift right, and release to go left. There are no complicated buttons for acceleration or deceleration in this car game.\n\n" +
                  "Collect coins scattered along the way to unlock new vehicles. Anticipate changes in road direction, turn through corners with precise judgment, and try to stay in the middle of the road for safety and better coin collection. This online drifting game rewards skill and perseverance!",
    // Placeholder - update if you have a specific gameplay image
    image: withAssetPrefix("/assets/drift-boss/drift-boss.webp"),
    // Alt text updated
    imageAlt: "Drift Boss Online Drifting Game Guide - Free Unblocked Car Game Controls"
  },
  
  faq: {
    // Title updated for clarity
    title: "Drift Boss: FAQ (Free Online Drifting Car Game)",
    items: [
      {
        value: "what-is-drift-boss",
        question: "What kind of game is Drift Boss?",
        answer: "Drift Boss is a free-to-play online arcade drifting game with simple one-button controls. Your goal is to drive a car on an endless winding road, making perfectly timed turns to avoid falling into space. It's an addictive unblocked game testing your reflexes."
      },
      {
        value: "how-to-control",
        question: "How do you control the car in Drift Boss when I play online?",
        answer: "Controlling your car in Drift Boss is very simple. You click (or tap on mobile) to make the car drift to the right, and release the click/tap to make it drift to the left. That's all you need to play this online game!"
      },
      {
        value: "main-objective-game",
        question: "What's the main goal in the Drift Boss car game?",
        answer: "The main goal in Drift Boss is to drive your car as far as possible on the endless, tricky road without falling off. The further you go, the higher your score. Collecting coins to unlock new vehicles is also a key part of this free game."
      },
      {
        value: "unlockables-in-game",
        question: "Can I unlock different cars in Drift Boss?",
        answer: "Yes! As you play Drift Boss and collect coins, you can unlock various vehicles such as trucks, taxis, police cars, ice cream trucks, and more, adding variety to your online drifting game experience."
      },
      {
        value: "is-it-free-unblocked",
        question: "Is Drift Boss free to play and available unblocked?",
        answer: "Absolutely! Drift Boss is a completely free-to-play online game. You can usually find unblocked versions on various gaming websites, allowing you to play instantly in your browser without cost or downloads."
      },
      {
        value: "tips-to-win",
        question: "Any tips for getting a high score in this drifting game?",
        answer: "Key tips for Drift Boss include anticipating road changes, timing your turns precisely, and trying to stay near the middle of the road. Practice helps improve your judgment and reflexes for this challenging online game. Play regularly for daily rewards too!"
      }
    ]
  }
};


