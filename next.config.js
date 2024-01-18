/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experiments: {
        topLevelAwait: true
      },
    async headers() {
        return [
            {
                // Sets security headers for all routes
                source: '/(.*)',
                headers: [
                  {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=31536000; includeSubDomains',
                },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
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
  