/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Add alias for next-auth to mock version
    config.resolve.alias = {
      ...config.resolve.alias,
      'next-auth/react': require.resolve('./src/mock/next-auth/react.ts'),
    };
    return config;
  },
}

module.exports = nextConfig