import * as React from 'react'
import type { Metadata } from 'next'

import { site } from '@/config/site'

import HeroSection from './hero'

const title = 'Tech Career Boost'
const description =
    'Il corso pluripremiato ✨ per imparare le fondamenta e la mentalità della programmazione. Adatto a tutti i livelli, al costo di una cena.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/tech-career-boost`,
    },
    openGraph: {
        url: `${site.url}/tech-career-boost`,
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

const Page = () => {
    return (
        <>
            <HeroSection />
        </>
    )
}

export default Page
