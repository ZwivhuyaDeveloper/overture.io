/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import ('next').NextConfig } */

const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'cdn.sanity.io']
  }
}

const withVideos = require('next-videos')

module.exports = withVideos(nextConfig)