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
        image: '/images/products/pl-logo-black.webp',
        imageDark: '/images/products/pl-logo.webp',
    },
    {
        id: 'tech-career-launch',
        title: 'tech career launch',
        url: '/tcl',
        badge: 'New ✨',
        description: 'una mentorship 1-1 per prepararsi al colloquio e trovare il primo lavoro.',
        image: '/images/products/tcl-logo-black.webp',
        imageDark: '/images/products/tcl-logo.webp',
    },
    {
        id: 'tech-career-boost',
        title: 'tech career boost',
        url: '/tcb',
        badge: 'Coming soon',
        description: 'una mentorship 1-1 per programmatori che vogliono fare il salto di carriera.',
        image: '/images/products/tcb-logo-black.webp',
        imageDark: '/images/products/tcb-logo.webp',
    },
    {
        id: 'devv',
        title: 'devv',
        url: 'https://bit.ly/3KiQhBI',
        description: 'una piattaforma interattiva per imparare nozioni di programmazione facendo pratica.',
        image: '/images/projects/devv/logo-extended-black.webp',
        imageDark: '/images/projects/devv/logo-extended-white.webp',
    },
]

export enum ProductSKU {
    PL = 'programmatore-leggendario',
    TCL = 'tech-career-launch',
    TCB = 'tech-career-boost',
}

export const ProductPrices = {
    [ProductSKU.PL]: '59.00',
    [ProductSKU.TCL]: '249.00',
    [ProductSKU.TCB]: '449.00',
}
