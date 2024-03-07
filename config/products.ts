export const Products: Array<{
    title: string
    href: string
    description: string
    image: string
    imageDark: string
    badge?: string
}> = [
    {
        title: 'Programmatore Leggendario',
        href: '/programmatore-leggendario',
        description: 'Il migliore corso di programmazione adatto a tutti i livelli, al costo di una cena.',
        image: '/static/images/products/pl-logo-black.png',
        imageDark: '/static/images/products/pl-logo.png',
    },
    {
        title: 'Tech Career Launch',
        href: '/tech-career-launch',
        badge: 'New ✨',
        description: 'Una mentorship 1-1 per prepararsi al colloquio e trovare il primo lavoro.',
        image: '/static/images/products/tcl-logo-black.png',
        imageDark: '/static/images/products/tcl-logo.png',
    },
    {
        title: 'Tech Career Boost',
        href: '/tech-career-boost',
        badge: 'Coming soon',
        description: 'Una mentorship 1-1 per programmatori che vogliono fare il salto di Seniority.',
        image: '/static/images/products/tcb-logo-black.png',
        imageDark: '/static/images/products/tcb-logo.png',
    },
    {
        title: 'Devv',
        href: 'https://bit.ly/3KiQhBI',
        description: 'Una Piattaforma interattiva per imparare nozioni di programmazione facendo pratica.',
        image: '/static/images/projects/devv/logo-extended-black.png',
        imageDark: '/static/images/projects/devv/logo-extended-white.png',
    },
]
