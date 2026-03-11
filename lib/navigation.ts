import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from '@/i18n'

export const { Link, redirect, usePathname, useRouter } = createNavigation({
    locales,
    defaultLocale,
})
