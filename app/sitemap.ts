import { absoluteUrl, localizedAlternates } from '@/utils/urls'
import { allBlogPosts, allPages, allProjects } from '@/.contentlayer/generated'

import { defaultLocale, locales, type Locale } from '@/i18n'
import { PlRoutes, Routes, TcbRoutes, TclRoutes } from '@/config/routes'
import { getSubstackPosts } from '@/lib/substack'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

type Entry = {
    url: string
    lastModified: string
    changeFrequency: ChangeFrequency
    priority: number
    alternates?: { languages: Record<string, string> }
}

const today = () => new Date().toISOString().split('T')[0]

// Emit one entry per locale for a single canonical path, each carrying the full
// hreflang alternates map so Google can pair them.
const localizedPair = (
    path: string,
    opts: { changeFrequency: ChangeFrequency; priority: number; lastModified?: string },
): Entry[] => {
    const { languages } = localizedAlternates(path)
    return locales.map((locale) => ({
        url: languages[locale],
        lastModified: opts.lastModified ?? today(),
        changeFrequency: opts.changeFrequency,
        priority: opts.priority,
        alternates: { languages },
    }))
}

// Build the public URL for a locale + path pair, respecting the `as-needed`
// localePrefix (default locale = no prefix).
const urlForLocale = (locale: Locale, path: string) =>
    locale === defaultLocale ? absoluteUrl(path) : absoluteUrl(`/${locale}${path}`)

const sitemap = async () => {
    // Core pages - paired across both locales with hreflang
    const homePages = localizedPair('/', { changeFrequency: 'weekly', priority: 1.0 })

    const mainPages = (
        [
            { route: Routes.Blog, changeFrequency: 'daily', priority: 0.9 },
            { route: Routes.Projects, changeFrequency: 'monthly', priority: 0.8 },
            { route: Routes.Services, changeFrequency: 'monthly', priority: 0.8 },
            { route: Routes.Contact, changeFrequency: 'yearly', priority: 0.7 },
            { route: Routes.LearningProducts, changeFrequency: 'monthly', priority: 0.9 },
        ] as const
    ).flatMap(({ route, changeFrequency, priority }) =>
        localizedPair(route, { changeFrequency, priority }),
    )

    // Marketing landings - IT-only by content (Italian product names); kept single-locale
    const marketingPages = (
        [
            { route: TcbRoutes.Home, changeFrequency: 'weekly', priority: 0.9 },
            { route: TclRoutes.Home, changeFrequency: 'weekly', priority: 0.9 },
            { route: PlRoutes.Home, changeFrequency: 'weekly', priority: 0.9 },
        ] as const
    ).map(({ route, changeFrequency, priority }) => ({
        url: absoluteUrl(route),
        lastModified: today(),
        changeFrequency,
        priority,
    }))

    // Local blog posts: each post is one document per locale. Emit the URL for
    // its actual locale, plus a hreflang alternate to the translation when one
    // exists (via `translationSlug`).
    const blogPages: Entry[] = allBlogPosts.map((post) => {
        const ownLocale = (post.locale ?? defaultLocale) as Locale
        const otherLocale: Locale = ownLocale === 'it' ? 'en' : 'it'
        const ownUrl = urlForLocale(ownLocale, `/blog/${post.slug}`)

        const languages: Record<string, string> = { [ownLocale]: ownUrl }
        if (post.translationSlug) {
            languages[otherLocale] = urlForLocale(otherLocale, `/blog/${post.translationSlug}`)
        }
        languages['x-default'] = languages[defaultLocale] ?? ownUrl

        return {
            url: ownUrl,
            lastModified: today(),
            changeFrequency: 'monthly',
            priority: 0.7,
            alternates: { languages },
        }
    })

    // Substack posts: external content, no locale variants
    const substackPosts = await getSubstackPosts()
    const substackPages: Entry[] = substackPosts.map((post) => ({
        url: absoluteUrl(`/posts/${post.slug}`),
        lastModified: today(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    // CMS pages - single locale (the contentlayer Page schema has no locale field)
    const cmsPages: Entry[] = allPages.map((page) => ({
        url: absoluteUrl(`/${page.slug}`),
        lastModified: today(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    // Projects: each project may exist in multiple locale documents (e.g.
    // westudents.mdx + westudents.en.mdx). Emit one entry per existing
    // locale-variant, with the full alternates map shared across the group.
    const projectsBySlug = new Map<string, typeof allProjects>()
    for (const project of allProjects) {
        const arr = projectsBySlug.get(project.slug) ?? []
        arr.push(project)
        projectsBySlug.set(project.slug, arr)
    }

    const projectPages: Entry[] = []
    for (const [slug, variants] of projectsBySlug) {
        const path = Routes.Project(slug)
        const languages: Record<string, string> = {}
        for (const v of variants) {
            const loc = (v.locale ?? defaultLocale) as Locale
            languages[loc] = urlForLocale(loc, path)
        }
        languages['x-default'] = languages[defaultLocale] ?? Object.values(languages)[0]

        for (const v of variants) {
            const loc = (v.locale ?? defaultLocale) as Locale
            projectPages.push({
                url: languages[loc],
                lastModified: today(),
                changeFrequency: 'yearly',
                priority: 0.6,
                alternates: { languages },
            })
        }
    }

    return [...homePages, ...mainPages, ...marketingPages, ...blogPages, ...substackPages, ...cmsPages, ...projectPages]
}

export default sitemap
