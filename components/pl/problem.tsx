import * as React from 'react'
import Image from 'next/image'

import CrossImage from '/public/images/pl/cross.webp'

const problemBulletPoints = [
    'Paura sia troppo difficile',
    'Non è chiaro da dove iniziare',
    'A scuola insegnano argomenti datati',
    'Mancanza di guida e supporto',
    'Mancanza di una guida esperta',
    'Nessuno insegna la mentalità del programmatore di successo',
    'Paura di non essere all’altezza',
]

export function Problem() {
    return (
        <section id='problem' className='border-b border-neutral-700 pb-16 pt-32 lg:pb-24'>
            <div className='max-w-3xl'>
                <p className='mb-6 inline-block rounded-full border border-yellow-500 bg-yellow-700 bg-opacity-20 px-3 py-1 text-sm leading-7 text-yellow-300'>
                    Il problema
                </p>
                <h2 className='text-3xl font-extrabold text-white lg:text-5xl lg:leading-tight'>
                    Ci hanno sempre detto che la programmazione è difficile.{' '}
                    <span className='inline-block leading-10 underline decoration-yellow-400 underline-offset-4'>
                        Ca***te
                    </span>
                    .
                </h2>
            </div>

            <div className='mt-8 flex flex-col justify-between sm:flex-row'>
                <p className='font-light text-neutral-400 sm:w-8/12 lg:text-lg'>
                    Se cerchi su Google come imparare a programmare, finisci con avere più domande che risposte. È
                    normale essere disorientati, ci siamo passati tutti.
                    <br /> <br />
                    A scuola, in università e online ci fanno credere che la programmazione sia per pochi eletti, con
                    elevate capacità logiche e matematiche.
                    <br /> <br />
                    La verità è che tutti possono imparare a programmare, basta avere il metodo giusto e una guida che
                    ti mostri{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>
                        il percorso corretto da seguire.
                    </span>
                </p>
                <Image className='hidden opacity-40 sm:block sm:w-3/12' src={CrossImage} alt='Cross' />
            </div>

            <ul className='mt-12 space-y-4'>
                {problemBulletPoints.map((bulletPoint) => (
                    <li className='mr-5 flex flex-col sm:inline-block' key={bulletPoint}>
                        <div className='flex space-x-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='-mt-0.5 size-5 shrink-0 text-red-500 dark:text-red-400'>
                                <circle cx='12' cy='12' r='10' />
                                <line x1='15' y1='9' x2='9' y2='15' />
                                <line x1='9' y1='9' x2='15' y2='15' />
                            </svg>
                            <span className='text-base font-medium leading-tight text-neutral-900 dark:text-white'>
                                {bulletPoint}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
