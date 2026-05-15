/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.justdial.com' },
      { protocol: 'https', hostname: '**.jdmagicbox.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: '**.pexels.com' },
    ],
  },
};

module.exports = nextConfig;
