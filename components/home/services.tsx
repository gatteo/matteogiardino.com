import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

import { Routes } from '@/config/routes'
import { services } from '@/config/services'

import { LinkCard } from '../link-card'
import { Button } from '../ui/button'

export function Services() {
    return (
        <section className='my-32'>
            <div className='flex flex-col items-start justify-between md:flex-row md:items-end'>
                <div className='flex-auto'>
                    <h2 className='text-3xl font-bold'>
                        come aiuto <strong className='underline decoration-sky-400 underline-offset-4'>aziende</strong>{' '}
                        e <strong className='underline decoration-sky-400 underline-offset-4'>imprenditori</strong>
                    </h2>
                    <p className='mt-2 text-muted-foreground'>
                        sblocco il potenziale di aziende e imprenditori. ecco come:
                    </p>
                </div>

                <Button variant='ghost' className='group text-muted-foreground' size='sm' asChild>
                    <Link href={Routes.Contact}>
                        tutti i servizi
                        <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1' />
                    </Link>
                </Button>
            </div>

            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                {services.map((service) => (
                    <LinkCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        href={service.url}
                    />
                ))}
            </div>
        </section>
    )
}
