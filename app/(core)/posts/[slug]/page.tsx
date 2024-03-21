import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { Article, WithContext } from 'schema-dts'
import { unified } from 'unified'

import { BlogPostSource } from '@/types/blog'
import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { rehypeGridImages } from '@/lib/mdx/plugins/rehype/rehype-substack-grid-images'
import { rehypeRoundedImages } from '@/lib/mdx/plugins/rehype/rehype-substack-rounded-images'
import { getSubstackPost, getSubstackPosts } from '@/lib/substack'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Footer } from '@/components/blog/post-footer'
import { Header } from '@/components/blog/post-header'
import { ScrollIndicator } from '@/components/scroll-indicator'

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = await getSubstackPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    const post = await getSubstackPost(params.slug)
    if (!post) return {}

    const ISOPublishedTime = new Date(post.date).toISOString()
    const ISOModifiedTime = new Date(post.date).toISOString()

    return {
        title: post.title,
        description: post.summary,
        alternates: {
            canonical: absoluteUrl(Routes.SubstackBlogPost(params.slug)),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.SubstackBlogPost(params.slug)),
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
                    url: post.image,
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
                    url: post.image,
                    alt: post.summary,
                },
            ],
        },
    }
}

export default async function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
    const post = await getSubstackPost(slug)

    if (!post) {
        notFound()
    }

    const postBody = await unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeGridImages)
        .use(rehypeRoundedImages)
        .use(rehypeStringify)
        .process(post.body)

    const jsonLd: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',

        'headline': post.title,
        'description': post.summary,
        'datePublished': post.date.toISOString(),
        'dateModified': post.date.toISOString(),
        'image': post.image,
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
                createdAt={post.date}
                title={post.title}
                slug={post.slug}
                summary={post.summary}
                image={post.image}
                source={BlogPostSource.Substack}
                author={post.author}
                tags={post.tags}
            />

            <Alert className='mb-12'>
                <AlertTitle>⚠️ leggi questo avviso!</AlertTitle>
                <AlertDescription>
                    il post che stai per leggere è stato originariamente pubblicato nella mia{' '}
                    <Link
                        href={UtmUrl(post.originalUrl, {
                            medium: UtmMediums.Blog,
                            content: 'alert_original_post',
                        })}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline'>
                        newsletter su substack
                    </Link>
                    . Se incontri problemi, puoi leggerlo direttamente li.
                </AlertDescription>
            </Alert>

            {/* <div className='grid grid-cols-3 gap-4'>
                <img src={image1} alt={post.title} className='col-span-1 rounded-lg' />
                // other images
        </div> */}

            <article
                className='prose max-w-[100vw] overflow-hidden dark:prose-invert'
                dangerouslySetInnerHTML={{ __html: String(postBody) }}
            />

            <Footer slug={slug} title={post.title} source={BlogPostSource.Substack} author={post.author} />

            <ScrollIndicator />
        </>
    )
}
