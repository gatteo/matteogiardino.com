import { getAllBlogPosts } from '@/lib/blog'
import { About } from '@/components/home/about'
import { BlogPosts } from '@/components/home/blog-posts'
import { CtaBusiness } from '@/components/home/cta-business'
import { Followers } from '@/components/home/followers'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import { Services } from '@/components/home/services'
import { Skills } from '@/components/home/skills'
import { Testimonials } from '@/components/home/testimonials'

export default async function HomePage() {
    const posts = await getAllBlogPosts(4)

    return (
        <>
            <Hero />

            <About />

            <Services />

            <Followers />

            <Testimonials />

            <Projects />

            <CtaBusiness />

            <Skills />

            <BlogPosts posts={posts} />
        </>
    )
}
