'use client'

import {
    IconAt,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok,
    IconBrandTwitch,
    IconBrandTwitter,
    IconCode,
    IconLink,
    IconMoon,
    IconSend,
    IconSun,
} from '@tabler/icons-react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    Dialog,
    DialogContent,
} from '@tszhong0411/ui'
import { useTheme } from 'next-themes'
import * as React from 'react'
import toast from 'react-hot-toast'

type CommandsMenuContextType = {
    open: boolean
    setOpen: (open: boolean) => void
}

type Groups = {
    name: string
    actions: {
        title: string
        icon: React.ReactNode
        onSelect: () => void
    }[]
}[]

export const CommandsMenuContext = React.createContext<CommandsMenuContextType>({
    open: false,
    setOpen: () => {},
})

const CommandsMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    const groups: Groups = [
        {
            name: 'Generali',
            actions: [
                {
                    title: 'Copia il link di questa pagina',
                    icon: <IconLink size={16} className="mr-2" />,
                    onSelect: () =>
                        runCommand(async () => {
                            if (!navigator?.clipboard) {
                                toast.error('Access to clipboard rejected!')
                            }

                            try {
                                await navigator.clipboard.writeText(window.location.href)
                                toast.success(
                                    <div className="flex flex-col">
                                        <div>Copied</div>
                                        <div className="text-sm text-accent-5">You can now share it with anyone.</div>
                                    </div>,
                                )
                            } catch {
                                toast.error('Failed to copy!')
                            }
                        }),
                },
            ],
        },
        {
            name: 'Contatti',
            actions: [
                {
                    title: 'Scrivimi una mail',
                    icon: <IconAt size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('mailto:matteo@devv.it', '_blank')),
                },
                {
                    title: 'Richiedi una consulenza',
                    icon: <IconSend size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('mailto:matteo@wezard.it', '_blank')),
                },
                {
                    title: 'Parliamo di un progetto',
                    icon: <IconCode size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('mailto:matteo@wezard.it', '_blank')),
                },
            ],
        },
        {
            name: 'Social',
            actions: [
                {
                    title: 'Instagram',
                    icon: <IconBrandInstagram size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('https://www.instagram.com/mattegiardino', '_blank')),
                },
                {
                    title: 'TikTok',
                    icon: <IconBrandTiktok size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('https://www.tiktok.com/@mattegiardino', '_blank')),
                },
                {
                    title: 'GitHub',
                    icon: <IconBrandGithub size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('https://github.com/gatteo', '_blank')),
                },
                {
                    title: 'LinkedIn',
                    icon: <IconBrandLinkedin size={16} className="mr-2" />,
                    onSelect: () =>
                        runCommand(() => window.open('https://www.linkedin.com/in/matteo-giardino', '_blank')),
                },
                {
                    title: 'Twitter',
                    icon: <IconBrandTwitter size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('https://twitter.com/mattegiardino', '_blank')),
                },
                {
                    title: 'Twitch',
                    icon: <IconBrandTwitch size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => window.open('https://www.twitch.tv/matteogiardino', '_blank')),
                },
            ],
        },
        {
            name: 'Tema',
            actions: [
                {
                    title: 'Tema chiaro',
                    icon: <IconSun size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => setTheme('light')),
                },
                {
                    title: 'Tema scuro',
                    icon: <IconMoon size={16} className="mr-2" />,
                    onSelect: () => runCommand(() => setTheme('dark')),
                },
            ],
        },
    ]

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <CommandsMenuContext.Provider value={{ setOpen, open }}>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-[90vw] overflow-hidden p-0 md:max-w-sm">
                    <Command className="">
                        <CommandInput placeholder="Scrivi un comando o cerca..." />
                        <CommandList>
                            <CommandEmpty>Nessun risultato</CommandEmpty>
                            {groups.map((group, i) => (
                                <React.Fragment key={group.name}>
                                    <CommandGroup heading={group.name}>
                                        {group.actions.map((action) => (
                                            <CommandItem key={action.title} onSelect={action.onSelect}>
                                                {action.icon}
                                                {action.title}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                    {i !== groups.length - 1 && <CommandSeparator />}
                                </React.Fragment>
                            ))}
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
            {children}
        </CommandsMenuContext.Provider>
    )
}

export const useCommandsMenu = () => {
    const { setOpen, open } = React.useContext(CommandsMenuContext)
    return { setOpen, open }
}

export default CommandsMenuProvider
