/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: '/doodle-baseball.embed',
        destination: '/game/doodle-baseball/index.html',
      },
      // 其他游戏路由重写规则将在后续添加
      {
        source: '/drift-boss.embed',
        destination: '/game/drift-boss/index.html',
      },
    ]
  }
};

module.exports = nextConfig;


