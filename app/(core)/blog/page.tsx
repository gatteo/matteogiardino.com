import type { Metadata } from 'next'

import { site } from '@/config/site'
import { getAllBlogPosts } from '@/lib/blog'
import { FilteredPosts } from '@/components/blog/filtered-posts'
import { SubscribeForm } from '@/components/blog/subscribe-form'
import { PageTitle } from '@/components/page-title'

const title = 'Articoli'
const description =
    'Sono onesto, la scrittura non è il mio punto forte. Proprio per questo, ho deciso di sfidare me stesso creando questo piccolo angolo del web, un posto dove allenarmi a scrivere. Tanto chi legge i blog nel 2023?'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/blog`,
    },
    openGraph: {
        url: `${site.url}/blog`,
        type: 'website',
        title,
        siteName: site.title,
        description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/images/og/og.png`,
                width: 1200,
                height: 630,
                alt: description,
                type: 'image/png',
            },
        ],
    },
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
