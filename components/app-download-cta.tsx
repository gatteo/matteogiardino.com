'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppStoreBadgeBlack from '@/public/images/projects/devv-30/app-store-badge-black.png'
import GooglePlayBadgeBlack from '@/public/images/projects/devv-30/google-play-badge-black.png'
import QRCode from 'react-qr-code'
import { useMediaQuery } from 'usehooks-ts'

import { Devv30Links } from '@/config/links'
import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export function AppDownloadCta({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('')
    const isDesktop = useMediaQuery('(min-width: 768px)')
    const router = useRouter()

    const handleClick = (link: string) => {
        if (isDesktop) {
            setActiveLink(link)
            setIsOpen(true)
        } else {
            router.push(link)
        }
    }

    return (
        <>
            <div className={cn('flex items-center gap-3 flex-row justify-start', className)}>
                <Image
                    src={AppStoreBadgeBlack}
                    alt='download on app store'
                    className='cursor-pointer'
                    height={45}
                    onClick={() => handleClick(Devv30Links.appStoreUrl)}
                />
                <Image
                    src={GooglePlayBadgeBlack}
                    alt='download on google play'
                    className='cursor-pointer'
                    height={45}
                    onClick={() => handleClick(Devv30Links.googlePlayUrl)}
                />
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='m-auto max-w-sm text-balance text-center text-3xl'>
                            Scansiona per scaricare l'app ⬇️
                        </DialogTitle>
                    </DialogHeader>
                    <div className='flex items-center justify-center p-8'>
                        <QRCode value={activeLink} size={256} className='rounded-xl border-2 border-border' />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
