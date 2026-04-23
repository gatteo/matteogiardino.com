'use client'

import { useState } from 'react'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'

export function CopyEmailButton({ email, className }: { email: string; className?: string }) {
    const t = useTranslations('pages.contacts')
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        toast.success(t('emailCopied'))
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            type='button'
            aria-label={t('copyEmail')}
            onClick={handleCopy}
            className={cn('text-muted-foreground transition-colors hover:text-accent-foreground', className)}>
            {copied ? <IconCheck size={22} /> : <IconCopy size={22} />}
        </button>
    )
}
