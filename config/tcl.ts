import { type HeaderLinks as HeaderLinksT } from '@/types/links'

import { TclRoutes } from './routes'

export const HeaderLinks: HeaderLinksT = [
    {
        text: "Cos'è?",
        href: TclRoutes.WhatIs,
        icon: 'tclWhatIsSection',
    },
    {
        text: 'Il tuo Mentore',
        href: TclRoutes.Mentor,
        icon: 'tclMentorSection',
    },
    {
        text: 'Fa per te?',
        href: TclRoutes.IsForYou,
        icon: 'tclIsForYouSection',
    },
    {
        text: 'Cosa include?',
        href: TclRoutes.WhatIsIncluded,
        icon: 'tclWhatIsIncludedSection',
    },
]
