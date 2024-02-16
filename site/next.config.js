/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'citrolux.ru',
            port: '',
            pathname: '/images/**',
          },
        ],
        formats: []
      },
}

module.exports = nextConfig
