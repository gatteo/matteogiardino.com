import * as React from 'react'
import Image from 'next/image'

import { PlRoutes } from '@/config/routes'

import { CtaButton } from './cta-button'
import Section2Image from '/public/images/pl/creare-app-siti.webp'
import Section1Image from '/public/images/pl/ti-trasformo.webp'

const solutionOneBulletPoints = [
    'Scriverai un programma reale nei primi 3 minuti del corso',
    'Imparerai a programmare, anche se parti da zero',
    'Conoscerai il linguaggio più richiesto nel mondo del lavoro',
    'Otterrai solide competenze di programmazione',
    'Imparerai a fondo JavaScript',
    'Segui il corso dove e quando vuoi',
    'Scoprirai la regola d’oro delle 5 G',
]

const solutionTwoBulletPoints = [
    'Saprai finalmente pensare come un programmatore',
    'Sarai tra le figure più richieste e ben pagate nel mondo del lavoro',
    'Ti svelerò come pensa realmente un programmatore professionista',
    'Avrai le nozioni che servono per creare un’app, un sito web o videogame',
    'Creerai applicazioni creative e funzionali con JavaScript',
]

export function Solution() {
    return (
        <section id='solution' className='space-y-16 pt-16 text-neutral-400 sm:text-lg md:space-y-32 lg:pb-8 lg:pt-24'>
            <div>
                <div className='max-w-3xl'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-5xl'>
                        Ti trasformo in un Programmatore{' '}
                        <span className='underline decoration-yellow-400 underline-offset-4'>Leggendario</span>.
                    </h2>
                    <p className='mt-4 font-light lg:text-xl'>
                        Ho creato questo corso per consentire a chiunque di imparare a programmare e sviluppare la
                        mentalità del programmatore di successo.
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8'>
                    <div className='space-y-12 text-neutral-400'>
                        <ul className='space-y-5'>
                            {solutionOneBulletPoints.map((feature) => (
                                <li className={'flex space-x-3'} key={feature}>
                                    <svg
                                        className='size-5 shrink-0 text-yellow-500 dark:text-yellow-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-neutral-900 dark:text-white'>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <CtaButton href={PlRoutes.Pricing} text='Impara a programmare' />
                    </div>
                    <Image
                        className='m-auto flex max-h-[350px] object-contain lg:mb-0'
                        src={Section1Image}
                        alt='JavaScript e solide basi della programmazione'
                    />
                </div>
            </div>
            <div>
                <div className='max-w-3xl'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-5xl'>
                        Saprai come{' '}
                        <span className='underline decoration-yellow-400 underline-offset-4'>creare un’app</span>, un
                        sito web o videogame.
                    </h2>
                    <p className='mt-4 font-light lg:text-xl'>
                        Ti insegniamo tutte le nozioni chiave della programmazione che ti servono per realizzare
                        qualunque tuo progetto o idea.
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8'>
                    <div className='space-y-12 text-neutral-400'>
                        <ul className='space-y-5'>
                            {solutionTwoBulletPoints.map((feature) => (
                                <li className={'flex space-x-3'} key={feature}>
                                    <svg
                                        className='size-5 shrink-0 text-yellow-500 dark:text-yellow-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-neutral-900 dark:text-white'>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <CtaButton href={PlRoutes.Pricing} text='Cosa aspetti? Inizia subito' />
                    </div>
                    <Image
                        className='m-auto flex max-h-[350px] object-contain lg:mb-0'
                        src={Section2Image}
                        alt='Svilupo app e mentalità del programmatore'
                    />
                </div>
            </div>
        </section>
    )
}
