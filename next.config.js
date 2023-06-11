import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

    experimental: {
        appDir: true,
    },

    images: {
        domains: ['avatars.githubusercontent.com'],
    },

    webpack: (config) => {
        config.infrastructureLogging = {
            level: 'error',
        }

        return config
    },

    async redirects() {
        return [
            {
                source: '/it',
                destination: '/',
                permanent: true,
            },
        ]
    },
}

export default withContentlayer(nextConfig)
