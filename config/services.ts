import { Icons } from '@/components/icon'

type Service = {
    id: string
    title: string
    short_desctiption: string
    description: string
    icon: keyof typeof Icons
    url: string
    min_price: string
}

export const services: Service[] = [
    {
        id: 'development',
        title: 'sviluppo app e web',
        short_desctiption: 'trasformo la tue idea in un prodotto digitale eccezionale.',
        description:
            "trasformo la tua idea in un prodotto digitale eccezionale. Dal concept all'implementazione, lavoriamo insieme per creare un prodotto impeccabile e funzionale.",
        icon: 'developmentService',
        url: '/services#development',
        min_price: '€ 10.000',
    },
    {
        id: 'product-and-growth-advisory',
        title: 'product & growth advisory',
        short_desctiption: 'porto il tuo prodotto a milioni di utenti.',
        description:
            "attraverso analisi approfondite, strategie di crescita e miglioramenti del prodotto, ti guiderò nel massimizzare l'adozione, l'engagement e il valore del tuo prodotto sul mercato",
        icon: 'productGrowthAdvisoryService',
        url: '/services#product-and-growth-advisory',
        min_price: '€ 750 al mese',
    },
    {
        id: 'fractional-cto',
        title: 'fractional cto',
        short_desctiption: 'gestisco le sfide tecniche del tuo prodotto.',
        description:
            'collaborerò a stretto contatto con te e con il tuo team per definire la visione tecnologica, pianificare lo sviluppo del prodotto e gestire le sfide tecniche.',
        icon: 'ctoService',
        url: '/services#fractional-cto',
        min_price: '€ 750 al mese',
    },
]
