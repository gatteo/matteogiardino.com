'use client'

import { useTranslations } from 'next-intl'

import { UtmMediums } from '@/types/links'
import { CtaBusiness } from '@/components/cta-business'

export function Business() {
    const t = useTranslations('business')

    return (
        <>
            <section id='business' className='mt-32'>
                <div className='mx-auto max-w-7xl pb-8 lg:px-8'>
                    <div className='max-w-2xl lg:mx-auto lg:text-center'>
                        <h2 className='text-base font-semibold leading-7 text-sky-400'>{t('subtitle')}</h2>
                        <p className='tracking-tigh mt-2 text-3xl font-bold sm:text-4xl'>
                            {t('title')}
                        </p>
                        <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>
                            {t('description')}
                        </p>
                    </div>
                </div>
            </section>

            <CtaBusiness medium={UtmMediums.Homepage} />
        </>
    )
}
