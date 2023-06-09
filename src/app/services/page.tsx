import { Icon3dCubeSphere, IconApiApp, IconApps, IconCode } from '@tabler/icons-react'
import type { Metadata } from 'next'
import Image from 'next/image'

import PageTitle from '@/components/page-title'
import Testimonials from '@/components/testimonials'

import { site } from '@/config/site'

const Services = [
    {
        name: 'Sviluppo prodotto',
        description:
            "Trasforma le tue idee in soluzioni concrete e competitive. Dal concept all'implementazione, lavoriamo insieme per creare un prodotto impeccabile e funzionale. ",
        icon: IconCode,
    },
    {
        name: 'Tech Advisory',
        description:
            'Un consulenza strategica e tecnica in cui analizzo le tue esigenze per aiutarti a prendere decisioni tecnologiche ottimali e migliorare i tuoi processi aziendali.',
        icon: IconApiApp,
    },
    {
        name: 'Product & Growth Advisory',
        description:
            "Attraverso analisi approfondite, strategie di crescita e miglioramenti del prodotto, ti guiderò nel massimizzare l'adozione, l'engagement e il valore del tuo prodotto sul mercato",
        icon: Icon3dCubeSphere,
    },
    {
        name: 'CTO as a Service',
        description:
            'Collaborerò a stretto contatto con te e con il tuo team per definire la visione tecnologica, pianificare lo sviluppo del prodotto e gestire le sfide tecniche.',
        icon: IconApps,
    },
]

const title = 'Servizi'
const description =
    'Scopri i servizi che offro a grandi imprenditori o aziende per sbloccare il loro pieno potenziale tramite la mia esperienza e conoscenza tecnologica.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/services`,
    },
    openGraph: {
        url: `${site.url}/services`,
        type: 'website',
        title,
        siteName: site.title,
        description,
        locale: 'it-IT',
        images: [
            {
                url: `${site.url}/static/images/og/og.png`,
                width: 1200,
                height: 630,
                alt: description,
                type: 'image/png',
            },
        ],
    },
}

const DashboardPage = () => {
    return (
        <>
            <PageTitle
                title="Servizi."
                description="Ho avuto la fortuna di conoscere grandi persone con grandi idee. A tutte però mancava una
                            cosa: la conoscenza tecnologica necessaria per sbloccare il pieno potenziale. Voglio dare la
                            direzione necessaria per aiutare un imprenditore a raggiungere qualsiasi tipo di successo."
                fromColor="from-green-400"
                toColor="to-blue-500"
            />
            <div className="mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 md:max-w-none md:grid-cols-2 lg:gap-y-16">
                    {Services.map((service) => (
                        <div key={service.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400">
                                    <service.icon
                                        className="h-6 w-6 text-black"
                                        size={48}
                                        strokeWidth={2}
                                        color={'black'}
                                        aria-hidden="true"
                                    />
                                </div>
                                {service.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-accent-5">{service.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="relative isolate pt-16 lg:px-0">
                <div className="absolute inset-0 -z-10">
                    <svg
                        className="absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-slate-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]"
                        aria-hidden="true">
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={100}
                                height={100}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>

                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        />
                    </svg>
                </div>
                <div className="py-16">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-accent-1 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className=" absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true">
                            <circle
                                cx={512}
                                cy={512}
                                r={512}
                                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                fillOpacity="0.7"
                            />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="max-w-md text-left sm:m-auto sm:text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Trasformo la tua visione in realtà.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-accent-5 dark:text-gray-300">
                                Sono pronto a fare tutto il necessario per aiutare te o la tua azienda a creare un
                                prodotto di successo
                            </p>
                            <div className="mt-10 flex items-center justify-start gap-x-6 sm:justify-center lg:justify-start">
                                <a
                                    href="/contacts"
                                    className="rounded-md bg-accent-2 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-accent-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                                    Contattami
                                </a>
                                {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a> */}
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <Image
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src="/static/images/project-example.png"
                                alt="App screenshot"
                                width={1824}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <Testimonials />
            </div>
        </>
    )
}

export default DashboardPage
