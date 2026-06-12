/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore TypeScript errors during build (temporarily)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Don't attempt to load missing routes
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig