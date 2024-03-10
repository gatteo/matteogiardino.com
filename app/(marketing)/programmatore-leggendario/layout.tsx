import * as React from 'react'

import { HeaderLinks } from '@/config/pl'
import Footer from '@/components/marketing/footer'
import Header from '@/components/marketing/header'

import LogoForLightMode from '/public/images/products/pl-logo-black.png'
import LogoForDarkMode from '/public/images/products/pl-logo.png'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header
                logoForDarkMode={LogoForDarkMode}
                logoForLightMode={LogoForLightMode}
                links={HeaderLinks}
                ctaHref='/programmatore-leggendario#pricing'
                ctaText='Inizia ora!'
                ctaClassName='bg-gradient-to-br tracking-wider from-yellow-300 to-amber-600 font-semibold text-neutral-50 dark:text-neutral-900'
            />
            <main className='static mx-auto max-w-5xl px-8 py-24 '>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
