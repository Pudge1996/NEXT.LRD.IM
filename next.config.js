/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [960],
    unoptimized: true,
    domains: ["lrdim.oss-cn-shenzhen.aliyuncs.com", "lrd.im"],
  },
};

module.exports = nextConfig;
