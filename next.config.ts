import type { NextConfig } from 'next';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const nextConfig = (stage: string) =>
  ({
    distDir: stage == PHASE_PRODUCTION_BUILD ? 'build' : '.next',
    output: 'export',
    productionBrowserSourceMaps: true,
    images: {
      unoptimized: true,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      config.experiments.topLevelAwait = true;
      return config;
    },
  }) satisfies NextConfig;

export default nextConfig;
