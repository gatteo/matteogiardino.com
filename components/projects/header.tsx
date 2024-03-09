'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { IconBrandGithub, IconHome } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const animation = {
    hide: {
        y: 10,
        opacity: 0.2,
    },
    show: {
        y: 0,
        opacity: 1,
    },
}

type Props = {
    title: string
    description: string
    icon: string
    url?: string
    github?: string
    image?: string
}

export function Header({ title, description, icon, url, github, image }: Props) {
    return (
        <>
            <div className='space-y-4'>
                <motion.div className='flex items-center gap-3' initial={animation.hide} animate={animation.show}>
                    <Link href={url as string} className='flex flex-col'>
                        <div className='flex'>
                            <Image
                                src={icon}
                                alt='null'
                                height={40}
                                width={40}
                                className='mr-2 size-10 rounded-xl border border-accent md:mr-3'
                            />
                            <h1 className='flex text-5xl font-bold'>{title}</h1>
                        </div>
                        <div className='text-muted-foreground'>{description}</div>
                    </Link>
                </motion.div>

                <motion.div
                    className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
                    initial={animation.hide}
                    animate={animation.show}
                    transition={{ delay: 0.1 }}>
                    {url && (
                        <Link target='_blank' rel='noopener noreferrer' href={url} className='flex items-center'>
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
                </motion.div>
            </div>

            {image && (
                <div className='my-6'>
                    <AspectRatio ratio={16 / 9} className='overflow-hidden rounded-lg shadow-2xl'>
                        <Image src={image} alt={title} fill className='object-cover' />
                    </AspectRatio>
                </div>
            )}
        </>
    )
}
export default Header
