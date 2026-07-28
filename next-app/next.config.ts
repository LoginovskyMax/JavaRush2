import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://rickandmortyapi.com/api/character/**'),
      new URL('https://avatars.githubusercontent.com/u/**?v=4')
    ]
  },
  env: {
    customKey: 'my-value',
  },
};

export default nextConfig;
