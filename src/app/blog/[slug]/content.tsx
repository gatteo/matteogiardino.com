import { BlogPost } from 'contentlayer/generated'

import Mdx from '@/components/mdx'

import LikeButton from './like-button'
import Share from './share-icons'
import TableOfContents from './table-of-contents'

type ContentProps = {
    post: BlogPost
    slug: string
}

const Content = (props: ContentProps) => {
    const { post, slug } = props

    return (
        <div className="mt-8 flex flex-col justify-between lg:flex-row">
            <article className="w-full lg:w-[600px]">
                <Mdx code={post.body.code} />
            </article>
            <aside className="hidden lg:block lg:min-w-[270px] lg:max-w-[270px]">
                <div className="sticky top-24">
                    <TableOfContents />
                    <div className="mt-6 flex justify-start">
                        <Share slug={slug} title={post.title} />
                    </div>
                    <div className="mt-6 flex w-24 justify-start">
                        <LikeButton slug={slug} />
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Content
