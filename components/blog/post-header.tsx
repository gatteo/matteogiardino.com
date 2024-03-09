'use client'

import React from 'react'
import Image from 'next/image'
import { formatDate } from '@/utils/dates'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { motion } from 'framer-motion'

import { BlogPostAuthor, BlogPostSource } from '@/types/blog'
import { site } from '@/config/site'
import { getUrlFromSource } from '@/lib/blog'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { ShareIcons } from './share-icons'

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
    slug: string
    createdAt: string | Date
    image: string | null
    summary: string
    source: BlogPostSource
    author: BlogPostAuthor
    tags: string[]
}

export function Header({ createdAt, title, slug, summary, image, source, author, tags }: Props) {
    return (
        <>
            <motion.div initial={animation.hide} animate={animation.show}>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <div className='mt-2 text-muted-foreground'>{summary}</div>
                <div className='mt-8 flex flex-col items-center justify-between gap-4 lg:flex-row'>
                    <div className='flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
                        <div className='flex flex-row items-center gap-2'>
                            <Avatar className='size-6'>
                                <AvatarImage src={author.image} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>{author.name}</div>
                        </div>

                        <div className='text-muted-foreground'>•</div>

                        <div>{formatDate(createdAt)}</div>

                        <div className='text-muted-foreground'>•</div>

                        <div className='flex flex-wrap gap-1'>
                            {tags.map((t) => (
                                <Badge key={t} variant={'outline'}>
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <ShareIcons title={title} url={`${site.url}/${getUrlFromSource(source, slug)}`} />
                </div>
            </motion.div>

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
