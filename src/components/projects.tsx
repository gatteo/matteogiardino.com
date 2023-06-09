import { IconArrowRight, IconExternalLink } from '@tabler/icons-react'
import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

import Image from '@/components/mdx/image'

const Projects = () => {
    return (
        <section className="relative my-16 flex flex-col">
            {/* Title my projects */}
            <div className="flex flex-col items-start justify-between md:flex-row md:items-end">
                <div className="flex-auto">
                    <h2 className="text-3xl font-bold">
                        I miei progetti di{' '}
                        <strong className="underline decoration-sky-400 underline-offset-4">spicco</strong>
                    </h2>
                    <p className="mt-2 text-accent-5 md:max-w-[70%]">
                        Alcuni dei progetti più importanti che ho ideato e sviluppato in questi anni
                    </p>
                </div>
                <div className="flex justify-end">
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 rounded py-3 text-sm font-medium transition-colors hover:bg-hover md:px-3">
                        <span>Tutti i progetti</span>
                        <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>

            <div className="-mx-4 mt-4 grid sm:grid-cols-2">
                {allProjects
                    .filter((p) => !p.collab && p.featured)
                    .slice(0, 4)
                    .map((project) => {
                        const { _id, name, image, description, slug } = project

                        return (
                            <Link
                                key={_id}
                                href={`/projects/${slug}`}
                                className="flex flex-col rounded-lg p-4 transition-colors duration-300 hover:bg-accent-1">
                                <Image src={image} width={1200} height={630} alt={name} rounded="rounded-lg" />
                                <div className="flex-1 py-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-accent-fg">{name}</h2>
                                        <div className="mt-1 text-accent-5">{description}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>

            {/* Title other projects */}
            <div className="mt-24 flex flex-col items-start justify-between md:flex-row md:items-end">
                <div className="flex-auto">
                    <h2 className="text-3xl font-bold">
                        Progetti su cui ho{' '}
                        <strong className="underline decoration-sky-400 underline-offset-4">collaborato</strong>
                    </h2>
                    <p className="mt-2 text-accent-5 md:max-w-[70%]">
                        I prodotti digitali più entusiasmanti in cui ho dato un contributo
                    </p>
                </div>
                <div className="flex justify-end">
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 rounded py-2 text-sm font-medium transition-colors hover:bg-hover md:px-3">
                        <span>Tutti i progetti</span>
                        <IconArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-2" />
                    </Link>
                </div>
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
        </section>
    )
}

export default Projects
