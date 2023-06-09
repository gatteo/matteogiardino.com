'use client'

import { ThemeProvider } from 'next-themes'

import CommandsMenuProvider from '@/providers/commands-menu'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers = (props: ProvidersProps) => {
    const { children } = props

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <CommandsMenuProvider>{children}</CommandsMenuProvider>
        </ThemeProvider>
    )
}
export default Providers
