'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'

/** Fade-and-rise once as the block enters the viewport. */
export function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const reduce = useReducedMotion()
    return (
        <motion.div
            data-reveal
            className={cn(className)}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.55, ease: [0.2, 0, 0.2, 1], delay }}>
            {children}
        </motion.div>
    )
}
