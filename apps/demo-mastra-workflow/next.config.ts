import path from 'path';

import type { NextConfig } from 'next';

const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig: NextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@app': path.resolve(__dirname, 'src/app'),
      '@runtime': path.resolve(__dirname, 'src/runtime'),
    };
    return config;
  },
};

export default nextConfig;
