import { withContentlayer } from 'next-contentlayer2'
import createNextIntlPlugin from 'next-intl/plugin'

import './env.mjs'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !!! Warning: Dangerously allow production builds to successfully complete even if your project has type errors.
        // ignoreBuildErrors: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'substackcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'substack-post-media.s3.amazonaws.com',
            },
        ],
    },

    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://eu-assets.i.posthog.com/static/:path*',
            },
            {
                source: '/ingest/array/:path*',
                destination: 'https://eu-assets.i.posthog.com/array/:path*',
            },
            {
                source: '/ingest/:path*',
                destination: 'https://eu.i.posthog.com/:path*',
            },
        ]
    },

    // Required to support PostHog trailing slash API requests
    skipTrailingSlashRedirect: true,

    webpack: (config) => {
        config.infrastructureLogging = {
            level: 'error',
        }
        return config
    },
}

export default withContentlayer(withNextIntl(nextConfig))
