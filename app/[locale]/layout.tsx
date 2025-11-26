import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Toaster } from 'sonner'

import { cn } from '@/lib/utils'
import { GTM } from '@/components/gtm'
import { ProgressProvider } from '@/components/progress-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

const biotif = localFont({
    src: [
        {
            path: '../../styles/fonts/Biotif-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../styles/fonts/Biotif-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../styles/fonts/Biotif-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

// Ensure only static params are allowed
export const dynamicParams = false

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!locales.includes(locale as any)) notFound()

    const messages = await getMessages({ locale })

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(inter.className, biotif.className)}>
                <SpeedInsights />
                <GTM />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
                        <ProgressProvider>
                            {children}
                            <Toaster />
                            <TailwindIndicator />
                        </ProgressProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
