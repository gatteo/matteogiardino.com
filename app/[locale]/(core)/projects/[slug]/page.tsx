import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { absoluteUrl } from '@/utils/urls'
import { allProjects } from '@/.contentlayer/generated'

import { Routes } from '@/config/routes'
import { site } from '@/config/site'
import { Content } from '@/components/mdx-content'
import Header from '@/components/project/header'
import { ScrollIndicator } from '@/components/scroll-indicator'

// Force static generation
export const dynamic = 'force-static'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: Props) {
    const { slug } = await params
    const project = allProjects.find((project) => project.slug === slug)

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
    const { slug } = await params
    const project = allProjects.find((project) => project.slug === slug)

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
    return allProjects.map((project) => ({
        slug: project.slug,
    }))
}
