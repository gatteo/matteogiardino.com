import { NextResponse } from 'next/server'
import { absoluteUrl } from '@/utils/urls'
import { getTranslations } from 'next-intl/server'

import { ContactLinks } from '@/config/links'
import { products } from '@/config/products'
import { Routes } from '@/config/routes'
import { services } from '@/config/services'
import { site } from '@/config/site'
import { getAllBlogPosts } from '@/lib/blog'
import { getProjects } from '@/lib/projects'

export const dynamic = 'force-static'
export const revalidate = 3600

const RECENT_POSTS = 12

type LinkItem = { label: string; url: string; note?: string }

function section(title: string, items: LinkItem[]): string {
    const lines = items.map(({ label, url, note }) => (note ? `- [${label}](${url}): ${note}` : `- [${label}](${url})`))
    return `## ${title}\n\n${lines.join('\n')}`
}

export const GET = async () => {
    const projects = getProjects('en')
    const posts = await getAllBlogPosts(RECENT_POSTS, 'en')
    const tServices = await getTranslations({ locale: 'en', namespace: 'services.list' })
    const tProducts = await getTranslations({ locale: 'en', namespace: 'products' })

    const featuredProjects = projects.filter((p) => !p.collab && p.featured)
    const collabProjects = projects.filter((p) => p.collab)

    const sections: string[] = [
        '# Matteo Giardino',
        '> Personal site of Matteo Giardino — developer, educator, and entrepreneur from Turin, Italy. Founder & CTO focused on building and teaching software.',
        [
            'Matteo Giardino is a developer and entrepreneur based in Turin. He co-founded **westudents** (an app used by nearly 500,000 Italian students), founded **devv** in 2022 (a programming-education platform followed by 130,000+ learners), and sold **wezard** — his development agency — in January 2024.',
            '',
            'He works as a fractional CTO and product/growth advisor for early-stage companies, builds digital products end-to-end, and teaches programming through mentorship and video courses. Content on this site is primarily in Italian; selected pages and articles are also available in English under the `/en` prefix.',
        ].join('\n'),
        section('Main pages', [
            { label: 'Home', url: absoluteUrl('/'), note: 'about, featured projects, services, testimonials, latest posts' },
            { label: 'Projects', url: absoluteUrl(Routes.Projects), note: 'portfolio of own projects and collaborations' },
            { label: 'Services', url: absoluteUrl(Routes.Services), note: 'services for businesses and entrepreneurs' },
            { label: 'Learning products', url: absoluteUrl(Routes.LearningProducts), note: 'courses and mentorships for developers' },
            { label: 'Blog', url: absoluteUrl(Routes.Blog), note: 'articles on engineering, AI agents, and entrepreneurship' },
            { label: 'Contacts', url: absoluteUrl(Routes.Contact), note: 'email and booking links' },
        ]),
    ]

    const projectToItem = (p: (typeof projects)[number]): LinkItem => ({
        label: p.name,
        url: absoluteUrl(Routes.Project(p.slug)),
        note: p.description,
    })

    if (featuredProjects.length) sections.push(section('Projects', featuredProjects.map(projectToItem)))
    if (collabProjects.length) sections.push(section('Collaborations', collabProjects.map(projectToItem)))

    sections.push(
        section(
            'Services',
            services.map((s) => ({
                label: tServices(`${s.i18nKey}.title`),
                url: absoluteUrl(s.url),
                note: tServices(`${s.i18nKey}.shortDescription`),
            })),
        ),
    )

    sections.push(
        section(
            'Learning products',
            products.map((p) => ({
                label: tProducts(`${p.i18nKey}.title`),
                url: p.url.startsWith('http') ? p.url : absoluteUrl(p.url),
                note: tProducts(`${p.i18nKey}.description`),
            })),
        ),
    )

    if (posts.length) {
        sections.push(
            section(
                'Recent articles',
                posts.map((post) => ({ label: post.title, url: absoluteUrl(post.url), note: post.summary })),
            ),
        )
    }

    sections.push(
        section(
            'Contact',
            ContactLinks.map((link) => ({ label: link.mailto, url: `mailto:${link.mailto}` })),
        ),
    )

    sections.push(
        section('Optional', [
            { label: 'RSS feed', url: `${site.url}/rss.xml` },
            { label: 'Sitemap', url: `${site.url}/sitemap.xml` },
        ]),
    )

    const body = sections.join('\n\n') + '\n'

    return new NextResponse(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
