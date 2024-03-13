export const ApiRoutes = {
    GetSong: '/api/spotify',
    CreatePayPalOrder: '/api/paypal/orders',
    CapturePayPalOrder: (orderId: string) => `/api/paypal/orders/${orderId}/capture`,
}

export const PlRoutes = {
    Home: '/programmatore-leggendario',
    WhatIs: '/programmatore-leggendario#what-is',
    IsForYou: '/programmatore-leggendario#is-for-you',
    WhatIsIncluded: '/programmatore-leggendario#what-is-included',
    Testimonials: '/programmatore-leggendario#testimonials',
    Pricing: '/programmatore-leggendario#pricing',
}

export const TclRoutes = {
    Home: '/tcl',
    WhatIs: '/tcl#what-is',
    Mentor: '/tcl#mentor',
    IsForYou: '/tcl#is-for-you',
    WhatIsIncluded: '/tcl#what-is-included',
    Testimonials: '/tcl#testimonials',
    Pricing: '/tcl#pricing',
}

export const TcbRoutes = {
    Home: '/tcb',
}

export const Routes = {
    Home: '',
    Blog: '/blog',
    Contact: '/contacts',
    Projects: '/projects',
    Services: '/services',
    LearningProducts: '/learn',
    Project: (slug: string) => `/projects/${slug}`,
    LocalBlogPost: (slug: string) => `/blog/${slug}`,
    SubstackBlogPost: (slug: string) => `/posts/${slug}`,
    tcl: TclRoutes,
    tcb: TcbRoutes,
    pl: PlRoutes,
}
