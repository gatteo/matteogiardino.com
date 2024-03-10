import React from 'react'
import Image from 'next/image'

import { Rating } from '@/components/marketing/rating'

const TestimonialsList = [
    {
        name: 'Luca Guglielmi',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-3.webp',
        testimonial:
            '"Durante il percorso Matteo mi ha fatto partecipare come spettatore ad un colloquio reale ed è stato ILLUMINANTE. Veramente non so come ringraziarlo abbastanza di questa occasione incredibile.”',
    },
    {
        name: 'Giulia Merchi',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-7.webp',
        testimonial:
            '"Grazie Matteo, prima di conoscerti mi sentivo persa. Non avevo idea di cosa aspettarmi da un colloquio e questo mi metteva paura. Mi hai aiutato a superare i miei timori e ora lavoro come sviluppatrice per Alkemy!"',
    },
    {
        name: 'Federica Martini',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-6.webp',
        testimonial:
            '"Matteo mi ha compreso sin da subito. Durante le chiamate insieme abbiamo lavorato sulle mie insicurezze e strategia di gestione ansia e ora riesco ad affrontare a testa alta le interview!"',
    },
    {
        name: 'Paolo Difranco',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-4.webp',
        testimonial:
            '"Tech Career Launch mi ha fornito le competenze e la fiducia necessarie per affrontare i colloqui di lavoro nel settore tech."',
    },
    {
        name: 'Mario Lorenzo Tedesco',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-1.webp',
        testimonial:
            'Ho conosciuto Matteo su tiktok. All’inizio avevo qualche dubbio che potesse realmente aiutarmi, ma ora non ho dubbi. Mi ha fornito una preparazione inestimabile, soprattutto sui problemi logico algoritmici…',
    },
    {
        name: 'Miriam Esposito',
        title: '1a edizione TCL',
        avatar: '/images/tcl/avatar-5.webp',
        testimonial:
            '"Grazie al supporto di Matteo, ho imparato a creare un curriculum accattivante e a presentarmi in modo efficace durante i colloqui. Sono grata per questa opportunità e lo consiglio a tutti coloro che desiderano avviare una carriera nel mondo della programmazione"',
    },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof TestimonialsList)[0] }) => {
    return (
        <li className='text-sm leading-6'>
            <figure className='dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-slate-50 p-6 dark:bg-neutral-900'>
                <blockquote className='mt-6 text-slate-700 dark:text-gray-300'>
                    <p>{testimonial.testimonial} </p>
                </blockquote>
                <figcaption className='flex items-center space-x-4'>
                    <Image
                        src={testimonial.avatar}
                        alt=''
                        width={60}
                        height={60}
                        className='size-14 flex-none rounded-xl object-cover'
                        loading='lazy'
                        decoding='async'
                    />
                    <div className='flex-auto'>
                        <div className='text-base font-semibold text-slate-900 dark:text-white'>
                            <span className='absolute inset-0' />
                            {testimonial.name}
                        </div>
                        <div className='mt-0.5 dark:text-muted-foreground'>{testimonial.title}</div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export function Testimonials() {
    return (
        <section id='testimonials' className=''>
            <Rating className='mb-8 md:flex md:items-center' average={4.98} count={26} />

            {/* Heading */}
            <div className='mx-auto mb-12 md:mb-16 md:text-center'>
                <h2 className='font-display m-auto mb-4 max-w-4xl text-3xl font-bold lg:text-5xl'>
                    Non credere alla mia parola, ascolta quello che dicono{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>gli studenti</span>.
                </h2>
                <p className='m-auto max-w-2xl text-neutral-400 lg:text-xl'>
                    La scorsa edizione di Tech Career Launch ha avuto un successo clamoroso. Leggi cosa pensano alcuni
                    studenti.
                </p>
            </div>

            <div className='flex flex-col sm:hidden'>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(0, 3).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-2 gap-4 sm:grid lg:hidden'>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(0, 3).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(3, 6).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-3 gap-4 lg:grid'>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(0, 2).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(2, 4).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {TestimonialsList.slice(4, 6).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
            </div>

            <Rating className='mt-8 md:flex md:items-center' average={4.98} count={26} />
        </section>
    )
}
