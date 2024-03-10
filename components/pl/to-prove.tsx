import React from 'react'
import { IconAlarm, IconAlpha, IconFileCertificate, IconStars } from '@tabler/icons-react'

const Features = [
    {
        icon: IconStars,
        title: 'Tutti possono imparare a programmare',
        body: 'Con la giusta motivazione e il giusto metodo di studio, chiunque può imparare a programmare.',
    },
    {
        icon: IconFileCertificate,
        title: 'Non serve una laurea',
        body: "L'informatica si evolve velocemente, le informazioni che insegnano all'uni sono arretrate e non ti preparano al lavoro moderno.",
    },
    {
        icon: IconAlarm,
        title: 'Puoi imparare a qualunque età',
        body: "Non c'è un età giusta o sbagliata. Che tu abbia 14 anni o 50, riuscirai ad imparare a programmare a qualunque età con il giusto metodo.",
    },
    {
        icon: IconAlpha,
        title: 'Non devi essere bravo di matematica',
        body: 'Per imparare a programmare le uniche nozioni di matematica che ti servono sono le operazioni aritmetiche ( +, -, *, / ) che hai imparato alle elementari. Nulla di più.',
    },
]

export function ToProve() {
    return (
        <section id='to-prove' className='mt-24'>
            {/* Heading */}
            <div className='mx-auto mb-12 max-w-2xl md:mb-16 md:text-center'>
                <h2 className='font-display mb-4 text-3xl font-bold lg:text-5xl'>
                    Ho creato questo corso per{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'> dimostrare a tutti</span>{' '}
                    che...
                </h2>
                {/* <p className=" text-neutral-400 lg:text-xl">
                    6 semplici motivi di come la programmazione può cambiare la tua vita.
                </p> */}
            </div>

            <div className='mt-16 grid divide-y divide-neutral-100 overflow-hidden rounded-3xl border border-neutral-100 text-neutral-600 dark:divide-neutral-800 dark:border-neutral-900 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0 '>
                {Features.map((feature) => (
                    <div
                        key={feature.title}
                        className='group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-neutral-600/10 dark:bg-neutral-900'>
                        <div className='relative space-y-8 p-6 py-8'>
                            <feature.icon
                                className='size-8 text-yellow-400'
                                size={48}
                                strokeWidth={2}
                                aria-hidden='true'
                            />

                            <div className='space-y-2'>
                                <h3 className='text-xl font-semibold text-neutral-700 transition group-hover:text-secondary dark:text-white'>
                                    {feature.title}
                                </h3>
                                <p className='text-sm text-neutral-700 dark:text-neutral-400'>{feature.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
