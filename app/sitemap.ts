import { absoluteUrl } from '@/utils/urls'
import { allPages, allProjects } from 'contentlayer/generated'

import { PlRoutes, Routes, TcbRoutes, TclRoutes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'

const sitemap = async () => {
    const blogPosts = await getAllBlogPosts()

    // Homepage - highest priority, changes frequently
    const homepage = {
        url: absoluteUrl(Routes.Home),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }

    // Main pages - high priority
    const mainPages = [
        { route: Routes.Blog, changeFrequency: 'daily' as const, priority: 0.9 },
        { route: Routes.Projects, changeFrequency: 'monthly' as const, priority: 0.8 },
        { route: Routes.Services, changeFrequency: 'monthly' as const, priority: 0.8 },
        { route: Routes.Contact, changeFrequency: 'yearly' as const, priority: 0.7 },
        { route: Routes.LearningProducts, changeFrequency: 'monthly' as const, priority: 0.9 },
    ].map(({ route, changeFrequency, priority }) => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency,
        priority,
    }))

    // Marketing/Landing pages - high priority for conversions
    const marketingPages = [
        { route: TcbRoutes.Home, changeFrequency: 'weekly' as const, priority: 0.9 },
        { route: TclRoutes.Home, changeFrequency: 'weekly' as const, priority: 0.9 },
        { route: PlRoutes.Home, changeFrequency: 'weekly' as const, priority: 0.9 },
    ].map(({ route, changeFrequency, priority }) => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency,
        priority,
    }))

    // Blog posts - medium-high priority, rarely change after publication
    const blogPages = blogPosts.map((post) => ({
        url: absoluteUrl(post.url),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // CMS pages - medium priority
    const cmsPages = allPages.map((page) => ({
        url: absoluteUrl(`/${page.slug}`),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    // Project pages - medium priority
    const projectPages = allProjects.map((project) => ({
        url: absoluteUrl(Routes.Project(project.slug)),
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'yearly' as const,
        priority: 0.6,
    }))

    return [homepage, ...mainPages, ...marketingPages, ...blogPages, ...cmsPages, ...projectPages]
}

export default sitemap
