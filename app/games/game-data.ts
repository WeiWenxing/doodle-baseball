export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  // 游戏数据将在后续添加
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



