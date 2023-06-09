import type { Metadata } from 'next'
import Image from 'next/image'

import getAllPosts from '@/lib/mdx'

import About from '@/components/about'
import BlogPosts from '@/components/blog-posts'
import FollowersStats from '@/components/followers-stats'
import Hero from '@/components/hero'
import Pictures from '@/components/home-picture-group'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Skills from '@/components/skills'
import Testimonials from '@/components/testimonials'

import { site } from '@/config/site'

export const metadata: Metadata = {
    alternates: {
        canonical: site.url,
    },
}

const HomePage = () => {
    const posts = getAllPosts({
        limit: 4,
    })

    return (
        <>
            <Image
                src="/static/images/bg-1.jpg"
                alt=""
                className="fixed left-0 right-0 top-0 -z-40 min-h-screen min-w-full opacity-0 dark:opacity-25"
                width="1308"
                height="1000"
            />

            <Hero />

            <About />

            <Pictures />

            <Projects />

            <Services />

            <Testimonials />

            <FollowersStats />

            <Skills />

            <BlogPosts posts={posts} />

            {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16 sm:py-12">
                <img
                    src="static/images/bg-1.jpg"
                    alt=""
                    className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-20"
                    width="1308"
                />

                <div className="absolute inset-0 bg-[url(/static/images/bg-grid.svg)] bg-center [mask-image:linear-gradient(180deg,black,rgba(255,255,255,0))]"></div>
            </div> */}
        </>
    )
}

export default HomePage
