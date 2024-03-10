import * as React from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { NotificationPopup } from '@/components/notification-popup'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className='static mx-auto max-w-5xl px-8 py-24 md:mb-16'>{children}</main>
            <Footer />
            <NotificationPopup />
        </>
    )
}
