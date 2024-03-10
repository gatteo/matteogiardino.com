import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Props {
    className?: string
    text: string
    href: string
}

export function CtaButton({ text, href, className }: Props) {
    return (
        <Button
            asChild
            className={cn(
                className,
                'to bg-gradient-to-br text-base font-semibold tracking-wide dark:from-yellow-300 dark:to-amber-500 dark:hover:bg-amber-400/80',
            )}>
            <Link href={href}>{text}</Link>
        </Button>
    )
}
