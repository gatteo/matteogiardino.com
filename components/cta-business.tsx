import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type Props = {
    medium: UtmMediums
    className?: string
}

export function CtaBusiness({ medium, className }: Props) {
    return (
        <>
            <section className={cn('relative py-16', className)}>
                <Background />

                <div className='relative isolate overflow-hidden rounded-3xl border bg-muted px-6 pt-8 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
                    <svg
                        viewBox='0 0 1024 1024'
                        className=' absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 opacity-25 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
                        aria-hidden='true'>
                        <circle
                            cx={512}
                            cy={512}
                            r={512}
                            fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                            fillOpacity='0.7'
                        />
                        <defs>
                            <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                                <stop stopColor='#75d6cf' />
                                <stop offset={1} stopColor='#5335e9' />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div className='max-w-md text-left sm:m-auto sm:text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            trasformo la tua visione in realtà.
                        </h2>
                        <p className='mt-6 text-lg leading-8 text-muted-foreground'>
                            sono pronto a fare tutto il necessario per aiutare te o la tua azienda a creare un prodotto
                            di successo
                        </p>
                        <div className='mt-10 flex items-center justify-start gap-x-6 sm:justify-center lg:justify-start'>
                            <Button asChild>
                                <Link
                                    href={UtmUrl(Routes.Contact, {
                                        medium: medium,
                                        content: 'business_cta',
                                    })}>
                                    contattami
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className='relative mt-16 h-80 lg:mt-8'>
                        <Image
                            className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md'
                            src='/images/project-example.png'
                            alt='App screenshot'
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

function Background() {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className='absolute inset-0 -z-10 -m-40 max-w-[100vw] bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]'></div>
    )
}
