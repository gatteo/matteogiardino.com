import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'
import { PostCard } from '@/components/blog/post-card'

import { Button } from '../ui/button'

export async function BlogPosts() {
    const posts = await getAllBlogPosts(4)

    return (
        <section id='blog-posts' className='mt-32'>
            <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
                <div className='flex-auto'>
                    <h2 className='text-balance text-3xl font-bold'>
                        cose che ho scritto{' '}
                        <strong className='underline decoration-sky-400 underline-offset-4'>per te</strong>
                    </h2>
                    <p className='mt-2 text-balance text-muted-foreground'>leggi gli articoli e pensieri che scritto</p>
                </div>

                <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
                    <Link
                        href={UtmUrl(Routes.Blog, {
                            medium: UtmMediums.Homepage,
                            content: 'all_posts_cta',
                        })}>
                        tutti gli articoli
                        <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
                    </Link>
                </Button>
            </div>

            <div className='-mx-4 mt-4 grid sm:grid-cols-2'>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}
