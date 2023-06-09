import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

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
    url: process.env.NODE_ENV === 'production' ? 'https://matteogiardino.com' : 'http://localhost:3000',
    logo: 'https://matteogiardino.com/static/images/mg-logo-white.png',
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
            url: '/static/favicon/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/static/favicon/favicon-32x32.png',
        },
    ],
}
