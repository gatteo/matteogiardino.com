import { Metadata } from 'next'

type Site = {
    title: string
    description: string
    url: string
    logo: string
}

export const site: Site = {
    title: 'Matteo Giardino',
    description: 'Matteo Giardino è un Educatore, Sviluppatore ed Imprenditore di Torino.',
    url: process.env.NODE_ENV === 'production' ? 'https://matteogiardino.com' : 'http://localhost:3002',
    logo: 'https://matteogiardino.com/images/mg-logo-white.webp',
}

export const siteBaseMetadata: Metadata = {
    title: site.title,
    description: site.description,
    applicationName: 'Matteo Giardino',
    referrer: 'origin-when-cross-origin',
    keywords: [
        'Matteo Giardino',
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'TikTok',
        'Programmazione',
        'Sviluppo',
        'CTO',
        'Tecnologia',
    ],
    authors: [{ name: 'Matteo Giardino', url: 'https://matteogiardino.com' }],
    creator: 'Matteo Giardino',
    publisher: 'Matteo Giardino',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    openGraph: {
        url: site.url,
        type: 'website',
        title: site.title,
        siteName: site.title,
        description: site.description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/images/og/og.png`,
                width: 1200,
                height: 630,
                alt: site.description,
                type: 'image/png',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/images/favicon/favicon.ico',
        shortcut: '/images/favicon/favicon.ico',
        apple: [
            {
                url: '/images/favicon/apple-icon-60x60.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                url: '/images/favicon/apple-icon-120x120.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: '/images/favicon/apple-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/images/favicon/apple-icon-precomposed.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/images/favicon/favicon-16x16.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/images/favicon/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                url: '/images/favicon/favicon-96x96.png',
            },
        ],
    },
    manifest: '/images/favicon/manifest.json',
    twitter: {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        site: '@mattegiardino',
        creator: '@mattegiardino',
        images: [
            {
                url: `${site.url}/images/og/og.png`,
                width: 1200,
                height: 630,
                alt: site.description,
            },
        ],
    },
    // verification: {
    //     google: 'google-site-verification-id',
    // },
    alternates: {
        canonical: site.url,
        // languages: {
        //     'en-US': 'https://matteogiardino.com/en-US',
        // },
        types: {
            'application/rss+xml': `${site.url}/rss.xml`,
        },
    },
    category: 'technology',
}
