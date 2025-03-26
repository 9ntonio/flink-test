const million = require('million/compiler');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Essential for static site generation
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.ctfassets.net'],
  },
  trailingSlash: true, // Creates proper /about/index.html files
};

module.exports = million.next(nextConfig, { auto: true });
