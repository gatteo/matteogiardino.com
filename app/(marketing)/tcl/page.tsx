import * as React from 'react'
import type { Metadata } from 'next'

import { site } from '@/config/site'
import { About } from '@/components/tcl/about'
import { Cta1 } from '@/components/tcl/cta-1'
import { FAQs } from '@/components/tcl/faqs'
import { Hero } from '@/components/tcl/hero'
import { IsForYou } from '@/components/tcl/is-for-you'
import { Mentor } from '@/components/tcl/mentor'
import { Pricing } from '@/components/tcl/pricing'
import { Problem } from '@/components/tcl/problem'
import { Solution } from '@/components/tcl/solution'
import { Testimonials } from '@/components/tcl/testimonials'
import { WhatsIncluded } from '@/components/tcl/whats-included'

const title = 'Tech Career Launch'
const description =
    'Un percorso di 4 settimane con Matteo Giardino, un mentore esperto che ti fornirà una preparazione a 360° e personalizzata per superare i colloqui di lavoro.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/tech-career-launch`,
    },
    openGraph: {
        url: `${site.url}/tech-career-launch`,
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

            <Problem />

            <Solution />

            <Cta1 />

            <Mentor />

            <IsForYou />

            <WhatsIncluded />

            <Testimonials />

            <Pricing />

            <FAQs />
        </>
    )
}

export default Page
