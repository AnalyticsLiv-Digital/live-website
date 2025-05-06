/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experiments: {
        topLevelAwait: true
    },

    images: {
        domains: ["storage.googleapis.com"], // Allow images from this domain
    },

    async redirects() {
        return [
            {
                source: '/services/CRO',
                destination: '/services/conversion-rate-optimization',
                permanent: true,
            },
            {
                source: '/services/sem',
                destination: '/services/ppc',
                permanent: true,
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: '(www|.*)\\.analyticsliv\\.com',
                    },
                ],
                destination: 'https://analyticsliv.com/:path*',
                permanent: true,
            },
        ];
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
