import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconArrowRight } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { services } from '@/config/services'

import { LinkCard } from '../link-card'
import { Button } from '../ui/button'

export function Services() {
    return (
        <section id='services' className='my-32'>
            <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
                <div className='flex-auto'>
                    <h2 className='text-3xl font-bold'>
                        come aiuto <strong className='underline decoration-sky-400 underline-offset-4'>aziende</strong>{' '}
                        e <strong className='underline decoration-sky-400 underline-offset-4'>imprenditori</strong>
                    </h2>
                    <p className='mt-2 text-balance text-muted-foreground'>
                        sblocco il potenziale di aziende e imprenditori. ecco come:
                    </p>
                </div>

                <Button variant='ghost' className='group -mx-3 text-muted-foreground md:mx-0' size='sm' asChild>
                    <Link
                        href={UtmUrl(Routes.Services, {
                            medium: UtmMediums.Homepage,
                            content: 'services',
                        })}>
                        tutti i servizi
                        <IconArrowRight className='ml-2 inline-block size-5 transition-transform duration-200 group-hover:translate-x-1 ' />
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
                        href={UtmUrl(service.url, {
                            medium: UtmMediums.Homepage,
                            content: 'services',
                        })}
                    />
                ))}
            </div>
        </section>
    )
}
