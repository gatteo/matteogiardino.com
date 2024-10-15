import { Devv30Links, DevvMaxLinks } from './links'

export const products: Array<{
    id: string
    title: string
    url: string
    description: string
    pictogram: string
    pictogramDark: string
    logo: string
    logoDark: string
    badge?: string
}> = [
    {
        id: 'devv-max',
        title: 'devv max',
        url: DevvMaxLinks.homepage,
        description: 'una piattaforma interattiva per imparare nozioni di programmazione facendo pratica.',
        pictogram: '/images/projects/devv-max/icon.webp',
        pictogramDark: '/images/projects/devv-max/icon.webp',
        logo: '/images/projects/devv-max/logo-extended.png',
        logoDark: '/images/projects/devv-max/logo-extended.png',
    },
    {
        id: 'devv-30',
        title: 'devv 30',
        badge: 'Novità ✨',
        url: Devv30Links.homepage,
        description: 'sfide di 30 giorni per imparare a programmare. direttamente dal tuo telefono.',
        pictogram: '/images/projects/devv-30/icon.webp',
        pictogramDark: '/images/projects/devv-30/icon.webp',
        logo: '/images/projects/devv-30/logo-extended.png',
        logoDark: '/images/projects/devv-30/logo-extended.png',
    },
    {
        id: 'programmatore-leggendario',
        title: 'programmatore leggendario',
        url: '/programmatore-leggendario',
        description: 'il miglior videocorso italiano per imparare a programmare, al costo di una cena.',
        pictogram: '/images/products/pl-logo-black.webp',
        pictogramDark: '/images/products/pl-logo.webp',
        logo: '/images/products/pl-logo-black.webp',
        logoDark: '/images/products/pl-logo.webp',
    },
    {
        id: 'tech-career-launch',
        title: 'tech career launch',
        url: '/tcl',
        description: 'una mentorship 1-1 per prepararsi al colloquio e trovare il primo lavoro.',
        pictogram: '/images/products/tcl-logo-black.webp',
        pictogramDark: '/images/products/tcl-logo.webp',
        logo: '/images/products/tcl-logo-black.webp',
        logoDark: '/images/products/tcl-logo.webp',
    },
    // {
    //     id: 'tech-career-boost',
    //     title: 'tech career boost',
    //     url: '/tcb',
    //     badge: 'Coming soon',
    //     description: 'una mentorship 1-1 per programmatori che vogliono fare il salto di carriera.',
    //     image: '/images/products/tcb-logo-black.webp',
    //     imageDark: '/images/products/tcb-logo.webp',
    // },
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
