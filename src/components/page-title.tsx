'use client'

import { motion } from 'framer-motion'

type PageTitleProps = {
    title: string
    description: string
    fromColor: string
    toColor: string
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

const PageTitle = (props: PageTitleProps) => {
    const { title, description, fromColor, toColor } = props

    return (
        <>
            <motion.h2
                className={`my-4 bg-gradient-to-r ${fromColor} ${toColor} bg-clip-text text-5xl font-extrabold text-transparent`}
                initial={animation.hide}
                animate={animation.show}>
                {title}
            </motion.h2>
            <motion.p
                className="mb-8 text-accent-5"
                initial={animation.hide}
                animate={animation.show}
                transition={{
                    delay: 0.1,
                }}>
                {description}
            </motion.p>
        </>
    )
}
export default PageTitle
