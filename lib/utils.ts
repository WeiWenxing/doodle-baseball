import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 为资源路径添加CDN前缀
 * @param path 资源路径，如 '/assets/img/favicon.ico'
 * @returns 完整的资源URL
 */
export function withAssetPrefix(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_ASSETS_PREFIX || '';

  // 打印环境变量用于调试
  console.log('🔍 环境变量调试信息:');
  console.log('NEXT_PUBLIC_ASSETS_PREFIX:', process.env.NEXT_PUBLIC_ASSETS_PREFIX);
  console.log('prefix:', prefix);
  console.log('原路径:', path);

  if (!prefix) {
    console.log('✅ 使用本地路径:', path);
    return path;
  }

  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${prefix}${normalizedPath}`;

  console.log('🌐 使用CDN路径:', fullUrl);
  return fullUrl;
}
