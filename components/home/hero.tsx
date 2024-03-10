'use client'

import Image from 'next/image'
import Link from 'next/link'
import WezardIcon from 'public/images/brands/wezard-icon.png'
import DevvIcon from 'public/images/projects/devv/icon.webp'
import WestudentsIcon from 'public/images/projects/westudents/icon.webp'

import { Button } from '../ui/button'

export function Hero() {
    return (
        <>
            <section id='hero' className=''>
                <Background />

                <div className='flex flex-col'>
                    <div className='mt-12 flex flex-col items-center'>
                        {/* Name */}
                        <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent dark:from-white dark:via-white/80 dark:to-white/60 md:text-7xl'>
                            Matteo Giardino
                        </h1>

                        {/* Occupation and description */}
                        <div className='my-6 space-y-2'>
                            <h2 className='flex flex-wrap items-center gap-x-4 text-sm font-medium leading-8 md:text-base'>
                                founder & cto @
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link href='https://westudents.it'>
                                        <Image
                                            src={WestudentsIcon}
                                            alt='Westudents logo'
                                            width={24}
                                            height={24}
                                            className='mr-2 inline-block rounded-sm'
                                        />
                                        westudents
                                    </Link>
                                </Button>
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link href='https://devv.it'>
                                        <Image
                                            src={DevvIcon}
                                            alt='Devv logo'
                                            width={24}
                                            height={24}
                                            className='mr-2 inline-block rounded-sm'
                                        />
                                        devv
                                    </Link>
                                </Button>
                                <div className='flex items-center'>
                                    <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                        <Link href='https://wezard.it'>
                                            <Image
                                                src={WezardIcon}
                                                alt='Wezard logo'
                                                width={24}
                                                height={24}
                                                className='mr-2 inline-block rounded-sm'
                                            />
                                            wezard{' '}
                                            <span className='mx-2 text-muted-foreground'>
                                                {''}·{''}
                                            </span>
                                            exit 🎉
                                        </Link>
                                    </Button>
                                    {/* <Badge variant='secondary' className='ml-2'>
                                        exit 🎉
                                    </Badge> */}
                                </div>
                            </h2>
                        </div>

                        {/* CTA */}
                        <Button variant={'ghost'} className='-ml-4' asChild>
                            <Link href='#about'>
                                <p className='mr-2'>ti racconto chi sono, in 30 secondi </p>
                                <p className='inline-block animate-bounce'> ↓ </p>
                            </Link>
                        </Button>
                    </div>

                    <div className='mt-12 flex flex-col gap-10 md:grid md:grid-cols-4 md:grid-rows-1'>
                        <div className='relative col-span-2'>
                            <Image
                                src='/images/home/wide-computer.webp'
                                alt=''
                                loading='lazy'
                                fill
                                className='col-span-2 rounded-lg object-cover drop-shadow-2xl'
                            />
                        </div>
                        <div className='relative aspect-square'>
                            <Image
                                src='/images/home/1.gif'
                                alt=''
                                loading='lazy'
                                unoptimized
                                fill
                                className='rounded-lg drop-shadow-2xl'
                            />
                        </div>
                        <div className='relative aspect-square'>
                            <Image
                                src='/images/home/4.webp'
                                alt=''
                                loading='lazy'
                                fill
                                className='rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                            />
                        </div>
                    </div>

                    <div className='mx-auto mt-12'>
                        <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                            <Link href='https://matteogiardino.com'>
                                wezard, la mia agenzia di sviluppo, è stata acquisita 🎉{' '}
                                <span className='ml-1 underline underline-offset-2'> leggi l'annuncio</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

function Background() {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className='absolute inset-0 -z-10 size-full bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]'></div>
    )
}
