import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { absoluteUrl } from '@/utils/urls'

import { PlRoutes, TclRoutes } from '@/config/routes'
import { HeaderLinks } from '@/config/tcl'
import Footer from '@/components/marketing/footer'
import Header from '@/components/marketing/header'

import LogoForLightMode from '/public/images/products/tcl-logo-black.webp'
import LogoForDarkMode from '/public/images/products/tcl-logo.webp'

const title = 'Tech Career Launch'
const description =
    'Un percorso di 4 settimane con Matteo Giardino, un mentore esperto che ti fornirà una preparazione a 360° e personalizzata per superare i colloqui di lavoro.'

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
                    url: absoluteUrl('/images/og/tcl.png'),
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
                    url: absoluteUrl('/images/og/tcl.png'),
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
                ctaHref={TclRoutes.Pricing}
                ctaText='Lancia la tua carriera'
                ctaClassName='bg-gradient-to-br tracking-wider from-purple-600 to-indigo-500 font-semibold text-neutral-50'
            />
            <main className='static mx-auto max-w-5xl px-8 py-24'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
