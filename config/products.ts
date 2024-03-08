export const products: Array<{
    title: string
    href: string
    description: string
    image: string
    imageDark: string
    badge?: string
}> = [
    {
        title: 'programmatore leggendario',
        href: '/programmatore-leggendario',
        description: 'il miglior corso italiano per imparare a programmare. al costo di una cena.',
        image: '/images/products/pl-logo-black.png',
        imageDark: '/images/products/pl-logo.png',
    },
    {
        title: 'tech career launch',
        href: '/tech-career-launch',
        badge: 'New ✨',
        description: 'una mentorship 1-1 per prepararsi al colloquio e trovare il primo lavoro.',
        image: '/images/products/tcl-logo-black.png',
        imageDark: '/images/products/tcl-logo.png',
    },
    {
        title: 'tech career boost',
        href: '/tech-career-boost',
        badge: 'Coming soon',
        description: 'una mentorship 1-1 per programmatori che vogliono fare il salto di carriera.',
        image: '/images/products/tcb-logo-black.png',
        imageDark: '/images/products/tcb-logo.png',
    },
    {
        title: 'devv',
        href: 'https://bit.ly/3KiQhBI',
        description: 'una piattaforma interattiva per imparare nozioni di programmazione facendo pratica.',
        image: '/images/projects/devv/logo-extended-black.png',
        imageDark: '/images/projects/devv/logo-extended-white.png',
    },
]
