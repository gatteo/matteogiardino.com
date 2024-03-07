import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

import { BlogPostPreview } from '@/types/blog'
import PostCard from '@/components/blog/post-card'

type BlogPostsProps = {
    posts: BlogPostPreview[]
}

const BlogPosts = (props: BlogPostsProps) => {
    const { posts } = props

    return (
        <section className='my-16 md:pt-16'>
            <div className='flex flex-col items-start justify-between md:flex-row md:items-end'>
                <div className='flex-auto'>
                    <h2 className='text-3xl font-bold'>
                        Gli ultimi <strong className='underline decoration-sky-400 underline-offset-4'>articoli</strong>
                    </h2>
                    <p className='mt-2 text-muted-foreground md:max-w-[70%]'>
                        Leggi gli articoli e pensieri che scritto
                    </p>
                </div>
                <div className='flex justify-end'>
                    <Link
                        href='/blog'
                        className='hover:bg-hover group flex items-center gap-2 rounded py-3 text-sm font-medium transition-colors md:px-3'>
                        <span>Tutti gli articoli</span>
                        <IconArrowRight className='size-4 transition duration-200 group-hover:translate-x-2' />
                    </Link>
                </div>
            </div>
            <div className='-mx-4 mt-4 grid sm:grid-cols-2'>
                {posts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </section>
    )
}

export default BlogPosts
