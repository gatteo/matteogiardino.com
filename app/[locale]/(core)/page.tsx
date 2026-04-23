import { setRequestLocale } from 'next-intl/server'
import { type Person, type WithContext } from 'schema-dts'

import { SocialLinks } from '@/config/links'
import { site } from '@/config/site'
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

const personJsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.title,
    url: site.url,
    image: site.logo,
    jobTitle: site.tagline,
    description: site.description,
    sameAs: SocialLinks.map((s) => s.url),
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    setRequestLocale(locale)

    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />

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
