import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/oddslab-landing',
  reactCompiler: true,
};

export default nextConfig;
