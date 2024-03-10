import { type HeaderLinks as HeaderLinksT } from '@/types/links'

import { PlRoutes } from './routes'

export const HeaderLinks: HeaderLinksT = [
    {
        text: "Cos'è?",
        href: PlRoutes.WhatIs,
        icon: 'plWhatIsSection',
    },
    {
        text: 'Fa per te?',
        href: PlRoutes.IsForYou,
        icon: 'plIsForYouSection',
    },
    {
        text: 'Cosa include?',
        href: PlRoutes.WhatIsIncluded,
        icon: 'plWhatIsIncludedSection',
    },
    {
        text: 'Testimonianze',
        href: PlRoutes.Testimonials,
        icon: 'plTestimonialsSection',
    },
]
