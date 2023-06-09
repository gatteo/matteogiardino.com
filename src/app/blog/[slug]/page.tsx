import { allBlogPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Article, WithContext } from 'schema-dts'

import Image from '@/components/mdx/image'

import { site } from '@/config/site'

import Content from './content'
import Footer from './footer'
import Header from './header'

type BlogPostPageProps = {
    params: {
        slug: string
    }
}

export const generateStaticParams = () => {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export const generateMetadata = (props: BlogPostPageProps): Metadata => {
    const { params } = props

    const post = allBlogPosts.find((post) => post.slug === params.slug)

    if (!post) {
        return {}
    }

    const ISOPublishedTime = new Date(post.date).toISOString()
    const ISOModifiedTime = new Date(post.modifiedTime).toISOString()

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

const BlogPostPage = (props: BlogPostPageProps) => {
    const { slug } = props.params

    const post = allBlogPosts.find((post) => post.slug === slug)

    if (!post) {
        notFound()
    }

    const { title, summary, date, modifiedTime, image } = post

    const jsonLd: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',

        'headline': title,
        'description': summary,
        'datePublished': date,
        'dateModified': modifiedTime,
        'image': `${site.url}/static/images/blog/${post.slug}/og.png`,
        'author': {
            '@type': 'Person',
            'name': site.name,
            'url': site.url,
        },
        'publisher': {
            '@type': 'Person',
            'name': site.name,
            'url': site.url,
        },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Header date={date} title={title} slug={slug} description={summary} />

            <Image src={image} width={1200} height={630} alt={title} className="my-12 rounded-lg shadow-2xl" />

            <Content slug={slug} post={post} />

            <Footer slug={slug} title={title} />

            {/* <Comment /> */}
        </>
    )
}

export default BlogPostPage
