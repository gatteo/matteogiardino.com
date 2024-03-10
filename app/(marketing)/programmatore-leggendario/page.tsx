import * as React from 'react'
import type { Metadata } from 'next'

import { site } from '@/config/site'
import { About } from '@/components/pl/about'
import { CTA1 } from '@/components/pl/cta-1'
import { CTA2 } from '@/components/pl/cta-2'
import { FAQs } from '@/components/pl/faqs'
import { Hero } from '@/components/pl/hero'
import { IsForYou } from '@/components/pl/is-for-you'
import { Mentor } from '@/components/pl/mentor'
import { Pricing } from '@/components/pl/pricing'
import { Problem } from '@/components/pl/problem'
import { Reasons } from '@/components/pl/reasons'
import { Solution } from '@/components/pl/solution'
import { TechKnowledge } from '@/components/pl/tech-knowledge'
import { Testimonials } from '@/components/pl/testimonials'
import { ToProve } from '@/components/pl/to-prove'
import { WhatsIncluded } from '@/components/pl/whats-included'

const title = 'Programmatore Leggendario'
const description =
    'Il corso pluripremiato ✨ per imparare le fondamenta e la mentalità della programmazione. Adatto a tutti i livelli, al costo di una cena.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/programmatore-leggendario`,
    },
    openGraph: {
        url: `${site.url}/programmatore-leggendario`,
        type: 'website',
        title,
        siteName: site.title,
        description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/images/og/tcl.png`,
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
            <Hero />

            <About />

            <Reasons />

            <Problem />

            <Solution />

            <CTA1 />

            <Mentor />

            <CTA2 />

            <IsForYou />

            <WhatsIncluded />

            <ToProve />

            <TechKnowledge />

            <Testimonials />

            <Pricing />

            <FAQs />
        </>
    )
}

export default Page
