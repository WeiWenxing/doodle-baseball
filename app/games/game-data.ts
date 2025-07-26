import { withAssetPrefix } from "@/lib/utils";

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  // 游戏数据将在后续添加
  'doodle-baseball': {
    id: 'doodle-baseball',
    title: 'Doodle Baseball',
    description: 'A charming Google Doodle baseball game where you play as various snacks.',
    image: withAssetPrefix('/assets/doodle-baseball/doodle-baseball.webp'),
    url: '/'
  },
  'drift-boss': {
    id: 'drift-boss',
    title: 'Drift Boss',
    description: 'A simple yet addictive one-tap drifting game. Master the corners!',
    image: withAssetPrefix('/assets/drift-boss/drift-boss.webp'),
    url: '/drift-boss'
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}

// 获取推荐的体育游戏
export function getSportsGames(): Game[] {
  return Object.values(games).filter(game => 
    game.id.includes('doodle') || 
    game.id.includes('baseball') || 
    game.id.includes('basketball') ||
    game.id.includes('retro-bowl')
  );
}



