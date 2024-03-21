import { UtmMediums } from '@/types/links'
import { site } from '@/config/site'

export const UtmSource = 'matteogiardino.com'

export function absoluteUrl(url: string) {
    if (url.startsWith('/')) url = url.slice(1)
    return `${site.url}/${url}`
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
