'use client'

import { Skeleton } from '@tszhong0411/ui'
import { motion } from 'framer-motion'
import React from 'react'

import { useFormattedDate } from '@/hooks'

import LikeCounter from '@/components/like-counter'
import ViewCounter from '@/components/view-counter'

import LikeButton from './like-button'
import Share from './share-icons'

type HeaderProps = {
    date: string
    title: string
    slug: string
    description: string
}

const animation = {
    hide: {
        y: 10,
        opacity: 0.2,
    },
    show: {
        y: 0,
        opacity: 1,
    },
}

const Header = (props: HeaderProps) => {
    const { date, title, slug, description } = props
    const formattedDate = useFormattedDate(date)

    React.useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const increment = async () => {
                await fetch('/api/views', {
                    method: 'POST',
                    body: JSON.stringify({
                        slug,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            }

            increment()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <motion.div initial={animation.hide} animate={animation.show} className="">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="mt-2 text-accent-5">{description}</div>

            <div className="mt-6 flex flex-col justify-between lg:flex-row">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <div>{formattedDate ? formattedDate : <Skeleton className="h-5 w-10" />}</div>
                    <div className="text-accent-5">•</div>
                    <LikeCounter slug={slug} />
                    <div className="text-accent-5">•</div>
                    <ViewCounter slug={slug} />
                </div>
                <div className="mt-6 flex flex-grow items-center justify-between sm:mt-2 lg:flex-grow-0">
                    <Share slug={slug} title={title} />

                    <div className="w-24 lg:hidden">
                        <LikeButton slug={slug} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Header
