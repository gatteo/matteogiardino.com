import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

import { env } from '@/env.mjs'

type Site = {
    url: string
    logo: string
    title: string
    name: string
    keywords: string[]
    titleTemplate: string
    description: string
    githubUsername: string
    favicons: IconDescriptor[]
}

export const site: Site = {
    url: env.NODE_ENV === 'production' ? 'https://matteogiardino.com' : 'http://localhost:3000',
    logo: 'https://matteogiardino.com/images/mg-logo-white.webp',
    title: 'Matteo Giardino',
    name: 'Matteo Giardino',
    keywords: ['Matteo Giardino', 'Next.js', 'React', 'TypeScript', 'Node.js', 'TikTok', 'Programmazione'],
    titleTemplate: '- Matteo Giardino',
    description: 'Matteo Giardino è un Educatore, Sviluppatore ed Imprenditore di Torino.',
    githubUsername: 'gatteo',
    favicons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
        },
    ],
}
