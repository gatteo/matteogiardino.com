import { allProjects, Project } from '@/.contentlayer/generated'

import { defaultLocale } from '@/i18n'

function pickVariant(variants: Project[], locale: string): Project {
    return (
        variants.find((v) => v.locale === locale) ??
        variants.find((v) => v.locale === defaultLocale) ??
        variants[0]
    )
}

function groupBySlug(projects: Project[]): Map<string, Project[]> {
    const map = new Map<string, Project[]>()
    for (const project of projects) {
        const list = map.get(project.slug) ?? []
        list.push(project)
        map.set(project.slug, list)
    }
    return map
}

export function getProjects(locale: string): Project[] {
    return Array.from(groupBySlug(allProjects).values()).map((variants) => pickVariant(variants, locale))
}

export function getProject(slug: string, locale: string): Project | undefined {
    const variants = allProjects.filter((p) => p.slug === slug)
    if (variants.length === 0) return undefined
    return pickVariant(variants, locale)
}
