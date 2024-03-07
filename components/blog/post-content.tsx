import React from 'react'

import { BlogPostSource } from '@/types/blog'
import { site } from '@/config/site'
import { getTOC, getUrlFromSource } from '@/lib/blog'
import TableOfContents from '@/components/blog/post-toc'

import Mdx from '../mdx/mdx'
import { ShareIcons } from './share-icons'

type Props = {
    slug: string
    body: {
        code: string
        raw: string
    }
    title: string
}

export async function Content({ title, body, slug }: Props) {
    const toc = await getTOC(body.raw)

    return (
        <>
            <div className='mt-8 flex flex-col justify-between lg:flex-row'>
                <article className='w-full lg:w-[670px]'>
                    <Mdx code={body.code} />
                </article>
                <aside className='lg:min-w-[270px] lg:max-w-[270px]'>
                    <div className='sticky top-24 will-change-[transform,opacity]'>
                        {toc && toc.length > 0 && <TableOfContents toc={toc} />}
                        <div className='mt-6 flex justify-start'>
                            <ShareIcons
                                title={title}
                                url={`${site.url}/${getUrlFromSource(BlogPostSource.Local, slug)}`}
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}
