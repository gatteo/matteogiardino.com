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

export const PlRoutes = {
    Home: '/programmatore-leggendario',
    WhatIs: '/programmatore-leggendario#what-is',
    IsForYou: '/programmatore-leggendario#is-for-you',
    WhatIsIncluded: '/programmatore-leggendario#what-is-included',
    Testimonials: '/programmatore-leggendario#testimonials',
    Pricing: '/programmatore-leggendario#pricing',
}
