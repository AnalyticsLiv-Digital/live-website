/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
      return [
          {
              // Sets security headers for all routes
              source: '/(.*)',
              headers: [
                {
                  key: 'Strict-Transport-Security',
                  value: 'Strict-Transport-Security: max-age=31536000; includeSubDomains',
              },
                  {
                      key: 'Referrer-Policy',
                      value: 'strict-origin-when-cross-origin',
                  },
                  {
                      key: 'Content-Security-Policy',
                      value: 'default-src https:',
                  },
                  {
                      key: 'X-Frame-Options',
                      value: 'X-Frame-Options: SAMEORIGIN',
                  },
                  {
                      key: 'X-Content-Type-Options',
                      value: 'X-Content-Type-Options: nosniff',
                  },
                  {
                      key: 'Permissions-Policy',
                      value: 'geolocation=(self "https://analyticsliv.com"), microphone=()'
                  }

              ],
          },
      ];
  },
}

module.exports = nextConfig
