/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import ('next').NextConfig } */

const nextConfig = {
  images: {
    domains: ['assets.aceternity.com']
  }
}

const withVideos = require('next-videos')

module.exports = withVideos(nextConfig)