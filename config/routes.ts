export const ApiRoutes = {
    getSong: '/api/song',
}

export const Routes = {
    Home: '/',
    About: '/about',
    Blog: '/blog',
    Contact: '/contacts',
    Projects: '/projects',
    Services: '/services',
    LearningProducts: '/learn',
    Project: (slug: string) => `/projects/${slug}`,
    LocalBlogPost: (slug: string) => `/blog/${slug}`,
    SubstackBlogPost: (slug: string) => `/posts/${slug}`,
}
