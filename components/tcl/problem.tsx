import * as React from 'react'
import Image from 'next/image'

import CrossImage from '/public/images/tcl/cross.webp'

const problemBulletPoints = [
    'L’università non ti prepara ai colloqui',
    'Errori banali di inesperienza',
    'Preparazione su argomenti sbagliati',
    'Difficoltà a distinguersi',
    'Mancanza di una guida esperta',
    'Incapacità a negoziare lo stipendio',
    'Difficoltà ad esporre in modo efficace le proprie competenze',
]

export function Problem() {
    return (
        <section id='problem' className='border-b border-gray-700 pb-16 md:pt-8 lg:pb-24'>
            <div className='max-w-3xl'>
                <p className='mb-6 inline-block rounded-full border border-purple-500 bg-purple-700 bg-opacity-20 px-3 py-1 text-sm leading-7 text-purple-300'>
                    Il problema
                </p>
                <h2 className='text-3xl font-extrabold tracking-tight text-white lg:text-5xl'>
                    Nessuno ti prepara al mondo del lavoro. Figuriamoci ai{' '}
                    <span className='underline decoration-purple-400 underline-offset-4'>colloqui</span>.
                </h2>
            </div>

            <div className='mt-8 flex flex-col justify-between sm:flex-row'>
                <p className='font-light text-gray-400 sm:w-8/12 lg:text-xl'>
                    Il 96% dei neolaureati e degli aspiranti programmatori si trova completamente impreparato quando
                    deve affrontare i colloqui di lavoro. <br /> <br /> Sono confusi, incerti e disorientati. È
                    comprensibile dato che nessuno li ha mai istruiti su come comportarsi.
                    <br /> <br />A causa di questa mancanza di preparazione, commettono errori banali, rischiando di{' '}
                    <span className='underline decoration-purple-400 underline-offset-4'>
                        {' '}
                        perdere preziose opportunità di carriera.
                    </span>
                </p>
                <Image className='hidden opacity-20 sm:block sm:w-3/12' src={CrossImage} alt='Cross' />
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
                            <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                {bulletPoint}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
