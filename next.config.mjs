/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/express-industrial',
  assetPrefix: '/express-industrial/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
