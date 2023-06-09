import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandTwitch,
    IconBrandTwitter,
    IconExternalLink,
} from '@tabler/icons-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import PageTitle from '@/components/page-title'

import { site } from '@/config/site'

const SocialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/mattegiardino',
        handle: '@mattegiardino',
        icon: IconBrandInstagram,
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@mattegiardino',
        handle: '@mattegiardino',
        icon: IconBrandTiktok,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/gatteo',
        handle: '@mattegiardino',
        icon: IconBrandGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/matteo-giardino',
        handle: '@mattegiardino',
        icon: IconBrandLinkedin,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/mattegiardino',
        handle: '@mattegiardino',
        icon: IconBrandTwitter,
    },
    {
        name: 'Twitch',
        url: 'https://www.twitch.tv/matteogiardino',
        handle: '@matteogiardino',
        icon: IconBrandTwitch,
    },
]
const EmailLinks = [
    {
        name: 'Devv',
        mailto: 'matteo@devv.it',
        icon: IconBrandInstagram,
        logo: '/static/images/projects/devv/icon.png',
    },
    {
        name: 'Wezard',
        mailto: 'matteo@wezard.it',
        icon: IconBrandTwitter,
        logo: '/static/images/wezard-icon-dark.png',
    },
]

const title = 'Contatti'
const description =
    'Che tu voglia conoscermi, parlarmi di un progetto o una collaborazione, in questa pagina troverai il modo per contattarmi.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/contacts`,
    },
    openGraph: {
        url: `${site.url}/contacts`,
        type: 'website',
        title,
        siteName: site.title,
        description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/static/images/og/og.png`,
                width: 1200,
                height: 630,
                alt: description,
                type: 'image/png',
            },
        ],
    },
}

const ContactsPage = () => {
    return (
        <>
            <PageTitle
                title="Contatti."
                description="Che tu voglia conoscermi, parlarmi di un progetto o una collaborazione, in questa pagina troverai il modo per contattarmi."
                fromColor="from-red-400"
                toColor="to-blue-500"
            />
            <h2 className="mt-16 text-2xl font-bold text-accent-fg">Email</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {EmailLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={`mailto:${link.mailto}`}
                            className="group flex flex-row items-center space-x-4 rounded-lg border border-accent-1 bg-accent-1 p-4 transition-all duration-150 hover:border-accent-4">
                            <Image
                                src={link.logo}
                                alt={link.name + ' logo'}
                                width={32}
                                height={32}
                                className="-mt-1 mr-2 inline-block h-9 w-9 rounded-lg border-2 border-accent-2"
                            />
                            <div className="flex flex-grow justify-between">
                                <h2 className="text-lg">{link.mailto}</h2>
                                {/* <div className="text-accent-5">{link.handle}</div> */}
                                <IconExternalLink className="text-accent-1 group-hover:text-accent-5" size={24} />
                            </div>
                        </Link>
                    )
                })}
            </div>
            <h2 className="mt-16 text-2xl font-bold text-accent-fg">Social</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {SocialLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className="group flex items-center space-x-4 rounded-lg border border-accent-1 bg-accent-1 p-4 transition-all duration-150 hover:border-accent-4">
                            <link.icon className="h-7 w-7 text-sky-300" size={48} strokeWidth={2} aria-hidden="true" />
                            <div className="flex-1 flex-row">
                                <h2 className="text-lg font-bold text-accent-fg">{link.name}</h2>
                                <div className="text-accent-5">{link.handle}</div>
                            </div>
                            <IconExternalLink className="text-accent-1 group-hover:text-accent-5" size={24} />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ContactsPage
