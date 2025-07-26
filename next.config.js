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
        destination: `${process.env.NEXT_PUBLIC_ASSETS_PREFIX || ''}/game/doodle-baseball/index.html`,
      },
      // 其他游戏路由重写规则将在后续添加
      {
        source: '/drift-boss.embed',
        destination: `${process.env.NEXT_PUBLIC_ASSETS_PREFIX || ''}/game/drift-boss/index.html`,
      },
    ]
  }
};

module.exports = nextConfig;


