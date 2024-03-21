import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { products } from '@/config/products'
import { Routes } from '@/config/routes'

import { LinkCard } from '../link-card'
import { Button } from '../ui/button'

const stats = [
    { name: 'followers tiktok', value: '113.000+' },
    { name: 'followers instagram', value: '14.000+' },
    { name: 'corsisti', value: '900+' },
    { name: 'visualizzazioni totali', value: '266.7 mln' },
]

export function Followers() {
    return (
        <section id='followers' className='relative my-32'>
            {/* Background */}
            <div className='absolute inset-0 -z-10'>
                <svg
                    className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2  stroke-neutral-700 [mask-image:radial-gradient(64rem_24rem_at_right,white,transparent)]'
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

            {/* Followers */}
            <div className='flex flex-col gap-12 md:flex-row'>
                <div className='flex-auto'>
                    <div>
                        <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>
                            <strong className='underline decoration-sky-400 underline-offset-8'>130.000+</strong>{' '}
                            studenti.
                        </h2>
                        <p className='mt-6 max-w-lg text-lg leading-8 text-muted-foreground'>
                            la programmazione ha rivoluzionato la mia vita. <br /> per questo motivo ogni giorno mi
                            impegno a diffondere la mia passione fornendo <strong>strumenti e risorse</strong> per
                            rendere l'apprendimento accessibile a tutti.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className='flex-1'>
                        <dl className='mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2'>
                            {stats.map((stat) => (
                                <div key={stat.name} className='flex flex-col-reverse'>
                                    <dt className='text-accent-3 text-sm leading-7 dark:text-muted-foreground sm:text-base'>
                                        {stat.name}
                                    </dt>
                                    <dd className='text-2xl font-bold leading-9 tracking-tight'>{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <div className='flex-auto'>
                    <Image
                        src='/images/home/screen.webp'
                        alt=''
                        loading='lazy'
                        width={300}
                        height={500}
                        className='m-auto max-w-[300px] rotate-2 rounded-xl transition-all duration-200 hover:rotate-0'
                    />
                </div>
            </div>

            {/* Products title */}
            <div className='mt-24 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
                <div className='flex-auto '>
                    <h2 className='text-balance text-3xl font-bold '>
                        i miei prodotti di{' '}
                        <strong className='underline decoration-sky-400 underline-offset-4'>formazione</strong>
                    </h2>
                    <p className='mt-2 text-balance text-muted-foreground '>
                        posso insegnarti a programmare o trasformarti in un vero professionista
                    </p>
                </div>

                <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
                    <Link
                        href={UtmUrl(Routes.LearningProducts, {
                            medium: UtmMediums.Homepage,
                            content: 'followers',
                        })}>
                        tutti i prodotti
                        <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
                    </Link>
                </Button>
            </div>

            {/* Products */}
            <div className='mt-6 grid auto-rows-fr gap-4 md:grid-cols-2'>
                {products.map((product) => (
                    <LinkCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.imageDark}
                        href={UtmUrl(product.url, {
                            medium: UtmMediums.Homepage,
                            content: 'followers',
                        })}
                    />
                ))}
            </div>
        </section>
    )
}
