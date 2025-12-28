import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'
import { getTranslations } from 'next-intl/server'

import { Routes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'
import { FilteredPosts } from '@/components/blog/filtered-posts'
import { PageTitle } from '@/components/page-title'

// Force static generation, revalidate every hour
export const dynamic = 'force-static'
export const revalidate = 3600

type Props = {
    params: Promise<{ locale: string }>
    searchParams: Promise<Record<string, never>>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'pages.blog' })
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    const title = t('title')
    const description = t('description')

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.Blog),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Blog),
            title,
            description,
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
        },
    }
}

export default async function Page({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'pages.blog' })
    const posts = await getAllBlogPosts()

    return (
        <>
            <PageTitle
                title={t('pageTitle')}
                description={t('extendedDescription')}
                fromColor='from-purple-400'
                toColor='to-pink-600'
            />

            <FilteredPosts posts={posts} />
        </>
    )
}
