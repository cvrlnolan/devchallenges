/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@devchallenges/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};
