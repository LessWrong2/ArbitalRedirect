import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.lesswrong.com/wikitags/all?ref=arbital',
        permanent: false,
      },
      {
        source: '/p/:slug',
        destination: 'https://www.lesswrong.com/w/:slug',
        permanent: false,
      },
      {
        source: '/:other*',
        destination: 'https://www.lesswrong.com/:other*',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
