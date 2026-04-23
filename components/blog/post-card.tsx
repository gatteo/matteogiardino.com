'use client'

import Image from 'next/image'
import { formatDate } from '@/utils/dates'
import { UtmUrl } from '@/utils/urls'
import { Link } from '@/lib/navigation'
import { useTranslations } from 'next-intl'

import { BlogPostPreview } from '@/types/blog'

import { Badge } from '../ui/badge'

const MAX_VISIBLE_TAGS = 3

export function PostCard({ post }: { post: BlogPostPreview }) {
    const t = useTranslations('pages.blog')
    const tags = post.tags ?? []
    const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS)
    const overflow = tags.length - visibleTags.length

    return (
        <Link
            key={post.id}
            href={UtmUrl(post.url, {
                content: 'post_card',
            })}
            className='flex flex-col rounded-lg p-4 transition-all duration-150 hover:bg-muted'>
            <Image
                src={post.image ?? '/images/blog-post-placeholder.webp'}
                width={1280}
                height={720}
                alt={post.title}
                className='aspect-video rounded-sm object-cover object-center'
            />

            <div className='mt-4 grow items-start space-y-2'>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                <div className='text-muted-foreground'>
                    {post.summary.slice(0, 120)}
                    {post.summary.length > 120 && '...'}
                </div>
            </div>

            <div className='mt-3 flex flex-nowrap items-center gap-2 overflow-hidden text-xs sm:text-sm'>
                <div className='shrink-0'>{formatDate(post.date)}</div>
                {visibleTags.length > 0 && (
                    <>
                        <div className='shrink-0 text-muted-foreground'>•</div>
                        {visibleTags.map((t) => (
                            <Badge key={t} variant={'outline'} className='shrink-0 whitespace-nowrap'>
                                {t}
                            </Badge>
                        ))}
                        {overflow > 0 && (
                            <Badge variant={'outline'} className='shrink-0 whitespace-nowrap text-muted-foreground'>
                                {t('moreTags', { count: overflow })}
                            </Badge>
                        )}
                    </>
                )}
            </div>
        </Link>
    )
}
