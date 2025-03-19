const million = require('million/compiler');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = million.next(nextConfig, { auto: true });
