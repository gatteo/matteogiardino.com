import * as React from 'react'
import Image from 'next/image'
import SectionImageMobile from 'public/images/pl/includes-mobile.webp'
import SectionImage from 'public/images/pl/includes.webp'

import { PlRoutes } from '@/config/routes'

import { CtaButton } from './cta-button'

const included = [
    '40+ videolezioni pratiche sulle fondamenta della programmazione e JavaScript',
    '5+ videolezioni per capire come migliorare la tua vita con la programmazione',
    '5+ videolezioni per orientarti al lavoro da Developer',
    '1 software interattivo con 30+ missioni per imparare divertendoti',
    '(BONUS) 35+ programmi scritti da te (e corretti da me)',
    '1 progetto finale - costruisci un app per una pizzeria',
    '1 certificato di completamento corso',
    'Accesso alla Community Privata di aspiranti programmatori',
]

export function WhatsIncluded() {
    return (
        <section id='what-is-included' className='space-y-12 pt-16 text-neutral-400 sm:text-lg lg:pt-24'>
            <div className='max-w-3xl'>
                <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-5xl'>
                    Cosa include?
                </h2>
                <p className='font-light lg:text-xl'>
                    Con Programmatore Leggendario non impari solo a programmare, ottieni tutto ciò di cui hai bisogno
                    per diventare un programmatore esperto.
                </p>
            </div>
            <div className='flex flex-col gap-8 md:grid md:grid-cols-2 xl:gap-16'>
                <div className='space-y-12 text-neutral-400'>
                    <ul className='space-y-5'>
                        {included.map((feature) => (
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
                    <CtaButton href={PlRoutes.Pricing} text='Voglio iniziare ora!' />
                </div>
                <Image
                    className='m-auto mb-4 hidden max-h-[500px] rounded-lg object-contain md:flex lg:mb-0 lg:flex'
                    src={SectionImage}
                    alt='Cosa include Tech Career Launch'
                />
                <Image
                    src={SectionImageMobile}
                    className='m-auto mb-4 rounded-lg md:hidden'
                    alt='Cosa include Tech Career Launch'
                />
            </div>
        </section>
    )
}
