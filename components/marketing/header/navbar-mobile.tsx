'use client'

import React from 'react'
import Link from 'next/link'
import { IconMenu } from '@tabler/icons-react'

import { type HeaderLinks } from '@/types/links'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/icon'

type Props = {
    links: HeaderLinks
}

export function NavbarMobile({ links }: Props) {
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
                {links.map((link) => (
                    <DropdownMenuItem key={link.text} asChild>
                        <Link href={link.href} className='flex items-center gap-4' onClick={() => setOpen(false)}>
                            <Icon name={link.icon} className='size-4' />
                            <div>{link.text}</div>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavbarMobile
