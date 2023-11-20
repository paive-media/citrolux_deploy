/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'citrolux.ru',
            port: '',
            pathname: '/cms/uploads/**',
          },
        ],
        formats: []
      },
}

module.exports = nextConfig
