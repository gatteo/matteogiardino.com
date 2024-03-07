export const ApiRoutes = {
    getSong: '/api/song',
}

export const Routes = {
    Home: '/',
    About: '/about',
    Blog: '/blog',
    LocalBlogPost: (slug: string) => `/blog/${slug}`,
    SubstackBlogPost: (slug: string) => `/posts/${slug}`,
}
