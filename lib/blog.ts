import { allBlogPosts } from '@/.contentlayer/generated'
import { remark } from 'remark'

import { BlogPostPreview, BlogPostSource, LocalBlogPost, TOC } from '@/types/blog'
import { Routes } from '@/config/routes'
import { getSubstackPosts } from '@/lib/substack'

import { remarkHeading } from './mdx/plugins/remark/remark-heading'

type Options = {
    limit?: number
}

export function getLocalBlogPost(slug: string): LocalBlogPost | undefined {
    return allBlogPosts.find((p) => p.slug === slug)
}

export function getLocalBlogPosts({ limit }: Options = {}): BlogPostPreview[] {
    return allBlogPosts
        .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
        .slice(0, limit)
        .map((post) => ({
            id: post._id,
            slug: post.slug,
            title: post.title,
            summary: post.summary,
            date: new Date(post.createdAt),
            image: post.image,
            source: BlogPostSource.Local,
            url: Routes.LocalBlogPost(post.slug),
            tags: post.tags,
            author: post.author,
        }))
}

export async function getAllBlogPosts(limit?: number): Promise<BlogPostPreview[]> {
    const localPosts = getLocalBlogPosts()
    const substackPosts = await getSubstackPosts()

    const sortedLocalPosts = localPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    const sortedSubstackPosts = substackPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

    return [...sortedSubstackPosts, ...sortedLocalPosts].slice(0, limit)
}

export function getUrlFromSource(source: BlogPostSource, slug: string) {
    switch (source) {
        case BlogPostSource.Local: {
            return Routes.LocalBlogPost(slug)
        }
        case BlogPostSource.Substack: {
            return Routes.SubstackBlogPost(slug)
        }
    }
}

export const getTOC = async (content: string) => {
    const result = await remark().use(remarkHeading).process(content)

    if ('toc' in result.data) {
        return result.data.toc as TOC[]
    }

    return []
}
