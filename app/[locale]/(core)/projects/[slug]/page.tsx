import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { absoluteUrl } from '@/utils/urls'
import { allProjects } from '@/.contentlayer/generated'
import { setRequestLocale } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { getProject } from '@/lib/projects'
import { Content } from '@/components/mdx-content'
import Header from '@/components/project/header'
import { ScrollIndicator } from '@/components/scroll-indicator'

// Force static generation
export const dynamic = 'force-static'

type Props = {
    params: Promise<{
        locale: string
        slug: string
    }>
}

export default async function Page({ params }: Props) {
    const { locale, slug } = await params
    setRequestLocale(locale)
    const project = getProject(slug, locale)

    if (!project) {
        notFound()
    }

    return (
        <>
            <Header
                slug={slug}
                title={project.title ?? project.name}
                description={project.description}
                icon={project.icon}
                url={project.url}
                github={project.github}
                image={project.image}
            />

            <Content title={project.name} body={project.body} url={absoluteUrl(Routes.Project(slug))} />

            <ScrollIndicator />
        </>
    )
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { locale, slug } = await params
    const project = getProject(slug, locale)

    if (!project) return {}

    return {
        title: project.title ?? project.name,
        description: project.description,
        alternates: {
            canonical: absoluteUrl(Routes.Project(slug)),
        },
        openGraph: {
            url: absoluteUrl(Routes.Project(slug)),
            type: 'website',
            title: project.title ?? project.name,
            siteName: site.title,
            description: project.description,
            locale: 'it-IT',
            images: [
                {
                    url: absoluteUrl(project.image ?? '/images/og/og.png'),
                    width: 1200,
                    height: 630,
                    alt: project.description,
                    type: 'image/png',
                },
            ],
        },
    }
}

export const generateStaticParams = () => {
    const slugs = Array.from(new Set(allProjects.map((project) => project.slug)))
    return slugs.map((slug) => ({ slug }))
}
