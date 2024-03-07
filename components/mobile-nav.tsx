'use client'

import React from 'react'
import Link from 'next/link'
import { IconMenu } from '@tabler/icons-react'

import { HEADER_LINKS } from '@/config/links'

import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const MobileNav = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    className='flex size-9 items-center justify-center p-0 md:hidden'
                    type='button'
                    aria-label='Toggle menu'
                    title='Toggle menu'
                    variant='ghost'>
                    <IconMenu size={20} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {HEADER_LINKS.map((link) => (
                    <DropdownMenuItem key={link.text} asChild>
                        <Link href={link.href} className='flex items-center gap-4' onClick={() => setOpen(false)}>
                            {link.icon}
                            <div>{link.text}</div>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNav
