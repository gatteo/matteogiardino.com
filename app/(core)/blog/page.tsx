import type { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { Routes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'
import { FilteredPosts } from '@/components/blog/filtered-posts'
import { SubscribeForm } from '@/components/blog/subscribe-form'
import { PageTitle } from '@/components/page-title'

const title = 'articoli'
const description =
    'un remoto angolo del web che posso riempire di articoli, storie e guide. Tanto chi legge i blog nel 2024?'

type Props = {
    params: Record<string, never>
    searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

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

export default async function Page() {
    const posts = await getAllBlogPosts()

    return (
        <>
            <PageTitle
                title='articoli. storie. guide.'
                description='sarò onesto, la scrittura non è il mio punto forte. Non è che non mi piaccia, ma spesso mi spaventa affrontare una pagina bianca da riempire con parole. Proprio per questo, ho deciso di sfidare me stesso creando questo piccolo angolo del web, un posto dove allenarmi a scrivere. Tanto chi legge i blog nel 2024?'
                fromColor='from-purple-400'
                toColor='to-pink-600'
            />

            <SubscribeForm className='mb-8' />

            <FilteredPosts posts={posts} />
        </>
    )
}
