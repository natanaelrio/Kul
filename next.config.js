/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'd3544la1u8djza.cloudfront.net',
      'ik.imagekit.io',
      'kul.vercel.app',
      'shop.forem.com',
      'images.unsplash.com',
      'picsum.photos',
      'fastly.picsum.photos'
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version,Authorization" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
