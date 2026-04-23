import * as React from 'react'
import { setRequestLocale } from 'next-intl/server'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
// import { NotificationPopup } from '@/components/notification-popup'

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    return (
        <>
            <Header />
            <main className='static mx-auto max-w-5xl px-8 py-24 md:mb-16'>{children}</main>
            <Footer />
            {/* <NotificationPopup /> */}
        </>
    )
}
