import * as React from 'react'

import Footer from '@/components/marketing/footer'

import Header from './components/header'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main className="static mx-auto max-w-5xl px-8 py-24 ">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
