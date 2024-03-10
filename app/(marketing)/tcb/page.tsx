import * as React from 'react'
import type { Metadata } from 'next'

import { site } from '@/config/site'
import { Hero } from '@/components/tcb/hero'

const title = 'Tech Career Boost'
const description =
    'Il corso pluripremiato ✨ per imparare le fondamenta e la mentalità della programmazione. Adatto a tutti i livelli, al costo di una cena.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/tcb`,
    },
    openGraph: {
        url: `${site.url}/tcb`,
        type: 'website',
        title,
        siteName: site.title,
        description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/images/og/tcb.png`,
                width: 1200,
                height: 630,
                alt: description,
                type: 'image/png',
            },
        ],
    },
}

export default function Page() {
    return (
        <>
            <Hero />
        </>
    )
}
