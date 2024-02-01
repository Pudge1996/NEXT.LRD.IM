/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    defaultLocale: 'zh-Hans',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/:locale(en)/blog/:slug*',
        destination: '/blog/:slug*', // 将带有语言前缀的URL重写为标准格式
      },
    ];
  },
  images: {
    deviceSizes: [960],
    unoptimized: true,
    domains: ["lrdim.oss-cn-shenzhen.aliyuncs.com", "lrdim.oss-accelerate.aliyuncs.com", "lrd.im", "aliyuncs.com"],
  },
};

module.exports = nextConfig;
