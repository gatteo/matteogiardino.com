'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/lib/navigation'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight } from '@tabler/icons-react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useTranslations } from 'next-intl'
import GoogleLogo from 'public/images/brands/google.svg'
import WezardLogo from 'public/images/brands/wezard-icon.png'
import DevvLogo from 'public/images/projects/devv/icon.webp'
import LinkedInPreviewLogo from 'public/images/projects/linkedinpreview/icon.webp'
import WestudentsLogo from 'public/images/projects/westudents/icon.webp'

import { UtmMediums } from '@/types/links'
import { LinkedInPreviewLinks } from '@/config/links'
import { Routes } from '@/config/routes'

import { Button } from '../ui/button'

gsap.registerPlugin(ScrollTrigger)

const DIM_OPACITY = 0.4

export function About() {
    const t = useTranslations('about')

    const quoteRef = useRef<HTMLDivElement | null>(null)
    const targetSection = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const quote = quoteRef.current
        const section = targetSection.current
        if (!quote || !section) return

        const lines = gsap.utils.toArray<HTMLElement>('[data-about-line]', quote)
        if (!lines.length) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(lines, { opacity: 1 })
            return
        }

        const ctx = gsap.context(() => {
            gsap.set(lines, { opacity: DIM_OPACITY })

            let activeIndex = -1
            const activate = (index: number) => {
                if (index === activeIndex) return
                if (activeIndex > -1) {
                    gsap.to(lines[activeIndex], { opacity: DIM_OPACITY, duration: 0.25, overwrite: 'auto' })
                }
                gsap.to(lines[index], { opacity: 1, duration: 0.25, overwrite: 'auto' })
                activeIndex = index
            }

            // Light whichever line sits closest to the middle of the viewport. Measuring
            // positions on scroll keeps the highlight on the line actually being read —
            // a fixed timeline drifts, because the lines wrap to very different heights.
            const syncHighlight = () => {
                const viewportCenter = window.innerHeight / 2
                let nearestIndex = 0
                let nearestDistance = Infinity

                lines.forEach((line, index) => {
                    const rect = line.getBoundingClientRect()
                    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter)
                    if (distance < nearestDistance) {
                        nearestDistance = distance
                        nearestIndex = index
                    }
                })

                activate(nearestIndex)
            }

            ScrollTrigger.create({
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: syncHighlight,
                onRefresh: syncHighlight,
            })

            // Sweep the accent gradient as its own line travels up into the middle.
            lines.forEach((line) => {
                const accent = line.querySelector('.text-highlight')
                if (!accent) return

                gsap.fromTo(
                    accent,
                    { backgroundPositionX: '0%' },
                    {
                        backgroundPositionX: '100%',
                        ease: Linear.easeNone,
                        scrollTrigger: { trigger: line, start: 'top 75%', end: 'center 45%', scrub: true },
                    },
                )
            })

            syncHighlight()
        }, quote)

        return () => ctx.revert()
    }, [])

    return (
        <section id='about' className='about my-32 w-full select-none scroll-m-10 md:pt-24'>
            <div ref={targetSection}>
                <div ref={quoteRef} className='space-y-24 text-2xl sm:text-4xl md:text-5xl'>
                    <h2 data-about-line className='leading-tight'>
                        {t('section1')}
                    </h2>

                    <h2 data-about-line className='leading-tight'>
                        {t('section2').split(t('section2Highlight'))[0]}
                        <span className='text-highlight font-bold'>{t('section2Highlight')}</span>
                        {t('section2').split(t('section2Highlight'))[1]}
                    </h2>

                    <h2 data-about-line className='leading-tight'>
                        {t('section3').split(t('section3Highlight'))[0]}
                        <span className='text-highlight font-bold'>{t('section3Highlight')}</span>
                        {t('section3').split(t('section3Highlight'))[1]}
                    </h2>

                    <h2 data-about-line className='leading-tight'>
                        {t('section4')}{' '}
                        <Image
                            className='inline-block h-12 md:h-16'
                            src={GoogleLogo}
                            alt='Google logo'
                            height={48}
                            width={150}
                        />
                    </h2>

                    <h2 data-about-line className='leading-tight'>
                        {t('section5')}{' '}
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
                            {t('section5Stats')}
                        </p>
                    </h2>

                    <h2 data-about-line className='leading-tight'>
                        {t('section6')}{' '}
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
                        {t('section6Description')}
                        <p className='ml-2 mt-6 text-base text-muted-foreground md:text-xl'>
                            {t('section6Stats')}
                        </p>
                    </h2>

                    <div>
                        <h2 data-about-line className='leading-tight'>
                            {t('section7')}{' '}
                            <strong className='inline-block'>
                                <Image
                                    src={WezardLogo}
                                    alt='Wezard logo'
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
                            </strong>
                            {t('section7Description')}
                        </h2>

                        <h2 data-about-line className='mt-24 leading-tight'>
                            {t('section8')}{' '}
                            <strong className='inline-block'>
                                <Image
                                    src={LinkedInPreviewLogo}
                                    alt='LinkedIn Preview logo'
                                    height={48}
                                    width={48}
                                    className='border-accent-3 -mt-1 mr-2 inline-block size-7 rounded border md:-mt-2 md:mr-3 md:size-12 md:rounded-xl'
                                />
                                <Link
                                    href={UtmUrl(LinkedInPreviewLinks.homepage, {
                                        source: 'matteogiardino.com',
                                        medium: UtmMediums.Homepage,
                                        content: 'about',
                                    })}
                                    className='bg-gradient-to-l from-sky-300 to-sky-500 bg-clip-text text-transparent decoration-sky-400 underline-offset-8 hover:underline'>
                                    linkedin preview
                                </Link>
                            </strong>
                            {t('section8Description')}
                            <p className='ml-2 mt-6 text-base text-muted-foreground md:text-xl'>
                                {t('section8Stats')}
                            </p>
                        </h2>

                        <Button variant={'ghost'} className='group -ml-4 mt-6 text-muted-foreground md:text-xl' asChild>
                            <Link
                                href={UtmUrl(Routes.Contact, {
                                    medium: UtmMediums.Homepage,
                                    content: 'about',
                                })}>
                                {t('ctaText')}{' '}
                                <strong className='mx-2 underline underline-offset-4'>{t('ctaLink')}</strong>
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
                            alt='Matteo Giardino working on projects'
                            loading='lazy'
                            unoptimized
                            fill
                            className='rounded-lg drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative col-span-2 hidden md:block'>
                        <Image
                            src='/images/home/13.webp'
                            alt='Matteo speaking at a tech conference'
                            loading='lazy'
                            fill
                            className='rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative aspect-square '>
                        <Image
                            src='/images/home/3.webp'
                            alt='Matteo Giardino portrait'
                            loading='lazy'
                            fill
                            className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative hidden aspect-square md:block'>
                        <Image
                            src='/images/home/2.webp'
                            alt='Matteo working on laptop'
                            loading='lazy'
                            fill
                            className='m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                        />
                    </div>

                    <div className='relative hidden aspect-square md:block'>
                        <Image
                            src='/images/home/6.webp'
                            alt='Matteo teaching programming'
                            loading='lazy'
                            fill
                            className='m-auto aspect-square rounded-lg object-cover drop-shadow-2xl'
                        />
                    </div>

                    <div className='relative aspect-square'>
                        <Image
                            src='/images/home/9.webp'
                            alt='Matteo with Devv community members'
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
