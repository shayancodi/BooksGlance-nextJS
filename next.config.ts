import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  // Skip static generation for client-heavy pages
  experimental: {},
};

export default nextConfig;
