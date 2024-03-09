import { site } from '@/config/site'

export function absoluteUrl(url: string) {
    if (url.startsWith('/')) url = url.slice(1)
    return `${site.url}/${url}`
}
