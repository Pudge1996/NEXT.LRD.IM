/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [960],
    unoptimized: true,
    domains: ["lrdim.oss-cn-shenzhen.aliyuncs.com", "lrd.im"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'scoped'
            }
          }
        ]
      }
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
