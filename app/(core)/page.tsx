import Image from 'next/image'

import { getAllBlogPosts } from '@/lib/blog'
import { BlogPosts } from '@/components/home/blog-posts'

export default async function HomePage() {
    const posts = await getAllBlogPosts(4)

    return (
        <>
            <Image
                src='/images/bg-1.jpg'
                alt=''
                className='fixed inset-x-0 top-0 -z-40 min-h-screen min-w-full opacity-0 dark:opacity-25'
                width='1308'
                height='1000'
            />

            {/* <Hero /> */}

            {/* <About /> */}

            {/* <Pictures /> */}

            {/* <Projects /> */}

            {/* <FollowersStats /> */}

            {/* <Services /> */}

            {/* <Testimonials /> */}

            {/* <Skills /> */}

            <BlogPosts posts={posts} />
        </>
    )
}
