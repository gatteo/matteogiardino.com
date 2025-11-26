'use client'

import { useEffect, useState } from 'react'

import { Button, ButtonProps } from './ui/button'
import { useTranslations } from 'next-intl'

export function CalendarButton(props: ButtonProps) {
    const [isCalLoaded, setIsCalLoaded] = useState(false)

    const t = useTranslations('calendar')

    useEffect(() => {
        // Dynamically import Cal.com only on client side to avoid SSR issues
        ;(async function () {
            try {
                const { getCalApi } = await import('@calcom/embed-react')
                const cal = await getCalApi()
                cal('ui', {
                    styles: { branding: { brandColor: '#000000' } },
                    hideEventTypeDetails: false,
                    layout: 'month_view',
                })
                setIsCalLoaded(true)
            } catch (error) {
                console.error('Failed to load Cal.com embed:', error)
            }
        })()
    }, [])

    return (
        <Button
            data-cal-namespace=''
            data-cal-link='matteo-giardino/speedy'
            data-cal-config='{"layout":"month_view"}'
            disabled={!isCalLoaded}
            {...props}>
            {t('bookCall')}
        </Button>
    )
}
