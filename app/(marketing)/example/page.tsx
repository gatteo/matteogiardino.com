import type { Metadata } from 'next'
import { allProjects } from 'contentlayer/generated'

import { site } from '@/config/site'
import Image from '@/components/ui/image'
import TestimonialsSection from '@/components/testimonials'

import AboutSection from './about'
import Features from './features'
import HeroSection from './hero'

type ProjectPageProps = {
    params: {
        slug: string
    }
}

const allServices = ['prova']

export const generateStaticParams = () => {
    return allServices.map((project) => ({
        slug: project,
    }))
}

export const generateMetadata = (props: ProjectPageProps): Metadata => {
    const { params } = props

    const project = allProjects.find((project) => project.slug === params.slug)

    if (!project) {
        return {}
    }

    return {
        title: project.name,
        description: project.description,
        alternates: {
            canonical: `${site.url}/projects/${params.slug}`,
        },
        openGraph: {
            url: `${site.url}/projects/${params.slug}`,
            type: 'website',
            title: project.name,
            siteName: site.name,
            description: project.description,
            locale: 'it-IT',
            images: [
                {
                    url: `${site.url}${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: project.description,
                    type: 'image/png',
                },
            ],
        },
    }
}

const solutionBulletPoints = [
    'Supera il colloquio tecnico',
    'Scopri i segreti del mondo del lavoro',
    'Ottieni preziosi consigli e strategie',
    'Aumenta la tua competitività e distiguiti',
    'Impara a negoziare il tuo stipendio',
    'Accedi ad una rete di professionisti',
]

const ProjectPage = (props: ProjectPageProps) => {
    const { slug } = props.params

    const project = allProjects.find((project) => project.slug === slug)

    // if (!project) {
    //     notFound()
    // }

    // const { name, image } = project

    return (
        <>
            <HeroSection />

            <AboutSection />

            <section className='border-b border-gray-700 py-48'>
                <div className='max-w-2xl lg:mx-auto lg:text-center'>
                    <h2 className='text-base font-semibold leading-7 text-sky-400'>Il problema</h2>
                    <p className='tracking-tigh mt-2 text-3xl font-bold sm:text-4xl'>
                        Il primo passo è importante.{' '}
                        <strong className='underline decoration-sky-400 underline-offset-4'>potenziale</strong> con la{' '}
                        <strong className='underline decoration-sky-400 underline-offset-4'>tecnologia</strong>
                    </p>
                    <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>
                        Molti neolaureati e aspiranti programmatori spesso faticano a trovare lavoro senza un supporto
                        personalizzato e una guida esperta, rischiando di accettare offerte svantaggiose a causa della
                        mancanza di esperienza.
                    </p>
                </div>
            </section>

            {/* Problem */}
            <section className='mt-32 border-b border-gray-700 pb-16'>
                <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
                    <div className='max-w-3xl'>
                        <h2 className='mb-8 inline-block rounded-full border border-purple-500 bg-purple-700 bg-opacity-20 px-3 py-1 text-sm leading-7 text-purple-300'>
                            Il problema
                        </h2>
                        <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                            Nessuno ti prepara al mondo del lavoro. Figuriamoci ai{' '}
                            <span className='underline decoration-purple-400 decoration-wavy underline-offset-4'>
                                colloqui
                            </span>
                            .
                        </h2>
                        <p className='mb-4 font-light lg:text-xl'>
                            Molti neolaureati e aspiranti programmatori spesso faticano a trovare lavoro senza un
                            supporto personalizzato e una guida esperta, rischiando di accettare offerte svantaggiose a
                            causa della mancanza di esperienza.
                        </p>
                    </div>

                    <ul className='mb-8 space-y-5'>
                        <div className='mr-5 inline-block'>
                            <li className='flex space-x-2'>
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
                                    Non c'è una direzione chiara
                                </span>
                            </li>
                        </div>
                        <div className='mr-5 inline-block'>
                            <li className='flex space-x-2'>
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
                                    Poca esperienza
                                </span>
                            </li>
                        </div>
                        <div className='mr-5 inline-block'>
                            <li className='flex space-x-2'>
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
                                    Errori di valutazione
                                </span>
                            </li>
                        </div>
                    </ul>
                </div>

                {/* <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img
                        className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
                        src="https://astrolus-premium.netlify.app/images/hero-dark.webp"
                        alt="feature 2"
                    />
                    <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            We invest in the world’s potential
                        </h2>
                        <p className="mb-8 font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM
                            solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                            ease.
                        </p>

                        <ul role="list" className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Dynamic reports and dashboards
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Templates for everyone
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Development workflow
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Limitless business automation
                                </span>
                            </li>
                            <li className="flex space-x-3">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-purple-500 dark:text-purple-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                                    Knowledge management
                                </span>
                            </li>
                        </ul>
                        <p className="font-light lg:text-xl">
                            Deliver great service experiences fast - without the complexity of traditional ITSM
                            solutions.
                        </p>
                    </div>
                </div> */}
            </section>

            {/* Solution */}
            <section className=''>
                <div className='space-y-12 py-8 text-gray-400 sm:text-lg lg:pt-24'>
                    <div className='max-w-3xl'>
                        {/* <h2 className="mb-8 inline-block rounded-full border border-purple-500 bg-purple-700 bg-opacity-20 px-3 py-1 text-sm leading-7 text-purple-300">
                            ⦿ La soluzione
                        </h2> */}
                        {/* <h2 className="mb-4 font-semibold leading-7 text-purple-400">La soluzione</h2> */}
                        <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                            Avvia la tua carriera da programmatore con un{' '}
                            <span className='underline decoration-purple-400 underline-offset-4'>Mentor esperto</span>
                        </h2>
                        <p className='font-light lg:text-xl'>
                            Tech Career Launch offre un percorso di mentorship 1-1 con Matteo Giardino, che fornisce
                            supporto personalizzato e orientamento esperto per guidarti nel tuo percorso di avvio della
                            carriera
                        </p>
                    </div>
                    <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
                        <div className='space-y-12 text-gray-400'>
                            <ul className='space-y-5'>
                                {solutionBulletPoints.map((feature) => (
                                    <li className={'flex space-x-3'} key={feature}>
                                        <svg
                                            className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                fillRule='evenodd'
                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                        <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className=''>
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions.
                            </p>
                        </div>
                        <img
                            className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
                            src='https://astrolus-premium.netlify.app/images/hero-dark.webp'
                            alt='dashboard feature image'
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className='relative isolate py-16 lg:px-0'>
                <div className='absolute inset-0 -z-10'>
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
                <div className='py-16'>
                    <div className='relative isolate overflow-hidden rounded-3xl bg-neutral-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
                        {/* BG */}
                        <svg
                            viewBox='0 0 1024 1024'
                            className='absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
                            aria-hidden='true'>
                            <circle
                                cx={512}
                                cy={512}
                                r={512}
                                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                                fillOpacity='0.7'
                            />
                            <defs>
                                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                                    <stop stopColor='#E935C1' />
                                    <stop offset={1} stopColor='#E935C1' />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className='m-auto py-16 text-center'>
                            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                                Trasformo la tua visione in realtà.
                            </h2>
                            <p className='m-auto mt-6 max-w-md text-lg leading-8 text-muted-foreground dark:text-gray-300'>
                                Sono pronto a fare tutto il necessario per aiutare te o la tua azienda a creare un
                                prodotto di successo
                            </p>
                            <div className='mt-10 flex items-center justify-center gap-x-6'>
                                <a
                                    href='/tech-career-launch#pricing'
                                    className='hover:bg-accent-3 rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'>
                                    Contattami
                                </a>
                                {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Presentation section */}
            <div className='flex-row-reverse items-center justify-between space-y-12 py-24 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0'>
                <div className='relative ml-auto h-full md:w-1/2'>
                    <div className='flex flex-col gap-8 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3'>
                        <Image
                            src='/images/home/6.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto hidden -rotate-3 rounded-xl drop-shadow-2xl transition-all duration-200 hover:rotate-0 md:block'
                        />

                        <Image
                            src='/images/home/8.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl'
                        />
                        <Image
                            src='/images/home/1.gif'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className=' m-auto rounded-lg drop-shadow-2xl md:col-start-2 md:row-start-2'
                        />
                        <Image
                            src='/images/home/3.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto hidden rounded-lg drop-shadow-2xl md:block'
                        />
                        <Image
                            src='/images/home/4.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl'
                        />

                        <Image
                            src='/images/home/2.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                        />
                    </div>
                </div>

                <div className='md:w-1/2 lg:w-[47%]'>
                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                        Sono Matteo Giardino e sarò la tua{' '}
                        <span className='underline decoration-purple-400 underline-offset-4'>guida</span>.
                    </h2>
                    <p className='my-12 text-gray-600 dark:text-gray-300'>
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo
                        possimus nesciunt dicta veniam aspernatur quam mollitia. <br />
                        <br /> Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at
                        reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                    </p>
                    <div className='space-y-4 divide-y divide-gray-100 dark:divide-gray-800'>
                        <div className='mt-8 flex gap-4 md:items-center'>
                            <div className='flex size-12 gap-4 rounded border border-gray-200 dark:border-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='m-auto size-6 text-gray-700 dark:text-gray-300'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                                    />
                                </svg>
                            </div>
                            <div className='w-5/6'>
                                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
                                    Kangourou dell'Informatica
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>Finalista Nazionale, 2016/2017</p>
                            </div>
                        </div>
                        <div className='flex gap-4 pt-4 md:items-center'>
                            <div className='flex size-12 gap-4 rounded border border-gray-200 dark:border-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='m-auto size-6 text-gray-700 dark:text-gray-300'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                            </div>
                            <div className='w-5/6'>
                                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
                                    Vincitore Droidcon Hackathon
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>Edizioni 2018 e 2019</p>
                            </div>
                        </div>
                        <div className='flex gap-4 pt-4 md:items-center'>
                            <div className='flex size-12 gap-4 rounded border border-gray-200 dark:border-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='m-auto size-6 text-gray-700 dark:text-gray-300'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                            </div>
                            <div className='w-5/6'>
                                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
                                    Forbes Top 100 under 30
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>Anno 2019/2020</p>
                            </div>
                        </div>
                        <div className='flex gap-4 pt-4 md:items-center'>
                            <div className='flex size-12 gap-4 rounded border border-gray-200 dark:border-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='m-auto size-6 text-gray-700 dark:text-gray-300'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                            </div>
                            <div className='w-5/6'>
                                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
                                    Freelancer e Dipendente
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>Dal 2018 al 2021</p>
                            </div>
                        </div>
                        <div className='flex gap-4 pt-4 md:items-center'>
                            <div className='flex size-12 gap-4 rounded border border-gray-200 dark:border-gray-900'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='m-auto size-6 text-gray-700 dark:text-gray-300'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                            </div>
                            <div className='w-5/6'>
                                <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>
                                    Fondatore di Westudents SRL, Oltre, Devv, Wezard, Testy
                                </h3>
                                <p className='text-gray-500 dark:text-gray-400'>Dal 2019 ad oggi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For you section */}
            <section className='space-y-12 border-b border-gray-700 py-8 lg:py-24'>
                <div className='max-w-3xl'>
                    <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                        Tech Career Launch{'  '}
                        <span className='underline decoration-purple-400 underline-offset-4'>non è per tutti</span>.
                    </h2>
                    <p className='font-light text-gray-400 lg:text-xl'>
                        Tech Career Launch offre un percorso di mentorship 1-1 con Matteo Giardino, che fornisce
                        supporto personalizzato e orientamento esperto per guidarti nel tuo percorso di avvio della
                        carriera
                    </p>
                </div>
                <div className='mx-auto max-w-screen-xl space-y-12 lg:space-y-20'>
                    <div className='gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
                        <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
                            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                                Fa per te se:
                            </h2>
                            {/* <p className="mb-8 font-light lg:text-xl">
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                                ease.
                            </p> */}

                            <ul className='my-7 space-y-5 border-t border-gray-700 pt-8'>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 dark:text-green-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Sei uno studente di informatica o un aspirante programmatore
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-green-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Hai dubbi sul tuo futuro lavorativo
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-green-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Sai già programmare ma non lavori ancora
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-green-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Vuoi migliorare le tue competenze tecniche
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-green-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Ti senti perso e non sai da dove iniziare
                                    </span>
                                </li>
                            </ul>
                            <p className=''>
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions.
                            </p>
                        </div>
                        <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
                            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                                Non fa per te se:
                            </h2>
                            {/* <p className="mb-8 font-light lg:text-xl">
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                                ease.
                            </p> */}

                            <ul className='my-7 space-y-5 border-t border-gray-700 pt-8'>
                                <li className='flex space-x-3'>
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
                                        Vuoi imparare a programmare da zero
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
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
                                        Non hai tempo da dedicare allo studio
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
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
                                        Lavori già come sviluppatore
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
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
                                        Ti senti già pronto per il mondo del lavoro
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
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
                                        Hai già il lavoro dei tuoi sogni
                                    </span>
                                </li>
                            </ul>
                            <p className=''>
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Whats included section */}
            <section className=''>
                <div className='mx-auto max-w-screen-xl space-y-12 py-8 lg:space-y-20  lg:py-24'>
                    <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
                        <div className='text-gray-500 dark:text-gray-400 sm:text-lg'>
                            <h2 className='mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
                                Cos'è incluso?
                            </h2>
                            <p className='mb-8 font-light lg:text-xl'>
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions. Accelerate critical development work, eliminate toil, and deploy changes with
                                ease.
                            </p>

                            <ul className='my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700'>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Continuous integration and deployment
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Development workflow
                                    </span>
                                </li>
                                <li className='flex space-x-3'>
                                    <svg
                                        className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                        Knowledge management
                                    </span>
                                </li>
                            </ul>
                            <p className='mb-8'>
                                Deliver great service experiences fast - without the complexity of traditional ITSM
                                solutions.
                            </p>
                        </div>
                        <img
                            className='mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex'
                            src='https://astrolus-premium.netlify.app/images/hero-dark.webp'
                            alt='dashboard feature image'
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials section */}
            <div className='mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12'>
                <div className='relative md:w-1/2'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-0 m-auto grid size-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60'>
                        <div className='h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-purple-700' />
                        <div className='h-full bg-gradient-to-r from-indigo-500 to-primary blur-[106px] dark:to-purple-600' />
                    </div>
                    <img
                        className='relative dark:hidden'
                        src='./images/illus.webp'
                        alt='stats illustration'
                        width='1746'
                        height='1746'
                    />
                    <img
                        className='relative hidden dark:block'
                        src='https://astrolus-premium.netlify.app/images/illus-dark.webp'
                        alt='stats illustration'
                        width='1746'
                        height='1746'
                    />
                </div>
                <div className='ml-auto h-full md:w-1/2'>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl'>
                        Go beyond with our top products
                    </h3>
                    <p className='my-12 text-gray-600 dark:text-gray-300'>
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat ? Asperiores nemo possimus nesciunt
                        dicta veniam aspernatur quam mollitia. <br />
                        <br /> Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at
                        reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                    </p>
                    <a href='/register' className='astro-Z4ZYBUMP before:bg-primary'>
                        <span className='astro-Z4ZYBUMP text-white'>Get started</span>
                    </a>
                </div>
            </div>

            <TestimonialsSection />

            {/* Pricing section */}
            <div className='relative pt-32 md:pt-44' id='pricing'>
                <div
                    aria-hidden='true'
                    className='absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80'>
                    <div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700' />
                    <div className='h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600' />
                </div>
                <div className='mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0'>
                    <div className='m-auto text-center lg:w-8/12 xl:w-7/12'>
                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                            Start managing your company smarter today
                        </h2>
                    </div>
                    <div className='mt-12 md:mt-20'>
                        <div className='relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none'>
                            <div className='flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-x md:divide-y-0'>
                                <div className='text-center md:w-5/12'>
                                    <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                        Suite Enterprise
                                    </h3>
                                    <p className='text-lg text-gray-600 dark:text-gray-300'>
                                        For your company of any size
                                    </p>
                                    <span className='mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white'>
                                        <span className='text-4xl text-primary dark:text-gray-200'>$</span>234
                                    </span>

                                    <div className='flex justify-center'>
                                        <a href='/register' className='astro-Z4ZYBUMP before:bg-primary' type='button'>
                                            <span className='astro-Z4ZYBUMP text-white'>Get started</span>
                                        </a>
                                    </div>

                                    <p className='mt-12 text-sm text-gray-500 dark:text-gray-400'>
                                        Includes : Security, Unlimited Storage, Payment, Search engine, and all features
                                    </p>
                                </div>
                                <div className='relative md:w-7/12 md:pl-12'>
                                    <ul role='list' className='space-y-4 py-6 text-gray-600 dark:text-gray-300'>
                                        <li className='space-x-2'>
                                            <span className='font-semibold text-primary dark:text-gray-300'>✓</span>
                                            <span>First premium advantage</span>
                                        </li>
                                        <li className='space-x-2'>
                                            <span className='font-semibold text-primary dark:text-gray-300'>✓</span>
                                            <span>Second advantage weekly</span>
                                        </li>
                                        <li className='space-x-2'>
                                            <span className='font-semibold text-primary dark:text-gray-300'>✓</span>
                                            <span>Third advantage donate to project</span>
                                        </li>
                                        <li className='space-x-2'>
                                            <span className='font-semibold text-primary dark:text-gray-300'>✓</span>
                                            <span>Fourth, access to all components weekly</span>
                                        </li>
                                    </ul>
                                    <p className='text-gray-700 dark:text-white'>
                                        Team can be any size, and you can add or switch members as needed. Companies
                                        using our platform include:
                                    </p>
                                    <div className='mt-12 flex flex-wrap items-center justify-between gap-6 grayscale'>
                                        <img
                                            className='h-8 w-auto lg:h-8'
                                            src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                            width='100'
                                            alt='airbnb'
                                        />
                                        <img
                                            className='h-6 w-auto lg:h-8'
                                            src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                            width='100'
                                            alt='bissell'
                                        />
                                        <img
                                            className='h-8 w-auto lg:h-8'
                                            src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                            width='100'
                                            height='100'
                                            alt='ge'
                                        />
                                        <img
                                            className='ww-auto h-8 lg:h-8'
                                            src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                            width='100'
                                            alt='microsoft'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row'>
                        <div className='text-center lg:w-5/12 lg:pl-12 lg:text-left'>
                            <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl'>
                                Frequently Asqued Questions
                            </h2>
                            <p className='mt-4 text-gray-600 dark:text-gray-300'>
                                piente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum
                                molestias.
                            </p>
                        </div>
                        <div className='divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12'>
                            <div>
                                <dl className='faq mx-auto max-w-2xl'>
                                    <dt className='text-lg'>
                                        <button
                                            type='button'
                                            className='flex w-full items-start justify-between py-6 text-left text-gray-400'
                                            aria-controls='faq-1'
                                            data-active='false'>
                                            <span className='font-medium text-gray-900 dark:text-white'>
                                                How to customize the template ?
                                            </span>
                                            <span className='ml-6 flex h-7 items-center'>
                                                <svg
                                                    className='arrow-down size-6 rotate-0 duration-300'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    aria-hidden='true'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className='faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out'
                                        id='faq-1'>
                                        <p className='pb-6 text-base text-gray-600 dark:text-gray-400'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                                            pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                                            provident necessitatibus molestias qui voluptatibus similique magnam a nam
                                            rem!
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className='faq mx-auto max-w-2xl'>
                                    <dt className='text-lg'>
                                        <button
                                            type='button'
                                            className='flex w-full items-start justify-between py-6 text-left text-gray-400'
                                            aria-controls='faq-2'
                                            data-active='false'>
                                            <span className='font-medium text-gray-900 dark:text-white'>
                                                How many times can I use the template ?
                                            </span>
                                            <span className='ml-6 flex h-7 items-center'>
                                                <svg
                                                    className='arrow-down size-6 rotate-0 duration-300'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    aria-hidden='true'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className='faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out'
                                        id='faq-2'>
                                        <div className='pb-6 text-base text-gray-600 dark:text-gray-400'>
                                            <p>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                                                pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                                                provident necessitatibus molestias qui voluptatibus similique magnam a
                                                nam rem!
                                            </p>
                                            <ul className='mt-4 list-outside list-disc pl-4'>
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                            </ul>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className='faq mx-auto max-w-2xl'>
                                    <dt className='text-lg'>
                                        <button
                                            type='button'
                                            className='flex w-full items-start justify-between py-6 text-left text-gray-400'
                                            aria-controls='faq-3'
                                            data-active='false'>
                                            <span className='font-medium text-gray-900 dark:text-white'>
                                                How to customize the template ?
                                            </span>
                                            <span className='ml-6 flex h-7 items-center'>
                                                <svg
                                                    className='arrow-down size-6 rotate-0 duration-300'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    aria-hidden='true'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className='faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out'
                                        id='faq-3'>
                                        <p className='pb-6 text-base text-gray-600 dark:text-gray-400'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                                            pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                                            provident necessitatibus molestias qui voluptatibus similique magnam a nam
                                            rem!
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className='faq mx-auto max-w-2xl'>
                                    <dt className='text-lg'>
                                        <button
                                            type='button'
                                            className='flex w-full items-start justify-between py-6 text-left text-gray-400'
                                            aria-controls='faq-4'
                                            data-active='false'>
                                            <span className='font-medium text-gray-900 dark:text-white'>
                                                How to customize the template ?
                                            </span>
                                            <span className='ml-6 flex h-7 items-center'>
                                                <svg
                                                    className='arrow-down size-6 rotate-0 duration-300'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    aria-hidden='true'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className='faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out'
                                        id='faq-4'>
                                        <p className='pb-6 text-base text-gray-600 dark:text-gray-400'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                                            pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                                            provident necessitatibus molestias qui voluptatibus similique magnam a nam
                                            rem!
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className='faq mx-auto max-w-2xl'>
                                    <dt className='text-lg'>
                                        <button
                                            type='button'
                                            className='flex w-full items-start justify-between py-6 text-left text-gray-400'
                                            aria-controls='faq-5'
                                            data-active='false'>
                                            <span className='font-medium text-gray-900 dark:text-white'>
                                                How to customize the template ?
                                            </span>
                                            <span className='ml-6 flex h-7 items-center'>
                                                <svg
                                                    className='arrow-down size-6 rotate-0 duration-300'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    aria-hidden='true'>
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className='faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out'
                                        id='faq-5'>
                                        <p className='pb-6 text-base text-gray-600 dark:text-gray-400'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod
                                            pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi
                                            provident necessitatibus molestias qui voluptatibus similique magnam a nam
                                            rem!
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ section */}

            {/* Contact section */}
            <Features />
        </>
    )
}

export default ProjectPage
