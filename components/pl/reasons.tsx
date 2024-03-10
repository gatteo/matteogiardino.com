import React from 'react'

const ReasonList = [
    {
        name: 'La professione più richiesta',
        testimonial:
            "Il developer è una delle professioni più ricercate al mondo, e i numeri parlano chiaro: in Italia, su più di 100.000 ricerche l'anno, 30.000 posizioni da sviluppatore rimangono scoperte.",
    },
    {
        name: 'Guadagni bene, molto bene',
        testimonial:
            'Dato che la figure del programmatore sono tra più ricercate i guadagni sono alti e lo sono da subito. (Più di qualsiasi altra professione)',
    },
    {
        name: 'Lavori dove e come vuoi',
        testimonial:
            'Non serve lavorare in ufficio per essere creatori di prodotti digitali, e le aziende lo sanno. Puoi lavorare da casa, in riva al mare o in montagna.',
    },
    {
        name: 'Crea app, videogiochi o siti web',
        testimonial:
            'Con la programmazione avrai tutti gli strumenti per creare quello che ti passa per la testa: videogiochi, siti web, app o molto altro.',
    },
    {
        name: 'Puoi cambiare il mondo',
        testimonial:
            'Saper programmare è un immenso potere che ti permette di creare un prodotto per aiutare migliaia di persone.',
    },
    {
        name: 'E molto altro ancora',
        testimonial:
            'Tutto quello che ci circonda ormai per funzionare ha bisogno di software, e tu saprai creare codice per fare quello che vuoi.',
    },
]

const ReasonCard = ({ testimonial, index }: { testimonial: (typeof ReasonList)[0]; index: number }) => {
    return (
        <li className='text-sm leading-6'>
            <figure className='dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-neutral-50 p-6 dark:bg-neutral-900'>
                <blockquote className='mt-4 text-neutral-700 dark:text-neutral-400'>
                    <p>{testimonial.testimonial} </p>
                </blockquote>
                <figcaption className='flex items-center space-x-4'>
                    <div className='flex-none'>
                        <h3 className='flex size-10 items-center justify-center rounded-xl bg-neutral-800 pt-1 text-2xl font-extrabold text-yellow-400'>
                            {index + 1}
                        </h3>
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

export function Reasons() {
    return (
        <section id='reasons' className='pt-32' aria-label='6 motivi per imparare a programmare'>
            {/* Heading */}
            <div className='mx-auto mb-12 max-w-2xl md:mb-16 md:text-center'>
                <h2 className='font-display mb-4 text-3xl font-bold lg:text-5xl'>
                    Un motivo per imparare a programmare?{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'> Te ne do 6.</span>
                </h2>
                <p className=' text-neutral-400 lg:text-xl'>
                    6 semplici motivi di come la programmazione può cambiare la tua vita.
                </p>
            </div>

            <div className='flex flex-col sm:hidden'>
                <ul className='space-y-4'>
                    {ReasonList.map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-2 gap-4 sm:grid lg:hidden'>
                <ul className='space-y-4'>
                    {ReasonList.slice(0, 3).map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i * 2} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {ReasonList.slice(3, 6).map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i * 2 + 1} />
                    ))}
                </ul>
            </div>

            <div className='hidden grid-cols-3 gap-4 lg:grid'>
                <ul className='space-y-4'>
                    {ReasonList.slice(0, 2).map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i * 3} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {ReasonList.slice(2, 4).map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i * 3 + 1} />
                    ))}
                </ul>
                <ul className='space-y-4'>
                    {ReasonList.slice(4, 6).map((e, i) => (
                        <ReasonCard key={e.name} testimonial={e} index={i * 3 + 2} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
