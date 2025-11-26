'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { useTranslations } from 'next-intl'
import Devv30Icon from 'public/images/projects/devv-30/icon.webp'

import { UtmMediums } from '@/types/links'
import { Devv30Links } from '@/config/links'
import { cn, shineAnimation } from '@/lib/utils'

import { AppDownloadCta } from './app-download-cta'
import { Icons } from './icon'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card'

export function NotificationPopup() {
    const [isVisibile, setIsVisible] = useState(true)
    const t = useTranslations('notificationPopup')

    return (
        isVisibile && (
            <div className='fixed bottom-4 right-4 '>
                <button
                    onClick={() => setIsVisible(false)}
                    className='absolute right-2 top-2 text-muted-foreground transition-colors duration-200 hover:text-foreground'
                    aria-label={t('closeAriaLabel')}>
                    <Icons.close className='size-4 md:size-5' />
                </button>
                <Card className={cn('w-[350px]', shineAnimation)}>
                    <CardHeader className='space-y-4'>
                        <div className='flex items-center'>
                            <div className='mr-4 shrink-0'>
                                <Image
                                    src={Devv30Icon}
                                    alt='Devv 30 logo'
                                    width={80}
                                    height={80}
                                    className='inline-block rounded-sm'
                                />
                            </div>
                            <div>
                                <h3 className='mb-1 flex items-start text-xl font-bold text-primary md:text-2xl'>
                                    Devv 30{' '}
                                    <Badge className='ml-2 p-1 px-2' variant={'secondary'}>
                                        {t('badge')}
                                    </Badge>
                                </h3>
                                <p className='hidden text-balance text-sm text-muted-foreground md:block md:text-base'>
                                    {t('titleShort')}
                                </p>
                                <p className='text-balance text-sm text-muted-foreground md:hidden md:text-base'>
                                    {t('titleMobile')}
                                </p>
                            </div>
                        </div>
                        <CardDescription className='hidden md:block'>{t('description')}</CardDescription>
                    </CardHeader>
                    <CardFooter className='flex gap-4'>
                        <Button variant='secondary' size='sm' className='hidden pr-1.5 md:flex' asChild>
                            <Link
                                href={UtmUrl(Devv30Links.homepage, {
                                    source: 'matteogiardino.com',
                                    medium: UtmMediums.NotificationPopup,
                                    content: 'notification_popup',
                                })}>
                                <>
                                    {t('learnMore')} <Icons.chevronRight className='inline-block size-4 pr-0 ' />
                                </>
                            </Link>
                        </Button>
                        <AppDownloadCta className='md:hidden' />
                    </CardFooter>
                </Card>
            </div>
        )
    )
}
