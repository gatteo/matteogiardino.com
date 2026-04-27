'use client'

import {
    IconBrandLinkedin,
    IconBrandTelegram,
    IconBrandTwitter,
    IconBrandWhatsapp,
    IconMail,
} from '@tabler/icons-react'
import posthog from 'posthog-js'
import {
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share'

import { cn } from '@/lib/utils'

import { buttonVariants } from '../ui/button'

export function ShareIcons({ url, title, className }: { url: string; title: string; className?: string }) {
    const handleShare = (platform: string) => {
        posthog.capture('blog_post_shared', {
            platform,
            post_title: title,
            post_url: url,
        })
    }

    const emailBody = `Leggi questo post di Matteo Giardino, ne vale la pena!\n\n${url}`
    const mailtoHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(emailBody)}`

    return (
        <div className={cn('flex justify-center gap-2', className)}>
            <a
                href={mailtoHref}
                onClick={() => handleShare('email')}
                aria-label='Share via email'
                className={buttonVariants({ size: 'icon', variant: 'outline' })}>
                <IconMail className='size-4' />
            </a>
            <LinkedinShareButton
                url={url}
                title={title}
                summary={'Leggi questo post di Matteo Giardino, ne vale la pena!'}
                source={'Matteo Giardino'}
                onClick={() => handleShare('linkedin')}>
                <div className={buttonVariants({ size: 'icon', variant: 'outline' })}>
                    <IconBrandLinkedin className='size-4' />
                </div>
            </LinkedinShareButton>
            <TelegramShareButton url={url} title={title} onClick={() => handleShare('telegram')}>
                <div className={buttonVariants({ size: 'icon', variant: 'outline' })}>
                    <IconBrandTelegram className='size-4' />
                </div>
            </TelegramShareButton>
            <TwitterShareButton title={title} url={url} onClick={() => handleShare('twitter')}>
                <div className={buttonVariants({ size: 'icon', variant: 'outline' })}>
                    <IconBrandTwitter className='size-4' />
                </div>
            </TwitterShareButton>
            <WhatsappShareButton title={title} url={url} onClick={() => handleShare('whatsapp')}>
                <div className={buttonVariants({ size: 'icon', variant: 'outline' })}>
                    <IconBrandWhatsapp className='size-4' />
                </div>
            </WhatsappShareButton>
        </div>
    )
}
