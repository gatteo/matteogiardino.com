import { IconExternalLink } from '@tabler/icons-react'
import { allProjects } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Link from 'next/link'

import Image from '@/components/mdx/image'
import PageTitle from '@/components/page-title'

import { site } from '@/config/site'

const title = 'Progetti'
const description =
    'Esplora i progetti che ho realizzato in passato. Alcuni progetti sono nati da un mio bisogno personale, mentre altri sono frutto di collaborazioni con brillanti imprenditori motivati a trasformare le idee in realtà.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: `${site.url}/projects`,
    },
    openGraph: {
        url: `${site.url}/projects`,
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

const ProjectsPage = () => {
    return (
        <>
            <PageTitle
                title="Progetti. Passioni. Open Source."
                description="Esplora i progetti che ho realizzato in passato. Alcuni progetti sono nati da un mio bisogno personale, mentre altri sono frutto di collaborazioni con brillanti imprenditori motivati a trasformare le idee in realtà. Ogni lavoro però è stato guidato dalla stessa volontà di superare delle sfide e ottenere risultati straordinari."
                fromColor="from-sky-400"
                toColor="to-purple-600"
            />
            <div className="-mx-4 flex flex-col gap-4">
                {allProjects
                    .filter((project) => !project.collab)
                    .map((project) => {
                        const { _id, name, image, description, slug } = project

                        return (
                            <Link
                                key={_id}
                                href={`/projects/${slug}`}
                                className="flex flex-col rounded-lg p-4 transition-all duration-150 hover:bg-hover md:flex-row">
                                <Image
                                    src={image}
                                    width={1200}
                                    height={630}
                                    alt={name}
                                    className="md:w-72"
                                    rounded="rounded-lg"
                                />
                                <div className="flex-1 px-2 py-4 md:px-4 md:py-2">
                                    <div>
                                        <h2 className="text-2xl font-bold text-accent-fg">{name}</h2>
                                        <div className="text-accent-5">{description}</div>
                                    </div>
                                    {/* <div className="mt-[5px] flex flex-wrap gap-[7px]">
                                    {techstack.map((techstack) => {
                                        const { label } = techstack

                                        const Icon = getIconByName(label)

                                        return (
                                            <div
                                                key={label}
                                                className="flex items-center justify-center gap-1 rounded-full border border-accent-2 px-3 py-2">
                                                <Icon strokeWidth={1.5} size={16} />
                                                <div className="text-xs leading-4">{label}</div>
                                            </div>
                                        )
                                    })}
                                </div> */}
                                </div>
                            </Link>
                        )
                    })}
            </div>

            <div className="mt-16 md:mt-32">
                <h2 className="text-3xl font-bold">
                    Progetti su cui ho{' '}
                    <strong className="underline decoration-sky-400 underline-offset-4">collaborato</strong>
                </h2>
                <p className="mt-2 text-accent-5 md:max-w-[70%]">
                    I prodotti digitali più entusiasmanti in cui ho dato un contributo
                </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {allProjects
                    .filter((p) => p.collab)
                    .slice(0, 4)
                    .map((project) => (
                        <Link
                            key={project.name}
                            href={project.homepage as string}
                            target="_blank"
                            className="group flex flex-row items-center space-x-2 rounded-md border border-accent-1 bg-accent-1 p-4 transition-all duration-150 hover:border-accent-4">
                            <Image
                                src={project.icon}
                                alt="null"
                                height={48}
                                width={48}
                                className="mr-3 h-12 w-12 rounded-xl border border-accent-3"
                            />
                            <div className="flex-1 flex-row">
                                <h2 className="text-xl font-bold text-accent-fg">{project.name}</h2>
                                <div className="text-sm text-accent-5 md:text-base">{project.description}</div>
                            </div>
                            <IconExternalLink className="text-accent-1 group-hover:text-accent-5" size={24} />
                        </Link>
                    ))}
            </div>
        </>
    )
}

export default ProjectsPage
