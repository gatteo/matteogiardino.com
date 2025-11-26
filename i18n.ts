import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Can be imported from a shared config
export const locales = ['it', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'it'

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
