import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import { allProjects } from 'contentlayer/generated'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { PageTitle } from '@/components/page-title'
import { ProjectCollabCard } from '@/components/project-collab-card'

const title = 'progetti'
const description =
    'esplora i progetti che ho realizzato in passato. Alcuni progetti sono nati da un mio bisogno personale, mentre altri sono frutto di collaborazioni con brillanti imprenditori motivati a trasformare le idee in realtà.'

type Props = {
    params: Record<string, never>
    searchParams: Record<string, never>
}

export async function generateMetadata(_: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.Projects),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Projects),
            title,
            description,
        },
        twitter: {
            ...previousTwitter,
            title,
            description,
        },
    }
}

export default function Page() {
    return (
        <>
            <PageTitle
                title='i miei progetti'
                description='esplora i progetti che ho realizzato in passato. Alcuni progetti sono nati da un mio bisogno personale, mentre altri sono frutto di collaborazioni con brillanti imprenditori motivati a trasformare le idee in realtà. Ogni lavoro però è stato guidato dalla stessa volontà di superare delle sfide e ottenere risultati straordinari.'
                fromColor='from-sky-400'
                toColor='to-purple-600'
            />

            <div className='-mx-4 mt-8 grid sm:grid-cols-2'>
                {allProjects
                    .filter((p) => !p.collab)
                    .map(({ _id, name, image, description, slug }) => {
                        return (
                            <Link
                                key={_id}
                                href={UtmUrl(Routes.Project(slug), {
                                    medium: UtmMediums.Projects,
                                    content: 'product_card',
                                })}
                                className='flex flex-col rounded-lg p-4 transition-colors duration-300 hover:bg-muted'>
                                <Image
                                    src={image as string}
                                    width={1200}
                                    height={630}
                                    alt={name}
                                    className='rounded-lg'
                                />
                                <div className='flex-1 py-4'>
                                    <div>
                                        <h2 className='text-xl font-bold'>{name}</h2>
                                        <div className='mt-1 text-muted-foreground'>{description}</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
            </div>

            {/* Title Collab Projects */}
            <div className='mt-24 flex flex-col items-start justify-between md:flex-row md:items-end'>
                <div className='flex-auto'>
                    <h2 className='text-3xl font-bold'>
                        progetti su cui ho{' '}
                        <strong className='underline decoration-sky-400 underline-offset-4'>collaborato</strong>
                    </h2>
                    <p className='mt-2 text-muted-foreground'>
                        i prodotti digitali più entusiasmanti in cui ho dato un contributo
                    </p>
                </div>
            </div>

            {/* Collab Projects */}
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                {allProjects
                    .filter((p) => p.collab)
                    .map((project) => (
                        <ProjectCollabCard key={project._id} project={project} />
                    ))}
            </div>
        </>
    )
}
