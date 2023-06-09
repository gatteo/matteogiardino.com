'use client'

import LikeButton from './like-button'
import Share from './share-icons'

const editURL = (slug: string) =>
    `https://github.com/matteogiardino/matteogiardino.com/blob/main/src/contents/blog/${slug}.mdx?plain=1`

type FooterProps = {
    slug: string
    title: string
}

const Footer = (props: FooterProps) => {
    const { slug, title } = props

    return (
        <div>
            <div className="my-8 flex w-full items-center justify-between border-t border-accent-2 py-4">
                <a target="_blank" rel="noopener noreferrer" href={editURL(slug)} className="text-sm">
                    © Matteo Giardino
                </a>
                <Share slug={slug} title={title} />
            </div>
            <div className="m-auto flex items-center justify-center md:w-[50%]">
                <LikeButton slug={slug} fullText />
            </div>
        </div>
    )
}

export default Footer
