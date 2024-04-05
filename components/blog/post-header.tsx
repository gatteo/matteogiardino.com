import Image from 'next/image'
import { formatDate } from '@/utils/dates'
import { absoluteUrl } from '@/utils/urls'

import { BlogPostAuthor, BlogPostSource } from '@/types/blog'
import { getUrlFromSource } from '@/lib/blog'

import { AspectRatio } from '../ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { ShareIcons } from './share-icons'

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
            <div>
                <h1 className='text-3xl font-bold md:text-5xl'>{title}</h1>
                <div className='mt-2 text-muted-foreground'>{summary}</div>
                <div className='mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-center'>
                    <div className='flex flex-wrap items-center gap-2 text-xs sm:text-sm'>
                        <div className='flex flex-row items-center gap-2'>
                            <Avatar className='size-6'>
                                <AvatarImage src={author.image} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>{author.name}</p>
                        </div>

                        <div className='text-muted-foreground'>•</div>

                        <p>{formatDate(createdAt)}</p>

                        {tags.length > 0 && (
                            <>
                                <div className='text-muted-foreground'>•</div>
                                <div className='flex flex-wrap gap-1'>
                                    {tags.map((t) => (
                                        <Badge key={t} variant={'outline'}>
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    <ShareIcons
                        title={title}
                        url={absoluteUrl(getUrlFromSource(source, slug))}
                        className='justify-start'
                    />
                </div>
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
