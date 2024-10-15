'use client'

import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import Autoplay from 'embla-carousel-autoplay'
import WezardIcon from 'public/images/brands/wezard-icon.png'
import DevvIcon from 'public/images/projects/devv/icon.webp'
import WestudentsIcon from 'public/images/projects/westudents/icon.webp'

import { UtmMediums } from '@/types/links'
import { Devv30Links } from '@/config/links'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import GridGifImage from '/public/images/home/1.gif'
import GridIconThree from '/public/images/home/4.webp'
import GridWideImage from '/public/images/home/wide-computer.webp'

export function Hero() {
    const announcements = [
        {
            text: 'wezard, la mia agenzia di sviluppo, è stata acquisita 🎉',
            link: '/posts/ho-fatto-exit-ma-non-per-i-soldi-623',
            linkText: "leggi l'annuncio",
        },
        {
            text: "L'app devv 30 è disponibile! 🚀",
            link: Devv30Links.appStoreUrl,
            linkText: 'scopri di più',
        },
        {
            text: 'Diventa programmatore in 30 giorni!',
            link: Devv30Links.appStoreUrl,
            linkText: 'inizia ora',
        },
    ]

    return (
        <>
            <section id='hero'>
                <Background />

                <div className='flex flex-col'>
                    <div className='mt-12 flex flex-col items-center'>
                        {/* Name */}
                        <h1 className='bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-center text-4xl font-bold text-transparent dark:from-white dark:via-white/80 dark:to-white/60 md:text-7xl'>
                            Matteo Giardino
                        </h1>

                        {/* Occupation and description */}
                        <div className='my-6 space-y-2'>
                            <h2 className='flex flex-wrap items-center justify-center gap-4 text-sm font-medium leading-8 md:text-base'>
                                founder & cto @
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link
                                        href={UtmUrl('https://devv.it', {
                                            source: 'matteogiardino.com',
                                            medium: UtmMediums.Homepage,
                                            content: 'hero',
                                        })}>
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
                                <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                    <Link
                                        href={UtmUrl('https://westudents.it', {
                                            medium: UtmMediums.Homepage,
                                            content: 'hero',
                                        })}>
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
                                <div className='flex items-center'>
                                    <Button variant='secondary' size={'sm'} className='border bg-muted px-2' asChild>
                                        <Link
                                            href={UtmUrl('https://wezard.it', {
                                                medium: UtmMediums.Homepage,
                                                content: 'hero',
                                            })}>
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
                        <div className='relative col-span-2 aspect-video md:aspect-auto'>
                            <Image
                                src={GridWideImage}
                                alt=''
                                placeholder='blur'
                                className='rounded-lg object-cover drop-shadow-2xl'
                            />
                        </div>
                        <div className='relative hidden aspect-square md:block'>
                            <Image src={GridGifImage} alt='' unoptimized className='rounded-lg drop-shadow-2xl' />
                        </div>
                        <div className='relative hidden aspect-square md:block'>
                            <Image
                                src={GridIconThree}
                                alt=''
                                placeholder='blur'
                                className='rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                            />
                        </div>
                    </div>

                    {/* Carousel of Announcements */}
                    <div className='mx-auto mt-12 w-full max-w-xs md:max-w-lg'>
                        <Carousel
                            opts={{
                                align: 'start',
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 4000,
                                }),
                            ]}>
                            <CarouselContent className='items-center'>
                                {announcements.map((announcement) => (
                                    <CarouselItem key={announcement.link}>
                                        <Link
                                            href={UtmUrl(announcement.link, {
                                                medium: UtmMediums.Homepage,
                                                content: 'hero',
                                            })}>
                                            <div className='rounded-md border bg-muted p-4 text-sm transition-all duration-200 hover:scale-95 md:p-4'>
                                                <div className='flex items-center justify-between'>
                                                    <span className='text-balance'>{announcement.text}</span>
                                                    <span className='ml-2 shrink-0 underline underline-offset-2'>
                                                        {announcement.linkText}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
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
