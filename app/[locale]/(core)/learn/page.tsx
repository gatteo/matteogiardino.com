import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { absoluteUrl, UtmUrl } from '@/utils/urls'
import { ArrowUpRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { UtmMediums } from '@/types/links'
import { products } from '@/config/products'
import { Routes } from '@/config/routes'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageTitle } from '@/components/page-title'

// Force static generation for this page
export const dynamic = 'force-static'

type Props = {
    params: Promise<{ locale: string }>
    searchParams: Promise<Record<string, never>>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'pages.learn' })
    const previousOpenGraph = (await parent)?.openGraph ?? {}
    const previousTwitter = (await parent)?.twitter ?? {}

    const title = t('title')
    const description = t('description')

    return {
        title,
        description,
        alternates: {
            canonical: absoluteUrl(Routes.LearningProducts),
        },
        openGraph: {
            ...previousOpenGraph,
            url: absoluteUrl(Routes.LearningProducts),
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
    const t = await getTranslations({ locale, namespace: 'pages.learn' })
    const tCommon = await getTranslations({ locale, namespace: 'common' })

    return (
        <>
            <PageTitle
                title={t('pageTitle')}
                description={t('pageDescription')}
                fromColor='from-amber-500'
                toColor='to-pink-500'
            />

            <section className='mt-8 flex flex-col'>
                {products.map((product) => (
                    <div key={product.id} id={product.id} className='scroll-m-12 pt-10'>
                        <div className='flex flex-col gap-8 rounded-lg border bg-muted p-8 md:flex-row'>
                            <Image
                                src={product.pictogram}
                                height={40}
                                width={80}
                                alt='Logo'
                                className='h-fit w-[100px] rounded-sm dark:hidden'
                            />
                            <Image
                                src={product.pictogramDark}
                                height={40}
                                width={80}
                                alt='Logo'
                                className='hidden h-fit w-[100px] rounded-sm dark:block'
                            />
                            <div className='flex flex-auto flex-col'>
                                <div className='max-w-lg'>
                                    <div className='flex'>
                                        <h3 className='flex flex-row text-xl font-semibold'>{product.title}</h3>
                                        {product.badge && (
                                            <Badge variant={'outline'} className='ml-2'>
                                                {product.badge}
                                            </Badge>
                                        )}
                                    </div>
                                    <dd className='mt-2 text-base leading-normal text-muted-foreground'>
                                        {product.description}
                                    </dd>
                                </div>
                            </div>
                            <div className='flex flex-none flex-col'>
                                <Button asChild size={'sm'} className='mt-2 md:mt-4'>
                                    <Link
                                        href={UtmUrl(product.url, {
                                            medium: UtmMediums.LearningProducts,
                                            content: 'product_card',
                                        })}>
                                        {tCommon('learnMore')} <ArrowUpRight className='ml-1 inline-block size-4' />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
