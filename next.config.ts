import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
};

export default nextConfig;
