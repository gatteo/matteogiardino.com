import { IconDeviceDesktop, IconFlame, IconMessageCircle, IconPencil, IconSeeding } from '@tabler/icons-react'

type HeaderLinks = {
    icon: React.ReactNode
    href: string
    text: string
}[]

type FooterLinkGroups = {
    id: number
    links: {
        href: string
        title: string
    }[]
}[]

type FooterLinks = {
    href: string
    title: string
}[]

export const HEADER_LINKS: HeaderLinks = [
    {
        icon: <IconDeviceDesktop size={14} />,
        href: '/services',
        text: 'Per le aziende',
    },
    {
        icon: <IconSeeding size={14} />,
        href: '/learn-and-grow',
        text: 'Prodotti di formazione',
    },
    {
        icon: <IconFlame size={14} />,
        href: '/projects',
        text: 'Progetti',
    },
    {
        icon: <IconMessageCircle size={14} />,
        href: '/contacts',
        text: 'Contatti',
    },
    {
        icon: <IconPencil size={14} />,
        href: '/blog',
        text: 'Articoli',
    },
]

export const FOOTER_CONTACTS: FooterLinks = [
    {
        href: 'mailto:matteo@devv.it',
        title: 'matteo@devv.it',
    },
    {
        href: 'mailto:matteo@wezard.it',
        title: 'matteo@wezard.it',
    },
]

export const FOOTER_LINKS: FooterLinkGroups = [
    {
        id: 2,
        links: [
            {
                href: '/services',
                title: 'Servizi per le aziende',
            },
            {
                href: '/learn-and-grow',
                title: 'Prodotti di formazione',
            },
            {
                href: '/projects',
                title: 'Progetti',
            },
            {
                href: '/contacts',
                title: 'Contatti',
            },
            {
                href: '/blog',
                title: 'Articoli',
            },
        ],
    },
]

export const FOOTER_SOCIAL_MEDIA: FooterLinks = [
    {
        href: 'https://www.instagram.com/mattegiardino',
        title: 'Instagram',
    },
    {
        href: 'https://www.tiktok.com/@mattegiardino',
        title: 'TikTok',
    },
    {
        href: 'https://github.com/gatteo',
        title: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/matteo-giardino',
        title: 'LinkedIn',
    },
    {
        href: 'https://twitter.com/mattegiardino',
        title: 'Twitter',
    },
    {
        href: 'https://www.twitch.tv/matteogiardino',
        title: 'Twitch',
    },
]
