'use client'
import { IconArrowRight } from '@tabler/icons-react'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { MutableRefObject, useEffect, useRef } from 'react'

const AboutSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })

    const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null)
    const targetSection: MutableRefObject<HTMLDivElement> = useRef(null)

    const initAboutAnimation = (
        quoteRef: MutableRefObject<HTMLDivElement>,
        targetSection: MutableRefObject<HTMLDivElement>,
    ): ScrollTrigger => {
        const timeline = gsap.timeline({
            defaults: { ease: Linear.easeNone, duration: 0.1 },
        })

        timeline
            .fromTo(quoteRef.current.querySelector('.about-1'), { opacity: 0.2 }, { opacity: 1 })
            .fromTo(quoteRef.current.querySelector('.t1'), { opacity: 0.2, delay: 2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-1'), {
                opacity: 0.2,
                delay: 0.5,
            })

            .fromTo(quoteRef.current.querySelector('.about-2'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.t2'), {
                backgroundPositionX: '100%',
                duration: 1,
            })
            .to(quoteRef.current.querySelector('.about-2'), {
                opacity: 0.2,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-3'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.t3'), {
                backgroundPositionX: '100%',
                duration: 1,
            })
            .to(quoteRef.current.querySelector('.about-3'), {
                opacity: 0.2,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-4'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-4'), {
                opacity: 0.2,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-5'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-5'), {
                opacity: 0.2,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-6'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-6'), {
                opacity: 0.2,
                delay: 1,
            })

            .fromTo(quoteRef.current.querySelector('.about-7'), { opacity: 0.2 }, { opacity: 1 })
            .to(quoteRef.current.querySelector('.about-7'), {
                opacity: 0.2,
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
        const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection)

        return aboutScrollTriggerInstance.kill
    }, [quoteRef, targetSection])

    const renderQuotes = (): React.ReactNode => (
        <div ref={quoteRef} className="space-y-24 text-2xl font-medium sm:text-4xl md:text-5xl">
            <h2 className={'about-1 leading-tight'}>
                👶 Sono nato a <strong className="underline decoration-yellow-400 underline-offset-4">Torino</strong>,
                nel 1998{' '}
            </h2>
            <h2 className={'about-2 leading-tight'}>
                Fin da piccolo, ho sempre cercato <span className="text-strong t2 font-bold">modi nuovi</span> e
                originali per fare le cose
            </h2>
            <h2 className={'about-3 leading-tight'}>
                💻 A 16 anni, ho scoperto la <span className="text-strong t3 font-bold">programmazione</span> come modo
                per trovare soluzioni ai miei problemi e bisogni
            </h2>
            <h2 className={'about-4 leading-tight'}>
                A 19 anni, ho{' '}
                <strong className="relative">
                    abbandonato
                    <span className="t1 absolute bottom-0 left-0 h-1 w-full bg-red-400"></span>
                </strong>{' '}
                gli studi e{' '}
                <span className="relative">
                    rifiutato
                    <span className="t1 absolute bottom-0 left-0 h-1 w-full bg-red-400"></span>
                </span>{' '}
                un lavoro da{' '}
                <img className="inline-block h-12 md:h-16" src="/static/images/google-logo.png" alt="Google logo" />
            </h2>
            {/* underline decoration-red-300 decoration-dashed underline-offset-8 */}
            <div className="about-5 leading-tight">
                <h2>
                    Deluso dal sistema scolastico, ho creato la mia prima azienda:{' '}
                    <strong className="inline-block ">
                        <Image
                            src="/static/images/projects/westudents/icon.png"
                            alt="Westudents logo"
                            height={48}
                            width={48}
                            className="-mt-1 mr-2 inline-block h-7 w-7 rounded md:-mt-2 md:mr-3 md:h-12 md:w-12 md:rounded-xl"
                        />
                        <span className="bg-gradient-to-l from-red-400 to-orange-400 bg-clip-text text-transparent">
                            Westudents
                        </span>{' '}
                    </strong>
                </h2>
                <p className="ml-2 mt-6 text-base text-accent-5 md:text-xl">
                    🎉 Ad oggi l'app di Westudents ha aiutato quasi{' '}
                    <strong className="underline underline-offset-4 ">500.000</strong> studenti 🎉
                </p>
            </div>
            <h2 className={'about-6 leading-tight'}>
                Nel 2022 ho fondato{' '}
                <strong className="inline-block ">
                    <Image
                        src="/static/images/projects/devv/icon.png"
                        alt="Devv logo"
                        height={48}
                        width={48}
                        className="-mt-1 mr-2 inline-block h-7 w-7 rounded border border-accent-3 md:-mt-2 md:mr-3 md:h-12 md:w-12 md:rounded-xl"
                    />
                    <span className="bg-gradient-to-l from-lime-200 to-lime-400 bg-clip-text text-transparent">
                        Devv
                    </span>{' '}
                </strong>
                , con l'obiettivo di rivoluzionare il modo in cui si impara a{' '}
                <strong className="underline decoration-lime-300 underline-offset-4">programmare</strong>
                <p className="ml-2 mt-6 text-base text-accent-5 md:text-xl">
                    🎉 Più di <strong className="underline underline-offset-4 ">130.000</strong> persone mi seguono per
                    imparare a programmare 🎉
                </p>
            </h2>
            <h2 className={'about-7 leading-tight'}>
                Negli ultimi 5 anni, ho dedicato la mia vita a creare{' '}
                <strong className="underline decoration-sky-400 underline-offset-4">
                    prodotti digitali eccezionali
                </strong>
                , per me e per i miei clienti.
            </h2>
        </div>
    )

    return (
        <section className={'section-container relative my-16 w-full select-none md:pt-40'}>
            <div className="" ref={targetSection}>
                {renderQuotes()}
            </div>

            <div className="mt-24 flex">
                <Link
                    href="/projects"
                    className="group flex items-center gap-4 rounded-full bg-accent-1 p-4 px-5 text-lg font-medium transition-colors duration-200 hover:bg-accent-2">
                    <span className="text-xl">
                        Vuoi realizzare un progetto con me?{' '}
                        <strong className="underline decoration-sky-400 underline-offset-4">Scrivimi</strong>
                    </span>
                    <IconArrowRight className="inline-block h-5 w-5 transition duration-200 group-hover:translate-x-2" />
                </Link>
            </div>
        </section>
    )
}

export default AboutSection
