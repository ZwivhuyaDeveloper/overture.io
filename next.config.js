/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import ('next').NextConfig } */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Add empty turbopack config to resolve webpack/turbopack conflict
  turbopack: {},
}

const withVideos = require('next-videos')

module.exports = withVideos(nextConfig)