import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogPosts } from 'contentlayer/generated'
import { type Article, type WithContext } from 'schema-dts'

import { BlogPostSource } from '@/types/blog'
import { site } from '@/config/site'
import { getLocalBlogPost } from '@/lib/blog'
import { Content } from '@/components/blog/post-content'
import { Footer } from '@/components/blog/post-footer'
import { Header } from '@/components/blog/post-header'
import { ScrollIndicator } from '@/components/scroll-indicator'

type Props = {
    params: {
        slug: string
    }
}

export const generateStaticParams = () => {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export const generateMetadata = (props: Props): Metadata => {
    const { params } = props

    const post = allBlogPosts.find((p) => p.slug === params.slug)

    if (!post) {
        return {}
    }

    const ISOPublishedTime = new Date(post.createdAt).toISOString()
    const ISOModifiedTime = new Date(post.modifiedAt).toISOString()

    return {
        title: post.title,
        description: post.summary,
        alternates: {
            canonical: `${site.url}/blog/${params.slug}`,
        },
        openGraph: {
            url: `${site.url}/blog/${params.slug}`,
            type: 'article',
            title: post.title,
            siteName: site.name,
            description: post.summary,
            locale: 'it-IT',
            publishedTime: ISOPublishedTime,
            modifiedTime: ISOModifiedTime,
            authors: site.url,
            images: [
                {
                    url: `${site.url}/static/images/blog/${post.slug}/og.png`,
                    width: 1200,
                    height: 630,
                    alt: post.summary,
                    type: 'image/png',
                },
            ],
        },
    }
}

export default function Page({ params: { slug } }: Props) {
    const post = getLocalBlogPost(slug)

    if (!post) {
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

            <Content title={post.title} slug={slug} body={post.body} />

            <Footer slug={slug} title={post.title} author={post.author} source={BlogPostSource.Local} />

            <ScrollIndicator />
        </>
    )
}
