import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandYoutube,
    IconDeviceDesktop,
    IconFlame,
    IconMessageCircle,
    IconPencil,
} from '@tabler/icons-react'

type HeroLinks = {
    id: string
    label: string
    icon: React.ReactNode
    href: string
}[]

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
        icon: <IconPencil size={14} />,
        href: '/blog',
        text: 'Articoli',
    },

    // {
    //     icon: <IconChartBar size={14} />,
    //     href: '/dashboard',
    //     text: 'Dashboard',
    // },
    {
        icon: <IconFlame size={14} />,
        href: '/projects',
        text: 'Progetti',
    },
    {
        icon: <IconDeviceDesktop size={14} />,
        href: '/services',
        text: 'Servizi',
    },
    {
        icon: <IconMessageCircle size={14} />,
        href: '/contacts',
        text: 'Contatti',
    },
    // {
    //     icon: <IconUserCircle size={14} />,
    //     href: '/about',
    //     text: 'About',
    // },
    // {
    //     icon: <IconDeviceDesktop size={14} />,
    //     href: '/uses',
    //     text: 'Uses',
    // },
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
                href: '/blog',
                title: 'Articoli',
            },
            {
                href: '/projects',
                title: 'Progetti',
            },
            {
                href: '/services',
                title: 'Servizi',
            },
            {
                href: '/contacts',
                title: 'Contatti',
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

export const HERO_LINKS: HeroLinks = [
    {
        id: 'github',
        label: 'GitHub',
        icon: <IconBrandGithub size={28} />,
        href: 'https://github.com/matteogiardino',
    },
    {
        id: 'instagram',
        label: 'Instagram',
        icon: <IconBrandInstagram size={28} />,
        href: 'https://www.instagram.com/matteogiardino/',
    },
    {
        id: 'youtube',
        label: 'YouTube',
        icon: <IconBrandYoutube size={28} />,
        href: 'https://www.youtube.com/@matteogiardino',
    },
    {
        id: 'facebook',
        label: 'Facebook',
        icon: <IconBrandFacebook size={28} />,
        href: 'https://www.facebook.com/tszhonglai.0411/',
    },
    {
        id: 'twitter',
        label: 'Twitter',
        icon: <IconBrandTwitter size={28} />,
        href: 'https://twitter.com/TszhongLai0411',
    },
]
