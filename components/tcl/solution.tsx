import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { TclRoutes } from '@/config/routes'
import { Button } from '@/components/ui/button'

import SectionImage from '/public/images/tcl/solution.webp'

const solutionBulletPoints = [
    'Supera con successo il colloquio tecnico',
    'Scopri i segreti del mondo del lavoro',
    'Ottieni preziosi consigli e strategie',
    'Aumenta la tua competitività e distiguiti',
    'Impara a negoziare il tuo stipendio',
    'Accedi ad una rete di professionisti',
    'Crea un curriculum accattivante',
    'Lascia a bocca aperta i recruiter',
]

export function Solution() {
    return (
        <section id='solution' className='pt-16 text-gray-400 sm:text-lg lg:pb-8 lg:pt-24'>
            <div className='max-w-3xl'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                    Avvia la tua carriera da programmatore con{' '}
                    <span className='underline decoration-purple-400 underline-offset-4'>successo</span>.
                </h2>
                <p className='mt-4 font-light lg:text-xl'>
                    Attraverso a sessioni personalizzate e pratica, ti prepareremo a superare i colloqui di lavoro e a
                    raggiungere tuoi obiettivi professionali. Riceverai consigli pratici, strategie efficaci e supporto
                    personalizzato che ti daranno un vantaggio competitivo nel mondo del lavoro.
                </p>
            </div>

            <div className='mt-12 items-center gap-8 md:grid md:grid-cols-2 md:gap-8'>
                <div className='space-y-12 text-gray-400'>
                    <ul className='space-y-5'>
                        {solutionBulletPoints.map((feature) => (
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
                        <Link href={TclRoutes.Pricing}>Inizia il tuo percorso</Link>
                    </Button>
                </div>
                <Image
                    className='m-auto hidden w-[90%] md:flex lg:mb-0'
                    src={SectionImage}
                    alt='Solution features image'
                />
            </div>
        </section>
    )
}
