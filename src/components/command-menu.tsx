'use client'

import { IconCommand } from '@tabler/icons-react'
import { Button } from '@tszhong0411/ui'
import React from 'react'

import { useCommandsMenu } from '@/providers/commands-menu'

const CommandMenu = () => {
    const { setOpen } = useCommandsMenu()

    return (
        <>
            <Button
                variant="ghost"
                className="flex h-9 w-9 items-center justify-center p-0"
                onClick={() => setOpen(true)}
                type="button"
                aria-label="Open Command Menu"
                title="Open Command Menu">
                <IconCommand size={20} />
            </Button>
        </>
    )
}

export default CommandMenu
