import * as React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl } from '@/utils/urls'

import { PlRoutes } from '@/config/routes'
import Footer from '@/components/marketing/footer'

import LogoImage from '/public/images/products/tcb-logo.webp'

const title = 'Tech Career Boost'
const description =
    'Un percorso di 4 settimane con Matteo Giardino, un mentore esperto che ti fornirà una preparazione a 360° e personalizzata per fare il salto di carriera.'

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
                    url: absoluteUrl('/images/og/og.png'),
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
                    url: absoluteUrl('/images/og/og.png'),
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
            <header className='fixed inset-x-0 top-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/80 dark:saturate-100'>
                <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                    <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                        <div className='block'>
                            <Image
                                src={LogoImage}
                                placeholder='blur'
                                height={60}
                                width={70}
                                alt='Tech Career Boost Logo'
                            />
                        </div>
                    </Link>
                </div>
            </header>
            <main className='static mx-auto max-w-5xl px-8 py-24 '>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
