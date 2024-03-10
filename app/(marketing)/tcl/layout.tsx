import * as React from 'react'

import { TclRoutes } from '@/config/routes'
import { HeaderLinks } from '@/config/tcl'
import Footer from '@/components/marketing/footer'
import Header from '@/components/marketing/header'

import LogoForLightMode from '/public/images/products/tcl-logo-black.webp'
import LogoForDarkMode from '/public/images/products/tcl-logo.webp'

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
