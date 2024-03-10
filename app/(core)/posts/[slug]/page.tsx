import Link from 'next/link'
import { notFound } from 'next/navigation'

import { BlogPostSource } from '@/types/blog'
import { getSubstackPost } from '@/lib/substack'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Footer } from '@/components/blog/post-footer'
import { Header } from '@/components/blog/post-header'
import { ScrollIndicator } from '@/components/scroll-indicator'

export default async function BlogPostPage({ params: { slug } }: { params: { slug: string } }) {
    const post = await getSubstackPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <>
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
                    <Link href={post.originalUrl} target='_blank' rel='noopener noreferrer' className='underline'>
                        newsletter su substack
                    </Link>
                    . Se incontri problemi, puoi leggerlo direttamente li.
                </AlertDescription>
            </Alert>

            <article
                className='prose max-w-[100vw] overflow-hidden dark:prose-invert'
                dangerouslySetInnerHTML={{ __html: post.body }}
            />

            <Footer slug={slug} title={post.title} source={BlogPostSource.Substack} author={post.author} />

            <ScrollIndicator />
        </>
    )
}
