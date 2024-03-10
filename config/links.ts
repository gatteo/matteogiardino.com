import { Icons } from '@/components/icon'

import { Routes } from './routes'

type HeaderLinks = {
    icon: keyof typeof Icons
    href: string
    text: string
}[]

export const HeaderLinks: HeaderLinks = [
    {
        icon: 'servicesPage',
        href: Routes.Services,
        text: 'Per le aziende',
    },
    {
        icon: 'learningProductsPage',
        href: Routes.LearningProducts,
        text: 'Prodotti di formazione',
    },
    {
        icon: 'projectsPage',
        href: Routes.Projects,
        text: 'Progetti',
    },
    {
        icon: 'contactsPage',
        href: Routes.Contact,
        text: 'Contatti',
    },
    {
        icon: 'blogPage',
        href: Routes.Blog,
        text: 'Articoli',
    },
]

type FooterLinkGroups = {
    id: number
    links: {
        href: string
        title: string
    }[]
}[]

export const FooterLinkGroups: FooterLinkGroups = [
    {
        id: 2,
        links: [
            {
                href: Routes.Services,
                title: 'servizi per le aziende',
            },
            {
                href: Routes.LearningProducts,
                title: 'prodotti di formazione',
            },
            {
                href: Routes.Projects,
                title: 'progetti',
            },
            {
                href: Routes.Contact,
                title: 'contatti',
            },
            {
                href: Routes.Blog,
                title: 'articoli',
            },
        ],
    },
]

type SocialLinks = {
    name: string
    url: string
    handle: string
    icon: keyof typeof Icons
}[]

export const SocialLinks: SocialLinks = [
    {
        name: 'instagram',
        url: 'https://www.instagram.com/mattegiardino',
        handle: '@mattegiardino',
        icon: 'instagram',
    },
    {
        name: 'tiktok',
        url: 'https://www.tiktok.com/@mattegiardino',
        handle: '@mattegiardino',
        icon: 'tiktok',
    },
    {
        name: 'github',
        url: 'https://github.com/gatteo',
        handle: '@gatteo',
        icon: 'github',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/matteo-giardino',
        handle: '@matteo-giardino',
        icon: 'linkedin',
    },
    {
        name: 'x',
        url: 'https://twitter.com/mattegiardino',
        handle: '@mattegiardino',
        icon: 'twitter',
    },
    {
        name: 'twitch',
        url: 'https://www.twitch.tv/matteogiardino',
        handle: '@matteogiardino',
        icon: 'twitch',
    },
]

type ContactLinks = {
    name: string
    mailto: string
    icon: keyof typeof Icons
    logo: string
}[]

export const ContactLinks: ContactLinks = [
    {
        name: 'Personal',
        mailto: 'hi@matteogiardino.com',
        icon: 'email',
        logo: '/images/mg-logo-white.webp',
    },
    {
        name: 'Wezard',
        mailto: 'matteo@wezard.it',
        icon: 'email',
        logo: '/images/brands/wezard-icon.webp',
    },
]
