import * as React from 'react'
import type { Metadata } from 'next'

import { site } from '@/config/site'

import AboutSection from './about'
import CTA1Section from './cta-1'
import FAQsSection from './faqs'
import HeroSection from './hero'
import IsForYouSection from './is-for-you'
import MentorSection from './mentor'
import PricingSection from './pricing'
import ProblemSection from './problem'
import SolutionSection from './solution'
import TestimonialsSection from './testimonials'
import WhatsIncludedSection from './whats-included'

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
            <HeroSection />

            <AboutSection />

            <ProblemSection />

            <SolutionSection />

            <CTA1Section />

            <MentorSection />

            <IsForYouSection />

            <WhatsIncludedSection />

            <TestimonialsSection />

            <PricingSection />

            <FAQsSection />
        </>
    )
}

export default Page
