'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import analytics from '@/lib/analytics'

export default function Analytics() {
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
