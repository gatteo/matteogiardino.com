import { absoluteUrl } from '@/utils/urls'
import { allPages, allProjects } from 'contentlayer/generated'

import { PlRoutes, Routes, TcbRoutes, TclRoutes } from '@/config/routes'
import { getAllBlogPosts } from '@/lib/blog'

const sitemap = async () => {
    const blogPages = (await getAllBlogPosts()).map((post) => post.url)

    const cmsPages = allPages.map((page) => `/${page.slug}`)

    const projectPages = allProjects.map((project) => Routes.Project(project.slug))

    const routes = [
        Routes.Home,
        Routes.Blog,
        Routes.Contact,
        Routes.Projects,
        Routes.Services,
        Routes.LearningProducts,

        TcbRoutes.Home,
        TclRoutes.Home,
        PlRoutes.Home,

        ...blogPages,
        ...cmsPages,
        ...projectPages,
    ].map((route) => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return routes
}

export default sitemap
