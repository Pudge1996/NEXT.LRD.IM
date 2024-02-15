/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    defaultLocale: 'zh-Hans',
    localeDetection: false,
  },

  
  images: {
    deviceSizes: [960],
    unoptimized: true,
    domains: ["lrdim.oss-cn-shenzhen.aliyuncs.com", "lrdim.oss-accelerate.aliyuncs.com", "lrd.im", "aliyuncs.com"],
  },
};

module.exports = nextConfig;
