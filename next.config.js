/** @type {import('next').NextConfig} */
// FIXME: Remove this and replace with the correct domains for images.
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
