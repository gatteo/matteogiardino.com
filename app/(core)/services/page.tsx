import Link from 'next/link'

import { Routes } from '@/config/routes'
import { services } from '@/config/services'
import { Button } from '@/components/ui/button'
import { CtaBusiness } from '@/components/cta-business'
import { Testimonials } from '@/components/home/testimonials'
import { Icon } from '@/components/icon'
import { PageTitle } from '@/components/page-title'

export default function Page() {
    return (
        <>
            <PageTitle
                title='servizi per aziende e imprenditori'
                description='ho avuto la fortuna di conoscere brillandti imprenditori con grandi idee. A tutti però mancava una
                            cosa: la conoscenza tecnologica necessaria per sbloccare il pieno potenziale. Voglio dare la
                            direzione necessaria per aiutare un imprenditore a raggiungere qualsiasi tipo di successo.'
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
                                    <p className='text-right text-xs text-muted-foreground'>a partire da</p>
                                    <p className='text-right font-semibold leading-tight'> {service.min_price}</p>
                                </div>
                                <Button asChild size={'sm'} className='mt-2 md:mt-4'>
                                    <Link href={Routes.Contact}>contattami</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <Testimonials />

            <CtaBusiness />
        </>
    )
}
