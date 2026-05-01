import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alphaplaytv.com.br",
      },
    ],
  },
};

export default nextConfig;
