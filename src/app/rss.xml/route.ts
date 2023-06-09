import { allBlogPosts } from 'contentlayer/generated'
import { NextResponse } from 'next/server'
import RSS from 'rss'

import { site } from '@/config/site'

export const GET = async () => {
    const feed = new RSS({
        title: 'Matteo Giardino Blog',
        description: "Matteo Giardino's personal website and blog",
        site_url: `${site.url}`,
        feed_url: `${site.url}/feed.xml`,
        language: 'it-IT',
        image_url: `${site.url}/static/images/og/og.png`,
    })

    const allPosts = allBlogPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

    allPosts.map((post) => {
        const { title, summary, date, slug } = post

        feed.item({
            title: title,
            url: `${site.url}/blog/${slug}`,
            date: date,
            description: summary,
            author: 'Matteo Giardino',
        })
    })

    return new NextResponse(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
