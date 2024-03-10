import * as React from 'react'
import Image from 'next/image'

import SectionImage from '/public/images/tcl/cosmico.webp'

export function About() {
    return (
        <section id='what-is' className='pt-32' aria-label="Che cos'è Tech Career Launch">
            {/* Heading */}
            <div className='mx-auto max-w-2xl md:text-center'>
                <h2 className='font-display mb-4 text-3xl font-bold tracking-tight lg:text-5xl'>
                    Ti aiuto a superare le sfide nell'avvio della tua carriera
                </h2>
                <p className='mb-8 text-gray-400 lg:text-xl'>
                    Tech Career Launch è un percorso di 4 settimane con Matteo Giardino, un mentore esperto che ti
                    fornirà consigli pratici, orientamento strategico e supporto personalizzato per superare i colloqui
                    di lavoro.
                </p>
            </div>

            {/* Features */}
            <div className='mt-12 md:mt-20'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3'>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-end gap-4 md:flex-col md:items-center'>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <path
                                    opacity='.5'
                                    d='M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z'
                                    fill='#fff'
                                />
                                <path
                                    d='M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z'
                                    fill='#fff'
                                />
                            </svg>
                            <h3 className='text-xl font-semibold  text-purple-400 md:text-center'>Mentoring 1-1</h3>
                        </div>
                        <p className='mt-4 text-gray-400 md:mt-2 md:text-center'>
                            Solo tu e Matteo, per ricevere supporto su misura in base alle tue esigenze.
                        </p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-end gap-4 md:flex-col md:items-center'>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <path
                                    opacity='.5'
                                    d='M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'
                                />
                                <path
                                    opacity='.3'
                                    d='M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'
                                />
                                <path
                                    d='M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'
                                />
                            </svg>
                            <h3 className='text-xl font-semibold  text-purple-400 md:text-center'>4 Settimane</h3>
                        </div>
                        <p className='mt-4 text-gray-400 md:mt-2 md:text-center'>
                            Un percorso intensivo, alla fine del quale sarai pronto a qualunque sfida.
                        </p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-end gap-4 md:flex-col md:items-center'>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <defs>
                                    <linearGradient
                                        id=':Rardm:'
                                        x1='11.5'
                                        y1='18'
                                        x2='36'
                                        y2='15.5'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop offset='.194' stopColor='#fff' />
                                        <stop offset='1' stopColor='#14213b' />
                                    </linearGradient>
                                </defs>
                                <path
                                    d='m30 15-4 5-4-11-4 18-4-11-4 7-4-5'
                                    stroke='url(#:Rardm:)'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <h3 className='text-xl font-semibold  text-purple-400 md:text-center'>
                                Preparazione e Pratica
                            </h3>
                        </div>

                        <p className='mt-4 text-gray-400 md:mt-2 md:text-center'>
                            Preparazione a 360° per affrontare al meglio i colloqui di lavoro.
                        </p>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className='relative isolate pb-32 lg:px-0'>
                {/* BG Grid */}
                <div className='absolute inset-0 -z-10 hidden md:block'>
                    <svg
                        className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-slate-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]'
                        aria-hidden='true'>
                        <defs>
                            <pattern
                                id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                                width={100}
                                height={100}
                                x='50%'
                                y={-1}
                                patternUnits='userSpaceOnUse'>
                                <path d='M100 200V.5M.5 .5H200' fill='none' />
                            </pattern>
                        </defs>

                        <rect
                            width='100%'
                            height='100%'
                            strokeWidth={0}
                            fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
                        />
                    </svg>
                </div>

                {/* Image */}
                <div className='pt-16'>
                    <Image
                        src={SectionImage}
                        alt='Il tuo mentore Matteo'
                        className='mx-auto w-full rounded-3xl shadow-xl md:max-w-2xl'
                    />
                </div>
            </div>
        </section>
    )
}
