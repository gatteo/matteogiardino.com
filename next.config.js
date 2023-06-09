import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

export default withContentlayer(nextConfig)
