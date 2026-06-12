/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript and ESLint errors for build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimize for Vercel
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['cdn.sanity.io'],
  },
  // Environment variables
  env: {
    DISABLE_AUTH: 'true',
  },
}

module.exports = nextConfig