'use client'

import React from 'react'
import posthog from 'posthog-js'

import { Link } from '@/lib/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Props {
    className?: string
    text: string
    href: string
}

export function CtaButton({ text, href, className }: Props) {
    const handleClick = () => {
        posthog.capture('pl_cta_clicked', {
            cta_text: text,
            cta_href: href,
        })
    }

    return (
        <Button
            asChild
            className={cn(
                className,
                'to bg-gradient-to-br text-base font-semibold tracking-wide dark:from-yellow-300 dark:to-amber-500 dark:hover:bg-amber-400/80',
            )}>
            <Link href={href} onClick={handleClick}>
                {text}
            </Link>
        </Button>
    )
}
