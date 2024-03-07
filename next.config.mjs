import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !!! Warning: Dangerously allow production builds to successfully complete even if your project has type errors.
        ignoreBuildErrors: true,
    },

    eslint: {
        // !!! Warning: This allows production builds to successfully complete even if your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'substackcdn.com',
            },
        ],
    },

    webpack: (config) => {
        config.infrastructureLogging = {
            level: 'error',
        }
        return config
    },
}

export default withContentlayer(nextConfig)
