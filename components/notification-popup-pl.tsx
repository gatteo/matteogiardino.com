'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'
import { PlRoutes } from '@/config/routes'
import { cn, shineAnimation } from '@/lib/utils'

import { Button } from './ui/button'
import { Card, CardDescription, CardFooter, CardHeader } from './ui/card'

export function NotificationPopup() {
    const [isVisibile, setIsVisible] = useState(true)

    return (
        isVisibile && (
            <div className='fixed bottom-4 right-4 '>
                <Card className={cn('w-[350px]', shineAnimation)}>
                    <CardHeader>
                        <div className='font-bold'>
                            ✨ ho riaperto le iscrizioni al corso programmatore leggendario ✨
                        </div>
                        <CardDescription className='mt-4'>
                            ebbene si, hai letto bene. dopo mesi e innumerevoli richieste mi sono filalmente deciso ad
                            aprire nuovamente le iscrizioni per il corso programmatore leggendario
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex justify-end gap-4'>
                        <Button variant='outline' size='sm' onClick={() => setIsVisible(false)}>
                            non ora
                        </Button>
                        <Button size='sm' asChild>
                            <Link
                                href={UtmUrl(PlRoutes.Home, {
                                    medium: UtmMediums.NotificationPopup,
                                    content: 'notification_popup',
                                })}>
                                dimmi di più
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )
    )
}
