'use client'

import React, { MutableRefObject, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight } from '@tabler/icons-react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import GoogleLogo from 'public/images/brands/google.svg'
import WezardLogo from 'public/images/brands/wezard-icon.png'
import DevvLogo from 'public/images/projects/devv/icon.webp'
import WestudentsLogo from 'public/images/projects/westudents/icon.webp'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'

import { Button } from '../ui/button'

export function About() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })

    const quoteRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const targetSection: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

    const initAboutAnimation = (
        quoteRef: MutableRefObject<HTMLDivElement>,
        targetSection: MutableRefObject<HTMLDivElement>,
    ): ScrollTrigger => {
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone, duration: 0.3 },
        })

        timeline
            .fromTo(quoteRef.current.querySelector('.about-1'), { opacity: 0.4 }, { opacity: 1 })
            .fromTo(quoteRef.current.querySelector('.t1'), { opacity: 0.4, delay: 2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-1'), {
                opacity: 0.4,
                delay: 0.5,
            })

            .fromTo(quoteRef.current.querySelector('.about-2'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.t2'), {
                backgroundPositionX: '100%',
                duration: 1,
            })
            .to(quoteRef.current.querySelector('.about-2'), {
                opacity: 0.4,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-3'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.t3'), {
                backgroundPositionX: '100%',
                duration: 1,
            })
            .to(quoteRef.current.querySelector('.about-3'), {
                opacity: 0.4,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-4'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-4'), {
                opacity: 0.4,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-5'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-5'), {
                opacity: 0.4,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-6'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-6'), {
                opacity: 0.4,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-7'), { opacity: 0.4 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-7'), {
                opacity: 0.4,
                delay: 1,
            })

        const scrollTriggerInstance = ScrollTrigger.create({
            trigger: targetSection.current,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 0,
            animation: timeline,
        })

        return scrollTriggerInstance
    }

    useEffect(() => {
        if (quoteRef && targetSection) {
            // @ts-ignore
            const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection)
            return aboutScrollTriggerInstance.kill
        }
    }, [quoteRef, targetSection])

    return (
        <section id='about' className='about my-32 w-full select-none scroll-m-10 md:pt-24'>
            <div ref={targetSection}>
                <div ref={quoteRef} className='space-y-24 text-2xl sm:text-4xl md:text-5xl'>
                    <h2 className='about-1 leading-tight'>
                        👶 sono nato a{' '}
                        <strong className='underline decoration-yellow-400 underline-offset-8'>Torino</strong>, nel 1998
                    </h2>

                    <h2 className='about-2 leading-tight'>
                        fin da piccolo, ho sempre cercato{' '}
                        <span className='t2 text-highlight font-bold'>modi originali</span> per esprimere la mia
                        creatività
                    </h2>

                    <h2 className='about-3 leading-tight'>
                        a 16 anni, ho scoperto la 💻{' '}
                        <span className='text-highlight t3 font-bold'> programmazione </span>
                    </h2>

                    <h2 className='about-4 leading-tight'>
                        a 18 anni, ho {''}
                        <strong className='underline decoration-red-400 underline-offset-8'>abbandonato</strong>
                        {''} gli studi e {''}
                        <strong className='underline decoration-red-400 underline-offset-8'>rifiutato</strong>
                        {''} un lavoro da {''}
                        <Image
                            className='inline-block h-12 md:h-16'
                            src={GoogleLogo}
                            alt='Google logo'
                            height={48}
                            width={150}
                        />
                    </h2>

                    <h2 className='about-5 leading-tight'>
                        deluso dal sistema scolastico, ho creato la mia prima azienda:{' '}
                        <strong className='inline-block'>
                            <Image
                                src={WestudentsLogo}
                                alt='Westudents logo'
                                height={48}
                                width={48}
                                className='-mt-1 mr-2 inline-block size-7 rounded md:-mt-2 md:mr-3 md:size-12 md:rounded-xl'
                            />
                            <Link
                                href={UtmUrl('https://westudents.it', {
                                    medium: UtmMediums.Homepage,
                                    content: 'about',
                                })}
                                className='bg-gradient-to-l from-red-400 to-orange-400 bg-clip-text text-transparent decoration-orange-400 underline-offset-8 hover:underline'>
                                westudents
                            </Link>{' '}
                        </strong>
                        <p className='ml-2 mt-6 text-base text-muted-foreground md:text-xl'>
                            🎉 ad oggi l'app di westudents ha aiutato quasi{' '}
                            <strong className='underline underline-offset-4 '>500.000</strong> studenti 🎉
                        </p>
                    </h2>

                    <h2 className='about-6 leading-tight'>
                        nel 2022 ho fondato{' '}
                        <strong className='inline-block'>
                            <Image
                                src={DevvLogo}
                                alt='Devv logo'
                                height={48}
                                width={48}
                                className='border-accent-3 -mt-1 mr-2 inline-block size-7 rounded border md:-mt-2 md:mr-3 md:size-12 md:rounded-xl'
                            />
                            <Link
                                href={UtmUrl('https://devv.it', {
                                    medium: UtmMediums.Homepage,
                                    content: 'about',
                                })}
                                className='bg-gradient-to-l from-purple-300 to-purple-500 bg-clip-text text-transparent decoration-purple-400 underline-offset-8 hover:underline'>
                                devv
                            </Link>
                        </strong>
                        , con l'obiettivo di rivoluzionare il modo in cui si impara a{' '}
                        <strong className='underline decoration-purple-400 underline-offset-8'>programmare</strong>
                        <p className='ml-2 mt-6 text-base text-muted-foreground md:text-xl'>
                            🎉 più di <strong className='underline underline-offset-4 '>130.000</strong> persone mi
                            seguono per imparare a programmare 🎉
                        </p>
                    </h2>

                    <div>
                        <h2 className={'about-7 leading-tight'}>
                            a gennaio 2024 ho venduto{' '}
                            <strong className='inline-block'>
                                <Image
                                    src={WezardLogo}
                                    alt='Devv logo'
                                    height={48}
                                    width={48}
                                    className='border-accent-3 -mt-1 mr-2 inline-block size-7 rounded border md:-mt-2 md:mr-3 md:size-12 md:rounded-xl'
                                />
                                <Link
                                    href={UtmUrl('https://wezard.it', {
                                        medium: UtmMediums.Homepage,
                                        content: 'about',
                                    })}
                                    className='bg-gradient-to-l from-lime-200 to-lime-300 bg-clip-text text-transparent decoration-lime-400 underline-offset-8 hover:underline'>
                                    wezard
                                </Link>
                                ,
                            </strong>{' '}
                            un agenzia di sviluppo che crea{' '}
                            <strong className='underline decoration-lime-300 underline-offset-8'>
                                prodotti digitali eccezionali
                            </strong>
                        </h2>

                        <Button variant={'ghost'} className='group -ml-4 mt-6 text-muted-foreground md:text-xl' asChild>
                            <Link
                                href={UtmUrl(Routes.Contact, {
                                    medium: UtmMediums.Homepage,
                                    content: 'about',
                                })}>
                                💡 vuoi realizzare un progetto con me?
                                <strong className='mx-2 underline underline-offset-4'>scrivimi</strong>
                                <IconArrowRight className='inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='relative isolate mt-32'>
                <Background />

                <div className='flex flex-col gap-10 md:grid md:grid-cols-3 md:grid-rows-1'>
                    <div className='relative aspect-square md:hidden'>
                        <Image
                            src='/images/home/1.gif'
                            alt=''
                            loading='lazy'
                            unoptimized
                            fill
                            className='rounded-lg drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative col-span-2 hidden md:block'>
                        <Image
                            src='/images/home/13.webp'
                            alt=''
                            loading='lazy'
                            fill
                            className='rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative aspect-square '>
                        <Image
                            src='/images/home/3.webp'
                            alt=''
                            loading='lazy'
                            fill
                            className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative hidden aspect-square md:block'>
                        <Image
                            src='/images/home/2.webp'
                            alt=''
                            loading='lazy'
                            fill
                            className='m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                        />
                    </div>

                    <div className='relative hidden aspect-square md:block'>
                        <Image
                            src='/images/home/6.webp'
                            alt=''
                            loading='lazy'
                            fill
                            className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative aspect-square'>
                        <Image
                            src='/images/home/9.webp'
                            alt=''
                            loading='lazy'
                            fill
                            className='m-auto -rotate-3 rounded-lg object-cover drop-shadow-2xl md:rotate-0'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function Background() {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className='absolute inset-0 -z-10 -m-40 max-w-[100vw] bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]'></div>
    )
}
