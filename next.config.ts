import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
      dangerouslyAllowSVG: true,
      remotePatterns:[
          {
              protocol: 'https',
              hostname: '*',
          }
      ]
  },
    typescript:{
      ignoreBuildErrors: true
    },
    eslint: {
      ignoreDuringBuilds: true
    }
};

export default nextConfig;
