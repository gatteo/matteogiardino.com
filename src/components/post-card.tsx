'use client'

import { Skeleton } from '@tszhong0411/ui'
import Link from 'next/link'

import { useFormattedDate } from '@/hooks'

import LikeCounter from './like-counter'
import Image from './mdx/image'
import ViewCounter from './view-counter'

import { BlogPostCore } from '@/types'

type PostCardProps = BlogPostCore

const PostCard = (props: PostCardProps) => {
    const { _id, slug, image, title, summary, date } = props
    const formattedDate = useFormattedDate(date, 'DD-MM-YYYY')

    return (
        <Link
            key={_id}
            href={`/blog/${slug}`}
            className="flex flex-col rounded-lg p-4 transition-all duration-150 hover:bg-hover">
            <Image src={image} width={1280} height={720} alt={title} rounded="rounded-lg" />
            <div className="mt-4 flex-grow">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="text-accent-5">{summary}</div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <div>{formattedDate ? formattedDate : <Skeleton className="h-5 w-10" />}</div>
                <div className="text-accent-5">•</div>
                <LikeCounter slug={slug} />
                <div className="text-accent-5">•</div>
                <ViewCounter slug={slug} />
            </div>
        </Link>
    )
}

export default PostCard
