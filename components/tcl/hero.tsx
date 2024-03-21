import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AmazonLogo from 'public/images/brands/amazon.svg'
import GoogleLogo from 'public/images/brands/google.svg'
import NetflixLogo from 'public/images/brands/netflix.svg'
import WestudentsLogo from 'public/images/brands/westudents-short.svg'
import WezardLogo from 'public/images/brands/wezard.svg'
import Logo from 'public/images/tcl/launch.webp'
import DecorativeImage from 'public/images/tcl/solution.webp'

import { TclRoutes } from '@/config/routes'

import { Button } from './button'

export function Hero() {
    return (
        <section id='hero' className='relative'>
            {/* Background blur */}
            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-16 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl'>
                <div className='h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-purple-700' />
                <div className='h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600' />
            </div>

            {/* Content */}
            <div className='relative pt-20 md:pt-0'>
                <div className='gap-12 md:flex md:items-center'>
                    <div className='text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2'>
                        <p className='inline-block rounded-md bg-accent bg-opacity-20 px-2 py-1 text-sm'>
                            🎉 Aperte le iscrizioni della 2a edizione!
                        </p>
                        <h1 className='mt-6 text-5xl font-black dark:text-white md:text-6xl xl:text-7xl'>
                            Tech Career
                            <Image src={Logo} alt='logo' className='inline-block h-full w-[80%] fill-current' />
                        </h1>
                        <div className=''>
                            <p className='mt-8 text-lg text-gray-100'>
                                Un percorso di mentoring 1-1 per studenti di informatica e aspiranti programmatori che
                                vogliono trovare il primo lavoro.
                            </p>
                            <div className='mt-12 flex justify-center gap-2 md:justify-start'>
                                <Button asChild>
                                    <Link href={TclRoutes.Pricing}>Inizia ora</Link>
                                </Button>
                                <Button asChild variant='secondary'>
                                    <Link href={TclRoutes.WhatIs}>Scopri di più</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='relative m-auto mt-16 w-4/5 md:m-0 md:-mr-72 md:w-2/5 lg:mr-0 lg:w-3/5'>
                        <Image className='h-full object-cover' src={DecorativeImage} alt='TCL screenshot' />
                    </div>
                </div>
            </div>

            {/* Brand Logos */}
            <div className='mt-16 text-center md:mt-20 lg:mt-12'>
                <span className='text-sm font-semibold tracking-wider text-gray-800 dark:text-white'>
                    I NOSTRI STUDENTI ORA LAVORANO DA
                </span>
                <div className='mt-6 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 md:mt-3 md:gap-12 lg:gap-16'>
                    <Image className='h-6 w-auto' src={WezardLogo} alt='Wezard logo' height='24' />
                    <Image className='h-6 w-auto' src={NetflixLogo} alt='Netflix logo' height='24' />
                    <Image className='h-20 w-auto' src={WestudentsLogo} alt='Westudents logo' height='80' />
                    <Image className='h-10 w-auto' src={GoogleLogo} alt='Google logo' height='40' />
                    <Image className='h-7 w-auto' src={AmazonLogo} alt='Amazon logo' height='28' />
                </div>
            </div>
        </section>
    )
}
