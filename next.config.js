/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'd3544la1u8djza.cloudfront.net',
      'ik.imagekit.io'
    ],
  }
}

module.exports = nextConfig;