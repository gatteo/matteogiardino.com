import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionImage from 'public/images/tcl/includes.webp'

import { TclRoutes } from '@/config/routes'
import { Button } from '@/components/ui/button'

const included = [
    'Mentoring 1-1 con Matteo Giardino',
    '2 video call di 1 ora ciascuna',
    'Revisione e ottimizzazione del curriculum',
    'Simulazione di un challenge di programmazione',
    'Preparazione al colloquio conoscitivo',
    'Le 100 domande più frequenti ai colloqui tecnici',
    'Chat per supporto e confronto diretto',
    'Accesso ad una piattaforma di esercitazione per pratica',
    '16h di contenuti formativi esclusivi',
    "Le 5 regole d'oro per il colloquio da programmatore",
    'Consigli per la negoziazione dello stipendio',
    'BONUS: 4 migliori template di curriculum',
]

export function WhatsIncluded() {
    return (
        <section id='what-is-included' className='space-y-12 py-16 text-gray-400 sm:text-lg lg:py-24'>
            <div className='max-w-3xl'>
                <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                    Cosa include?
                </h2>
                <p className='font-light lg:text-xl'>
                    Con Tech Career Launch, avrai accesso a un pacchetto completo di servizi e strumenti che ti
                    supporteranno in ogni fase del tuo percorso di avvio della carriera nel settore tech.
                </p>
            </div>
            <div className='flex flex-col-reverse gap-8 lg:grid  lg:grid-cols-2 xl:gap-16'>
                <div className='space-y-12 text-gray-400'>
                    <ul className='space-y-5'>
                        {included.map((feature) => (
                            <li className={'flex space-x-3'} key={feature}>
                                <svg
                                    className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                                <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild>
                        <Link href={TclRoutes.Pricing}>Inizia ora</Link>
                    </Button>
                </div>
                <Image
                    className='mb-4 w-full rounded-lg lg:mb-0 lg:flex'
                    src={SectionImage}
                    alt='Cosa include Tech Career Launch'
                />
            </div>
        </section>
    )
}
