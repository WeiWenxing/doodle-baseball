// 资源前缀工具函数 (CommonJS版本)
function withAssetPrefix(path) {
  const prefix = process.env.NEXT_PUBLIC_ASSETS_PREFIX || '';
  if (!prefix) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${normalizedPath}`;
}

export const siteConfig = {
  name: "Doodle Baseball",
  description: "Play Doodle Baseball free & unblocked online! Enjoy the fun, nostalgic Google Doodle baseball game. Click to swing, play instantly. No download!",
  domain: "doodle-baseball.net",
  url: "https://doodle-baseball.net",
  email: "support@doodle-baseball.net",
  author: "Doodle Baseball",
  social: {
    twitter: "DoodleBaseball",
    facebook: "DoodleBaseball",
  },
  metadata: {
    keywords: ["doodle baseball", "google doodle", "baseball game", "online game", "free game", "unblocked game"],
    themeColor: "#2563eb",
    manifestPath: withAssetPrefix("/assets/img/site.webmanifest"),
  },
  images: {
    icon: {
      favicon: withAssetPrefix("/assets/img/favicon.ico"),
      favicon16: withAssetPrefix("/assets/img/favicon-16x16.png"),
      favicon32: withAssetPrefix("/assets/img/favicon-32x32.png"),
      apple: withAssetPrefix("/assets/img/apple-touch-icon.png"),
      // safari: "/assets/img/safari-pinned-tab.svg",
    },
    og: withAssetPrefix("/assets/img/doodle-baseball-og-image.png"),
  },
};