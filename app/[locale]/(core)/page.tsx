import { setRequestLocale } from 'next-intl/server'

import { About } from '@/components/home/about'
import { BlogPosts } from '@/components/home/blog-posts'
import { Business } from '@/components/home/business'
import { Followers } from '@/components/home/followers'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import { Services } from '@/components/home/services'
import { Skills } from '@/components/home/skills'
import { Testimonials } from '@/components/home/testimonials'

// Force static generation for this page
export const dynamic = 'force-static'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    setRequestLocale(locale)

    return (
        <>
            <Hero />

            <About />

            <Services />

            <Followers />

            <Testimonials />

            <Projects />

            <Business />

            <Skills />

            <BlogPosts />
        </>
    )
}
