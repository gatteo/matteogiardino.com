'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

export function CalendarEmbed() {
    useEffect(() => {
        ;(async function () {
            const cal = await getCalApi()
            cal('ui', {
                styles: { branding: { brandColor: '#000000' } },
                hideEventTypeDetails: false,
                layout: 'month_view',
            })
        })()
    }, [])

    return (
        <Cal
            calLink='matteo-giardino/19min'
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view' }}
        />
    )
}
