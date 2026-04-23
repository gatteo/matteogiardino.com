import { Icons } from '@/components/icon'

import { Routes } from './routes'

type HeaderLinks = {
    icon: keyof typeof Icons
    href: string
    i18nKey: string // matches a key under `navigation.*` in the locale JSONs
}[]

export const HeaderLinks: HeaderLinks = [
    { icon: 'servicesPage', href: Routes.Services, i18nKey: 'business' },
    { icon: 'learningProductsPage', href: Routes.LearningProducts, i18nKey: 'learningProducts' },
    { icon: 'projectsPage', href: Routes.Projects, i18nKey: 'projects' },
    { icon: 'contactsPage', href: Routes.Contact, i18nKey: 'contacts' },
    { icon: 'blogPage', href: Routes.Blog, i18nKey: 'articles' },
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
]

export const DevvMaxLinks = {
    homepage: 'https://devv.it',
}

export const Devv30Links = {
    homepage: 'https://devv.it/30',
    appStoreUrl: 'https://go.devv.it/devv-30-ios',
    googlePlayUrl: 'https://go.devv.it/devv-30-android',
}

export const DevvClubLinks = {
    homepage: 'https://devv.it/club',
    discordInviteUrl: 'https://go.devv.it/devv-club',
}
