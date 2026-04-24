import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { type WebSite, type WithContext } from 'schema-dts'
import { Toaster } from 'sonner'

import { site } from '@/config/site'
import { cn } from '@/lib/utils'
import { GTM } from '@/components/gtm'
import { ProgressProvider } from '@/components/progress-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

const websiteJsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.title,
    alternateName: `${site.title} · ${site.tagline}`,
    url: site.url,
    inLanguage: ['it-IT', 'en-US'],
    publisher: {
        '@type': 'Person',
        name: site.title,
        url: site.url,
    },
}

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

// Do NOT lock dynamicParams here — it cascades to descendant segments and
// would prevent the blog-slug route from 308-redirecting wrong-locale URLs.
// Unknown locales are already rejected by the `notFound()` call below.

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!locales.includes(locale as any)) notFound()

    setRequestLocale(locale)

    const messages = await getMessages({ locale })

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(inter.className, biotif.className)}>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
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
