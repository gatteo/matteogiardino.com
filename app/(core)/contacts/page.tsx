import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl } from '@/utils/urls'
import { IconExternalLink } from '@tabler/icons-react'

import { ContactLinks, SocialLinks } from '@/config/links'
import { Routes } from '@/config/routes'
import { CalendarEmbed } from '@/components/calendar-embed'
import { Icon } from '@/components/icon'
import { PageTitle } from '@/components/page-title'

const title = 'contatti'
const description =
    'che tu voglia conoscermi, parlarmi di un progetto o una collaborazione, scrivimi. Nasce sempre qualcosa di bello da un messaggio.'

type Props = {
    params: Record<string, never>
    searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.Contact),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Contact),
            title,
            description,
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
        },
    }
}

export default function Page() {
    return (
        <>
            <PageTitle
                title='come contattarmi'
                description='che tu voglia conoscermi, parlarmi di un progetto o una collaborazione, scrivimi. Nasce sempre qualcosa di bello da un messaggio.'
                fromColor='from-red-400'
                toColor='to-blue-500'
            />

            <h2 className='mt-16 text-xl font-bold md:text-2xl'>Email</h2>
            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-6'>
                {ContactLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={`mailto:${link.mailto}`}
                            className='group flex flex-row items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent'>
                            <Image
                                src={link.logo}
                                alt={link.name + ' logo'}
                                width={32}
                                height={32}
                                className='-mt-1 mr-2 inline-block size-9 rounded-lg border-2'
                            />
                            <div className='flex grow justify-between'>
                                <h2 className='text-lg'>{link.mailto}</h2>
                                <IconExternalLink
                                    className='text-muted-foreground group-hover:text-accent-foreground'
                                    size={24}
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>

            <h2 className='mt-16 text-xl font-bold md:text-2xl'>Facciamo due chiacchiere</h2>
            <div className='mt-4'>
                <CalendarEmbed />
            </div>

            <h2 className='mt-8 text-xl font-bold md:text-2xl'>Social</h2>
            <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6'>
                {SocialLinks.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.url}
                            className='group flex items-center space-x-4 rounded-lg border bg-muted p-4 transition-all duration-150 hover:bg-accent'>
                            <Icon
                                name={link.icon}
                                className='size-7 text-sky-300'
                                size={48}
                                strokeWidth={1}
                                aria-hidden='true'
                            />
                            <div className='flex-1 flex-row'>
                                <h2 className='text-lg font-bold'>{link.name}</h2>
                                <div className='text-muted-foreground'>{link.handle}</div>
                            </div>
                            <IconExternalLink
                                className='text-muted-foreground group-hover:text-accent-foreground'
                                size={24}
                            />
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
