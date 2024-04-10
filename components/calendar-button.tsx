'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

import { Button, ButtonProps } from './ui/button'

export function CalendarButton(props: ButtonProps) {
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
        <Button
            data-cal-namespace=''
            data-cal-link='matteo-giardino/19min'
            data-cal-config='{"layout":"month_view"}'
            {...props}>
            fissa una call
        </Button>
    )
}
