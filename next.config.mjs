/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['@/components/ui'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  async redirects() {
    return [
      // Redirect all requests coming to zendfi.tech (apex and www) to waitlist.zendfi.tech
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'zendfi.tech' },
        ],
        destination: 'https://waitlist.zendfi.tech/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'www.zendfi.tech' },
        ],
        destination: 'https://waitlist.zendfi.tech/:path*',
        permanent: true,
      },
      // Redirect all /docs routes to docs.zendfi.tech
      {
        source: '/docs/:path*',
        destination: 'https://docs.zendfi.tech/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
