import React from 'react'
import Image from 'next/image'

import { Rating } from '@/components/marketing/rating'

const TestimonialsList = [
    {
        name: 'Maria Reale',
        title: 'Social Media Manager',
        avatar: '/images/pl/testimonial-avatars/1.webp',
        testimonial:
            '"Non avevo mai programmato prima e temevo di non capire niente... Ma grazie a Matteo e al corso Programmatore Leggendario ho imparato passo dopo passo e ora sono in grado di scrivere il mio codice JavaScript"',
    },
    {
        name: 'Elena Marina',
        title: 'Ora lavora per Notion',
        avatar: '/images/pl/testimonial-avatars/2.webp',
        testimonial:
            '"Grazie Matteo, prima di conoscerti avevo provato ad imparare da sola ma mi sentivo persa. Mi hai aiutato a superare i miei timori e dopo pochi mesi lavoro come sviluppatrice per Notion!"',
    },
    {
        name: 'Luca De Santis',
        title: 'Studente Politecnico di Milano',
        avatar: '/images/pl/testimonial-avatars/3.webp',
        testimonial:
            '"Sapevo già qualcosina di programmazione ma volevo migliorare le mie competenze in JavaScript. Il corso mi ha stupito con la sua struttura completa e gli esercizi interattivi. Ora ho una comprensione più profonda del linguaggio e posso affrontare progetti più sfidanti!!"',
    },
    {
        name: 'Chiara Lorenzi',
        title: 'Mamma e Geologa',
        avatar: '/images/pl/testimonial-avatars/4.webp',
        testimonial:
            '"Come madre lavoratrice, avevo poco tempo libero per imparare la programmazione. Questo corso è stato perfetto per me, poiché ho potuto seguire le lezioni quando avevo il tempo e lavorare sugli esercizi interattivi. Ora ho una nuova competenza che potrebbe persino migliorare le mie prospettive di carriera."',
    },
    {
        name: 'Mario Lorenzo Tedesco',
        title: 'Programmatore Freelance',
        avatar: '/images/pl/testimonial-avatars/5.webp',
        testimonial:
            '"Mi ha parlato di Matteo un amico. All’inizio avevo qualche dubbio che potesse realmente aiutarmi, ma ora non posso che consigliare questo corso a chiunque!. Spiegazioni chiarissime, anche per me che non avevo mai programmato prima. Grazie Matteo!"',
    },
    {
        name: 'Marco Santoro',
        title: 'Studente di Enologia a UniPisa',
        avatar: '/images/pl/testimonial-avatars/6.webp',
        testimonial:
            '"Ho provato altri corsi online, ma questo è il migliore in assoluto! Gli esercizi pratici mi hanno aiutato a mettere in pratica subito ciò che ho imparato. Ora ho creato piccole applicazioni e sono incredibilmente soddisfatto dei progressi che ho fatto grazie a Programmatore Leggendario."',
    },
]

const Testimonialslayout = [
    {
        type: 'image',
        index: 1,
    },
    {
        type: 'text',
        index: 1,
    },
    {
        type: 'image',
        index: 2,
    },
    {
        type: 'text',
        index: 2,
    },
    {
        type: 'text',
        index: 3,
    },
    {
        type: 'image',
        index: 3,
    },
    {
        type: 'text',
        index: 4,
    },
    {
        type: 'image',
        index: 4,
    },
    {
        type: 'image',
        index: 5,
    },
    {
        type: 'text',
        index: 5,
    },
    {
        type: 'image',
        index: 6,
    },
    {
        type: 'text',
        index: 6,
    },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof TestimonialsList)[0] }) => {
    return (
        <div className='basis-1/3 break-inside-avoid text-sm leading-6'>
            <figure className='dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900'>
                <blockquote className='mt-6 text-neutral-700 dark:text-neutral-300'>
                    <p>{testimonial.testimonial} </p>
                </blockquote>
                <figcaption className='flex flex-col gap-4 md:flex-row md:items-center'>
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
                        <div className='text-base font-semibold text-neutral-900 dark:text-white'>
                            <span className='absolute inset-0' />
                            {testimonial.name}
                        </div>
                        <div className='mt-0.5 leading-tight dark:text-muted-foreground'>{testimonial.title}</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export function Testimonials() {
    return (
        <section id='testimonials' className='pt-32'>
            <Rating className='mb-8 md:flex md:items-center' average={4.97} count={316} />

            {/* Heading */}
            <div className='mx-auto mb-12 md:mb-16 md:text-center'>
                <h2 className='font-display m-auto mb-4 max-w-4xl text-3xl font-bold lg:text-5xl'>
                    Non credere alla mia parola, ascolta quello che dicono{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>gli studenti</span>.
                </h2>
                <p className='m-auto max-w-2xl text-neutral-400 lg:text-xl'>
                    Le scorse edizioni di Programmatore Leggendario hanno avuto un successo clamoroso. Leggi cosa
                    pensano alcuni studenti.
                </p>
            </div>

            <div className='columns-2 break-inside-avoid gap-4 space-y-4 sm:columns-2 md:columns-3'>
                {Testimonialslayout.map((e) =>
                    e.type === 'image' ? (
                        <Image
                            src={'/images/pl/testimonial-chats/' + e.index + '.webp'}
                            alt=''
                            key={e.index}
                            width={300}
                            height={600}
                            className='w-full basis-1/3 rounded-xl object-cover'
                            loading='lazy'
                            decoding='async'
                        />
                    ) : (
                        <TestimonialCard key={e.index} testimonial={TestimonialsList[e.index - 1]} />
                    ),
                )}
            </div>
        </section>
    )
}
