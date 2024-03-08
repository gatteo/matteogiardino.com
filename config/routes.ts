export const ApiRoutes = {
    getSong: '/api/song',
}

export const Routes = {
    Home: '/',
    About: '/about',
    Blog: '/blog',
    Contact: '/contact',
    Projects: '/projects',
    Services: '/services',
    Project: (slug: string) => `/projects/${slug}`,
    LocalBlogPost: (slug: string) => `/blog/${slug}`,
    SubstackBlogPost: (slug: string) => `/posts/${slug}`,
}
