/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'dummyjson.com',
  //       port: '',
  //       pathname: '/products/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['dummyjson.com'],
  },
}

module.exports = nextConfig
