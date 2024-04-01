import { About } from '@/components/home/about'
import { BlogPosts } from '@/components/home/blog-posts'
import { Business } from '@/components/home/business'
import { Followers } from '@/components/home/followers'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import { Services } from '@/components/home/services'
import { Skills } from '@/components/home/skills'
import { Testimonials } from '@/components/home/testimonials'

export default function HomePage() {
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
