import { Metadata, ResolvingMetadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import { absoluteUrl } from '@/utils/urls'
import { allBlogPosts } from '@/.contentlayer/generated'
import { setRequestLocale } from 'next-intl/server'
import { type Article, type WithContext } from 'schema-dts'

import { defaultLocale, locales } from '@/i18n'
import { BlogPostSource } from '@/types/blog'
import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { getLocalBlogPost, getLocalBlogPosts } from '@/lib/blog'
import { Footer } from '@/components/blog/post-footer'
import { Header } from '@/components/blog/post-header'
import { Content } from '@/components/mdx-content'
import { ScrollIndicator } from '@/components/scroll-indicator'

function blogPostPath(locale: string, slug: string): string {
    const path = Routes.LocalBlogPost(slug)
    return locale === defaultLocale ? path : `/${locale}${path}`
}

function blogPostUrl(locale: string, slug: string): string {
    return absoluteUrl(blogPostPath(locale, slug))
}

function blogPostAlternates(locale: string, slug: string, translationSlug?: string): Metadata['alternates'] {
    const canonical = blogPostUrl(locale, slug)
    const languages: Record<string, string> = { [locale]: canonical }

    if (translationSlug) {
        const otherLocale = locales.find((l) => l !== locale)
        if (otherLocale) {
            const otherUrl = blogPostUrl(otherLocale, translationSlug)
            languages[otherLocale] = otherUrl
            languages['x-default'] = locale === defaultLocale ? canonical : otherUrl
        }
    } else {
        languages['x-default'] = canonical
    }

    return { canonical, languages }
}

// Force static generation
export const dynamic = 'force-static'

type Props = {
    params: Promise<{
        slug: string
        locale: string
    }>
}

export function generateStaticParams() {
    const posts = getLocalBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    const { slug, locale } = await params
    const post = getLocalBlogPost(slug, locale)
    if (!post) return {}

    const ISOPublishedTime = new Date(post.createdAt).toISOString()
    const ISOModifiedTime = new Date(post.modifiedAt).toISOString()

    return {
        title: post.title,
        description: post.summary,
        alternates: blogPostAlternates(locale, slug, post.translationSlug),
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.LocalBlogPost(slug)),
            type: 'article',
            title: post.title,
            siteName: site.title,
            description: post.summary,
            locale: 'it-IT',
            publishedTime: ISOPublishedTime,
            modifiedTime: ISOModifiedTime,
            authors: site.url,
            images: [
                {
                    url: `${site.url}/images/blog/${post.slug}/og.png`,
                    width: 1200,
                    height: 630,
                    alt: post.summary,
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            ...previousTwitter,
            title: post.title,
            description: post.summary,
            images: [
                {
                    url: `${site.url}/images/blog/${post.slug}/og.png`,
                    alt: post.summary,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    }
}

export default async function Page({ params }: Props) {
    const { slug, locale } = await params
    setRequestLocale(locale)
    const post = getLocalBlogPost(slug, locale)

    if (!post) {
        // Slug exists but belongs to a different locale — permanent-redirect
        // to its real home instead of silently serving the wrong-locale page.
        const sibling = allBlogPosts.find((p) => p.slug === slug)
        if (sibling?.locale && sibling.locale !== locale) {
            permanentRedirect(blogPostPath(sibling.locale, slug))
        }
        notFound()
    }

    const jsonLd: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',

        'headline': post.title,
        'description': post.summary,
        'datePublished': post.createdAt,
        'dateModified': post.modifiedAt,
        'image': `${site.url}/images/blog/${post.slug}/og.png`,
        'author': {
            '@type': 'Person',
            'name': post.author.name,
            'url': post.author.url,
        },
        'publisher': {
            '@type': 'Person',
            'name': post.author.name,
            'url': post.author.url,
        },
    }

    return (
        <>
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Header
                createdAt={post.createdAt}
                title={post.title}
                slug={post.slug}
                summary={post.summary}
                image={post.image}
                author={post.author}
                source={BlogPostSource.Local}
                tags={post.tags}
            />

            <Content title={post.title} body={post.body} url={absoluteUrl(Routes.LocalBlogPost(slug))} />

            <Footer slug={slug} title={post.title} author={post.author} source={BlogPostSource.Local} />

            <ScrollIndicator />
        </>
    )
}
