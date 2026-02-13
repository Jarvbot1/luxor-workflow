import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/luxor-workflow',
  assetPrefix: '/luxor-workflow',
};

export default nextConfig;
