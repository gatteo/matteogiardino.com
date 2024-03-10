import React from 'react'
import {
    Icon3dCubeSphere,
    IconArrowRampLeft,
    IconBox,
    IconChartPie,
    IconDatabase,
    IconList,
    IconMathFunction,
    IconRotateClockwise2,
} from '@tabler/icons-react'

const Notions = [
    {
        name: "Cos'è una variabile",
        testimonial: 'Il primo concetto chiave della programmazione',
        icon: IconBox,
    },
    {
        name: 'I Tipi di Dato',
        testimonial: 'Tutto quello che devi sapere per gestire stringhe, numeri e altro',
        icon: IconDatabase,
    },
    {
        name: 'Creare delle Condizioni',
        testimonial: 'Padroneggerai il costrutto if, switch e gli operatori logici',
        icon: IconArrowRampLeft,
    },
    {
        name: 'Creare dei Cicli',
        testimonial: 'Il costrutto for, while e do while per ripetere le istruzioni',
        icon: IconRotateClockwise2,
    },
    {
        name: 'Gestire delle Liste',
        testimonial: "Il tipo Array, cos'è e come usarlo al meglio",
        icon: IconList,
    },
    {
        name: "Cos'è un Oggetto",
        testimonial: 'Il tipo Oggetto, cosa sono i metodi e le proprietà',
        icon: Icon3dCubeSphere,
    },
    {
        name: 'Capire lo Scope',
        testimonial: 'Lo scope locale e globale, lo scope chain e il block scoping',
        icon: IconChartPie,
    },
    {
        name: "Cos'è una funzione",
        testimonial: 'Creare funzioni che ritornano valori e come usarle',
        icon: IconMathFunction,
    },
]

const NotionCard = ({ testimonial }: { testimonial: (typeof Notions)[0]; index: number }) => {
    return (
        <li className='text-sm leading-6'>
            <figure className='dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900'>
                <blockquote className='mt-4 text-neutral-700 dark:text-neutral-400'>
                    <p>{testimonial.testimonial} </p>
                </blockquote>
                <figcaption className='flex items-center space-x-4'>
                    <div className='flex-none'>
                        <div className='flex size-10 items-center justify-center rounded-xl bg-neutral-800'>
                            <testimonial.icon
                                className='size-7 text-yellow-400'
                                size={48}
                                strokeWidth={2}
                                aria-hidden='true'
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-xl font-semibold leading-tight text-neutral-900 dark:text-neutral-50'>
                            <span className='absolute inset-0'></span>
                            {testimonial.name}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export function TechKnowledge() {
    return (
        <section id='tech-knowledge' className='pt-32'>
            {/* Heading */}
            <div className='mx-auto mb-12 max-w-2xl md:mb-16 md:text-center'>
                <h2 className='font-display mb-4 text-3xl font-bold lg:text-5xl'>
                    Le nozioni di programmazione di cui{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>sarai esperto</span>.
                </h2>
                <p className=' text-neutral-400 lg:text-xl'>
                    Ecco alcune delle fondamenta della programmazione che tratteremo
                </p>
            </div>

            <div className='flex flex-col sm:hidden'>
                <ul className='space-y-4'>
                    {Notions.map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-2 gap-4 sm:grid lg:hidden'>
                <ul className='space-y-4'>
                    {Notions.slice(0, 4).map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i * 2} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {Notions.slice(4, 8).map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i * 2 + 1} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-3 gap-4 lg:grid'>
                <ul className='space-y-4'>
                    {Notions.slice(0, 3).map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i * 3} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {Notions.slice(3, 6).map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i * 3 + 1} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {Notions.slice(6, 8).map((e, i) => (
                        <NotionCard key={e.name} testimonial={e} index={i * 3 + 2} />
                    ))}
                </ul>
            </div>

            <div className='mt-8 flex items-center'>
                <div className='mx-auto flex items-center'>
                    <p className='ml-2 mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400'>
                        E molti altri argomenti
                    </p>
                </div>
            </div>
        </section>
    )
}
