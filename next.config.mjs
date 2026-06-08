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

    async redirects() {
        return [
            {
                source: '/en/blog/how-to-install-openclaw-ollama-2026-guide',
                destination: '/en/blog/using-ollama-with-openclaw-en',
                permanent: true,
            },
            {
                source: '/blog/guida-installazione-openclaw-ollama-2026',
                destination: '/blog/configurare-openclaw-ollama-agenti-ai-locali',
                permanent: true,
            },
            {
                source: '/blog/chi-e-il-cto-guida-completa-al-ruolo-del-chief-technology-officer',
                destination: '/blog/guida-ruolo-cto',
                permanent: true,
            },
            {
                source: '/blog/strategia-adozione-ia-pmi-fractional-cto',
                destination: '/blog/fractional-cto-guida-completa-ai-benefici-per-la-tua-azienda',
                permanent: true,
            },
            {
                source: '/projects/devv-30',
                destination: '/projects/devv',
                permanent: true,
            },
            {
                source: '/en/projects/devv-30',
                destination: '/en/projects/devv',
                permanent: true,
            },
            {
                source: '/blog/guida-per-lanciare-un-prodotto-digitale',
                destination: '/blog/creare-un-prodotto-innovativo-nel-2026-guida-ai',
                permanent: true,
            },
            {
                source: '/blog/costruire-prodotto-innovativo-2026',
                destination: '/blog/creare-un-prodotto-innovativo-nel-2026-guida-ai',
                permanent: true,
            },
            {
                source: '/blog/cosa-fa-cto-2026',
                destination: '/blog/guida-ruolo-cto',
                permanent: true,
            },
            {
                source: '/en/blog/building-autonomous-workflows-openclaw-agents',
                destination: '/en/blog/orchestrating-ai-sub-agents-openclaw',
                permanent: true,
            },
        ]
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
