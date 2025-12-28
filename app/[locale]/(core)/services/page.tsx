import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import { getTranslations } from 'next-intl/server'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { services } from '@/config/services'
import { Button } from '@/components/ui/button'
import { CtaBusiness } from '@/components/cta-business'
import { Testimonials } from '@/components/home/testimonials'
import { Icon } from '@/components/icon'
import { PageTitle } from '@/components/page-title'

// Force static generation for this page
export const dynamic = 'force-static'

type Props = {
    params: Promise<{ locale: string }>
    searchParams: Promise<Record<string, never>>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'pages.services' })
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    const title = t('title')
    const description = t('description')

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.Services),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.Services),
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

export default async function Page({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'pages.services' })

    return (
        <>
            <PageTitle
                title={t('pageTitle')}
                description={t('pageDescription')}
                fromColor='from-green-400'
                toColor='to-blue-500'
            />

            <section className='mt-8 flex flex-col'>
                {services.map((service) => (
                    <div key={service.id} id={service.id} className='scroll-m-12 pt-10'>
                        <div className='flex flex-col gap-8 rounded-lg border bg-muted p-8 md:flex-row'>
                            <div className='flex size-10 flex-none items-center justify-center rounded-xl bg-sky-400'>
                                <Icon
                                    name={service.icon}
                                    className='size-6 stroke-sky-900'
                                    size={48}
                                    strokeWidth={2}
                                    aria-hidden='true'
                                />
                            </div>
                            <div className='flex flex-auto flex-col'>
                                <div className='max-w-lg'>
                                    <h3 className='text-xl font-semibold'>{service.title}</h3>
                                    <dd className='mt-2 text-base leading-normal text-muted-foreground'>
                                        {service.description}
                                    </dd>
                                </div>
                            </div>
                            <div className='flex flex-none flex-col'>
                                <div className='flex items-center justify-end gap-2 md:flex-col md:items-end md:gap-1'>
                                    <p className='text-right text-xs text-muted-foreground'>{t('startingFrom')}</p>
                                    <p className='text-right font-semibold leading-tight'> {service.min_price}</p>
                                </div>
                                <Button asChild size={'sm'} className='mt-2 md:mt-4'>
                                    <Link
                                        href={UtmUrl(Routes.Contact, {
                                            medium: UtmMediums.Services,
                                            content: 'service_card',
                                        })}>
                                        {t('contactButton')}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <Testimonials />

            <CtaBusiness medium={UtmMediums.Services} />
        </>
    )
}
