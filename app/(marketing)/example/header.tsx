'use client'

import Image from 'next/image'
import Link from 'next/link'
import { IconBrandGithub, IconHome } from '@tabler/icons-react'
import { Project } from 'contentlayer/generated'
import { motion } from 'framer-motion'

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

type HeaderProps = Project

const Header = (props: HeaderProps) => {
    const { name, description, icon, homepage, github } = props

    // const Icon = getIconByName(icon)

    return (
        <div className='space-y-4'>
            <motion.div className='flex items-center gap-3' initial={animation.hide} animate={animation.show}>
                <Link href={homepage as string} className='flex flex-col'>
                    <div className='flex'>
                        <Image
                            src={icon}
                            alt='null'
                            height={40}
                            width={40}
                            className='border-accent-3 mr-2 size-10 rounded-xl border md:mr-3'
                        />
                        <h1 className='flex text-5xl font-bold'>{name}</h1>
                    </div>
                    <div className='text-muted-foreground'>{description}</div>
                </Link>
            </motion.div>
            <motion.div
                className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.1 }}>
                {homepage && (
                    <a target='_blank' rel='noopener noreferrer' href={homepage} className='flex items-center'>
                        <IconHome size={20} className='-mt-1 mr-2 inline-block' />
                        {homepage}
                    </a>
                )}

                {github && (
                    <a target='_blank' rel='noopener noreferrer' href={github} className='flex items-center'>
                        <IconBrandGithub size={20} className='-mt-1 mr-2 inline-block' />
                        {name}'s GitHub
                    </a>
                )}
            </motion.div>
        </div>
    )
}
export default Header
