export const products: Array<{
    id: string
    title: string
    url: string
    description: string
    image: string
    imageDark: string
    badge?: string
}> = [
    {
        id: 'programmatore-leggendario',
        title: 'programmatore leggendario',
        url: '/programmatore-leggendario',
        description: 'il miglior corso italiano per imparare a programmare, al costo di una cena.',
        image: '/images/products/pl-logo-black.png',
        imageDark: '/images/products/pl-logo.png',
    },
    {
        id: 'tech-career-launch',
        title: 'tech career launch',
        url: '/tech-career-launch',
        badge: 'New ✨',
        description: 'una mentorship 1-1 per prepararsi al colloquio e trovare il primo lavoro.',
        image: '/images/products/tcl-logo-black.png',
        imageDark: '/images/products/tcl-logo.png',
    },
    {
        id: 'tech-career-boost',
        title: 'tech career boost',
        url: '/tech-career-boost',
        badge: 'Coming soon',
        description: 'una mentorship 1-1 per programmatori che vogliono fare il salto di carriera.',
        image: '/images/products/tcb-logo-black.png',
        imageDark: '/images/products/tcb-logo.png',
    },
    {
        id: 'devv',
        title: 'devv',
        url: 'https://bit.ly/3KiQhBI',
        description: 'una piattaforma interattiva per imparare nozioni di programmazione facendo pratica.',
        image: '/images/projects/devv/logo-extended-black.png',
        imageDark: '/images/projects/devv/logo-extended-white.png',
    },
]
