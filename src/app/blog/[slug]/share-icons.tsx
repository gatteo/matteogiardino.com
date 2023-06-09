'use client'

import {
    IconBrandLinkedin,
    IconBrandTelegram,
    IconBrandTwitter,
    IconBrandWhatsapp,
    IconMail,
} from '@tabler/icons-react'
import {
    EmailShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from 'react-share'

type ShareProps = {
    slug: string
    title: string
}

const Share = (props: ShareProps) => {
    const { slug, title } = props

    return (
        <div className="flex items-center justify-center gap-2">
            <EmailShareButton url={`https://matteogiardino.com/blog/${slug}`} subject={title} body={'summary'}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-accent-2">
                    <IconMail size={18} />
                </div>
            </EmailShareButton>
            <LinkedinShareButton
                url={`https://matteogiardino.com/blog/${slug}`}
                title={title}
                summary={'summary'}
                source={'Matteo Giardino'}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-accent-2">
                    <IconBrandLinkedin size={18} />
                </div>
            </LinkedinShareButton>
            <TelegramShareButton url={`https://matteogiardino.com/blog/${slug}`} title={title}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-accent-2">
                    <IconBrandTelegram size={18} />
                </div>
            </TelegramShareButton>
            <TwitterShareButton title={title} url={`https://matteogiardino.com/blog/${slug}`}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-accent-2">
                    <IconBrandTwitter size={18} />
                </div>
            </TwitterShareButton>
            <WhatsappShareButton title={title} url={`https://matteogiardino.com/blog/${slug}`}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 hover:bg-accent-2">
                    <IconBrandWhatsapp size={18} />
                </div>
            </WhatsappShareButton>
        </div>
    )
}

export default Share
