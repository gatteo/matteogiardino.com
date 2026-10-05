'use client'

import * as React from 'react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle({ label }: { label: string }) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // The theme is only known on the client; render a neutral placeholder on the server.
    React.useEffect(() => setMounted(true), [])

    const isDark = mounted ? resolvedTheme === 'dark' : true

    return (
        <Button
            variant='ghost'
            size='icon'
            aria-label={label}
            title={label}
            className='text-muted-foreground hover:text-foreground'
            onClick={() => setTheme(isDark ? 'light' : 'dark')}>
            {isDark ? <IconSun className='size-[18px]' /> : <IconMoon className='size-[18px]' />}
        </Button>
    )
}
