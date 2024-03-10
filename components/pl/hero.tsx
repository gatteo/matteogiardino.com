import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/images/pl/leggendario.webp'

import { PlRoutes } from '@/config/routes'
import { Button } from '@/components/ui/button'

import { CtaButton } from './cta-button'

export function Hero() {
    return (
        <section id='hero' className='relative isolate' aria-label='Il migliore corso di programmazione adatto a tutti'>
            {/* Background Blur */}
            <div
                aria-hidden='true'
                className='absolute inset-0 top-16 m-auto grid h-max grid-cols-2 -space-x-52 opacity-40'>
                <div className='h-60 bg-gradient-to-br from-primary to-amber-400 blur-3xl dark:from-amber-700' />
                <div className='h-72 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 blur-3xl dark:from-transparent dark:to-yellow-600' />
            </div>

            {/* Background Grid */}
            <div aria-hidden='true' className='absolute inset-0 -z-10 opacity-70 md:opacity-100'>
                <svg className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-neutral-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]'>
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

            {/* Content */}
            <div className='relative pt-8 md:pt-0'>
                <div className='gap-12'>
                    <div className='text-center sm:px-12'>
                        <p className='inline-block rounded-md bg-accent bg-opacity-20 px-2 py-1 text-sm'>
                            🎉 Riaprono le iscrizioni!
                        </p>
                        <h1 className='mt-6 text-5xl font-black dark:text-white md:text-6xl xl:text-6xl'>
                            Programmatore
                            <Image src={Logo} alt='logo' className='inline-block h-full w-[60%] fill-current' />
                        </h1>
                        <div className=''>
                            <p className='m-auto mt-8 text-lg text-gray-100 sm:max-w-[80%]'>
                                Il migliore corso di programmazione adatto a tutti i livelli, al costo di una cena.
                            </p>
                            <div className='mt-12 flex justify-center gap-2'>
                                <CtaButton href={PlRoutes.Pricing} text='Inizia ora' />
                                <Button asChild variant='secondary'>
                                    <Link href={PlRoutes.WhatIs}>Scopri di più</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='relative m-auto mt-16'>
                        <video
                            autoPlay
                            loop
                            muted
                            className='m-auto md:max-h-[400px] md:overflow-visible md:object-cover md:object-left'>
                            <source src='/images/pl/course-preview.mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}
