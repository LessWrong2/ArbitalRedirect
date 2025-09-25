import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/p/:slug',
        destination: 'https://www.lesswrong.com/w/:slug',
        permanent: false,
      },
      {
        source: '/pages/:slug',
        destination: 'https://www.lesswrong.com/w/:slug',
        permanent: false,
      },
      {
        source: '/:other*',
        destination: 'https://www.lesswrong.com/wikitags/all?ref=arbital',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
