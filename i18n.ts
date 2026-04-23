import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
export const locales = ['it', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'it'

// Default locale has no URL prefix (`/blog`), other locales do (`/en/blog`).
// Keep this in sync across middleware (proxy.ts) and navigation helpers (lib/navigation.ts).
export const localePrefix = 'as-needed' as const

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale

    // Ensure that a valid locale is used
    if (!locale || !locales.includes(locale as Locale)) {
        locale = defaultLocale
    }

    return {
        locale,
        messages: (await import(`./locales/${locale}.json`)).default,
    }
})
