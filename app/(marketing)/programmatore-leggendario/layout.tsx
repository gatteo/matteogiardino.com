import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { HeaderLinks } from '@/config/pl'
import { PlRoutes } from '@/config/routes'
import Footer from '@/components/marketing/footer'
import Header from '@/components/marketing/header'

import LogoForLightMode from '/public/images/products/pl-logo-black.webp'
import LogoForDarkMode from '/public/images/products/pl-logo.webp'

const title = 'Programmatore Leggendario'
const description =
    'Il corso pluripremiato ✨ per imparare le fondamenta e la mentalità della programmazione. Adatto a tutti i livelli, al costo di una cena.'

type Props = {
    children: React.ReactNode
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(PlRoutes.Home),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(PlRoutes.Home),
            title,
            description,
            images: [
                {
                    url: absoluteUrl('/images/og/pl.png'),
                    width: 1200,
                    height: 630,
                    alt: description,
                    type: 'image/png',
                },
            ],
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
            images: [
                {
                    url: absoluteUrl('/images/og/pl.png'),
                    width: 1200,
                    height: 630,
                    alt: description,
                    type: 'image/png',
                },
            ],
        },
    }
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header
                logoForDarkMode={LogoForDarkMode}
                logoForLightMode={LogoForLightMode}
                links={HeaderLinks}
                ctaHref={PlRoutes.Pricing}
                ctaText='Inizia ora!'
                ctaClassName='bg-gradient-to-br tracking-wider from-yellow-300 to-amber-600 font-semibold text-neutral-50 dark:text-neutral-900'
            />
            <main className='static mx-auto max-w-5xl px-8 py-24 '>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
