import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import { IconBrandGithub, IconHome } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'

import { ShareIcons } from '../blog/share-icons'
import { AspectRatio } from '../ui/aspect-ratio'

type Props = {
    slug: string
    title: string
    description: string
    icon: string
    url?: string
    github?: string
    image?: string
}

export function Header({ title, description, icon, url, github, image, slug }: Props) {
    return (
        <>
            <div className='space-y-4'>
                <Link href={url as string} className='flex flex-col gap-4'>
                    <h1 className='flex text-4xl font-bold md:text-5xl'>{title}</h1>
                    <p className='text-muted-foreground'>{description}</p>
                </Link>

                <div className='mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
                    <div className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'>
                        {url && (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                href={UtmUrl(url, {
                                    medium: UtmMediums.Projects,
                                    content: 'header',
                                })}
                                className='flex items-center'>
                                <IconHome size={20} className='-mt-1 mr-2 inline-block' />
                                {url}
                            </Link>
                        )}

                        {github && (
                            <Link target='_blank' rel='noopener noreferrer' href={github} className='flex items-center'>
                                <IconBrandGithub size={20} className='-mt-1 mr-2 inline-block' />
                                {title}'s GitHub
                            </Link>
                        )}
                    </div>
                    <ShareIcons title={title} url={absoluteUrl(Routes.Project(slug))} className='justify-start' />
                </div>
            </div>

            {image && (
                <div className='my-6'>
                    <AspectRatio ratio={16 / 9} className='overflow-hidden rounded-lg border shadow-2xl'>
                        <Image src={image} alt={title} fill className='object-cover' />
                    </AspectRatio>
                </div>
            )}
        </>
    )
}
export default Header
