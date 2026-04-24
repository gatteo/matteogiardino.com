'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import posthog from 'posthog-js'

import { type BlogPostPreview } from '@/types/blog'
import { canonicalizeTag, TAG_QUERY_PARAM } from '@/config/blog-tags'
import { cn } from '@/lib/utils'

import { PostCard } from './post-card'

function canonicalTagsFor(post: BlogPostPreview): string[] {
    return Array.from(new Set((post.tags ?? []).map(canonicalizeTag).filter(Boolean)))
}

export function FilteredPosts({ posts }: { posts: BlogPostPreview[] }) {
    const t = useTranslations('pages.blog')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const tagCounts = React.useMemo(() => {
        const counts = new Map<string, number>()
        for (const post of posts) {
            for (const tag of canonicalTagsFor(post)) {
                counts.set(tag, (counts.get(tag) ?? 0) + 1)
            }
        }
        return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
            (a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
        )
    }, [posts])

    const queryTag = canonicalizeTag(searchParams.get(TAG_QUERY_PARAM) ?? '')
    const activeTag = queryTag && tagCounts.some((tc) => tc.tag === queryTag) ? queryTag : null

    const setActiveTag = (next: string | null) => {
        posthog.capture('blog_tag_filtered', {
            tag: next,
            previous_tag: activeTag,
        })
        const params = new URLSearchParams(searchParams)
        if (next) params.set(TAG_QUERY_PARAM, next)
        else params.delete(TAG_QUERY_PARAM)
        const query = params.toString()
        router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
    }

    const filteredPosts = activeTag ? posts.filter((post) => canonicalTagsFor(post).includes(activeTag)) : posts

    return (
        <>
            <div className='mb-8 flex flex-wrap gap-2'>
                <TagChip
                    active={activeTag === null}
                    onClick={() => setActiveTag(null)}
                    label={t('allTag')}
                    count={posts.length}
                />
                {tagCounts.map(({ tag, count }) => (
                    <TagChip
                        key={tag}
                        active={activeTag === tag}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        label={tag}
                        count={count}
                    />
                ))}
            </div>

            {filteredPosts.length === 0 && <div className='text-center text-xl'>{t('emptyState')}</div>}

            <div className='-mx-4 grid gap-4 sm:grid-cols-2'>
                {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}

function TagChip({
    active,
    onClick,
    label,
    count,
}: {
    active: boolean
    onClick: () => void
    label: string
    count: number
}) {
    return (
        <button
            type='button'
            onClick={onClick}
            className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors sm:text-sm',
                active
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-muted text-foreground hover:bg-accent',
            )}>
            <span>{label}</span>
            <span
                className={cn(
                    'rounded-full px-1.5 py-0.5 text-[10px] font-semibold sm:text-xs',
                    active ? 'bg-background/20 text-background' : 'bg-background/60 text-muted-foreground',
                )}>
                {count}
            </span>
        </button>
    )
}
