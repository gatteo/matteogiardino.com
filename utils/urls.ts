import { defaultLocale, locales } from '@/i18n'
import { UtmMediums } from '@/types/links'
import { site } from '@/config/site'

export const UtmSource = 'matteogiardino.com'

export function absoluteUrl(url: string) {
    if (url.startsWith('/')) url = url.slice(1)
    return `${site.url}/${url}`
}

// Builds the `alternates` metadata block for a page.
// Assumes middleware's `localePrefix: 'as-needed'` — default locale has no prefix, others do.
export function localizedAlternates(path: string): {
    canonical: string
    languages: Record<string, string>
} {
    const normalized = path && path !== '/' ? (path.startsWith('/') ? path : `/${path}`) : ''
    const localizedPath = (locale: string) =>
        locale === defaultLocale ? normalized || '/' : `/${locale}${normalized}`

    const languages: Record<string, string> = { 'x-default': absoluteUrl(localizedPath(defaultLocale)) }
    for (const locale of locales) {
        languages[locale] = absoluteUrl(localizedPath(locale))
    }
    return {
        canonical: absoluteUrl(localizedPath(defaultLocale)),
        languages,
    }
}

export function UtmUrl(
    url: string,
    {
        source = UtmSource,
        medium,
        content,
    }: {
        source?: string
        medium?: UtmMediums
        content?: string
    },
) {
    if (url.endsWith('?')) url = url.slice(0, -1)

    const params = new URLSearchParams({ utm_source: source })
    if (medium) params.append('utm_medium', medium)
    if (content) params.append('utm_content', content)

    return `${url}?${params.toString()}`
}
