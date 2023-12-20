/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d3544la1u8djza.cloudfront.net'],
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig;