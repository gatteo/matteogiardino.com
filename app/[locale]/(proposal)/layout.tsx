import * as React from 'react'
import { setRequestLocale } from 'next-intl/server'

// Proposal pages are standalone documents: no site navigation, no footer.
// The html/body shell, theme and analytics come from app/[locale]/layout.tsx.
export default async function ProposalLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    setRequestLocale(locale)

    return <>{children}</>
}
