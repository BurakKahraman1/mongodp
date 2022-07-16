/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  optimizeFonts:true,
  /**useFileSystemPublicRoutes: false,*/
  images: {
    domains: [
        'cloudimg.io',
        'awnhwjglcr.cloudimg.io'
    ],
  }
}

module.exports = nextConfig
