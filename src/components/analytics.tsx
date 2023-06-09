'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

import analytics from '@/lib/analytics'

export function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // let newPageViewPath: string | undefined

        if (pathname) {
            // newPageViewPath = pathname + searchParams.toString()
            analytics.page()
        }
    }, [pathname, searchParams])

    return <></>
}

export default function SuspenseAnalytics() {
    return (
        <Suspense fallback={null}>
            <Analytics />
        </Suspense>
    )
}
