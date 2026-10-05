import Image from 'next/image'

import type { ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'
import { Button } from '@/components/ui/button'

import { ThemeToggle } from './theme-toggle'

export function ProposalHeader({ proposal, labels }: { proposal: Proposal; labels: ProposalLabels }) {
    return (
        <header className='fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-[10px]'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between gap-4 px-6 md:px-8'>
                <a href='https://matteogiardino.com' className='flex items-center gap-3' aria-label='Matteo Giardino'>
                    <Image
                        src='/images/mg-logo-white.webp'
                        height={28}
                        width={28}
                        alt=''
                        className='hidden dark:block'
                    />
                    <Image
                        src='/images/mg-logo-black.webp'
                        height={28}
                        width={28}
                        alt=''
                        className='rounded-lg dark:hidden'
                    />
                    <span className='hidden text-sm font-semibold sm:inline'>Matteo Giardino</span>
                </a>

                <div className='flex min-w-0 items-center gap-2 text-xs text-muted-foreground sm:text-sm'>
                    <span className='hidden sm:inline'>{labels.confidential}</span>
                    <span className='hidden text-border sm:inline'>·</span>
                    <span className='truncate font-medium text-foreground'>{proposal.client.name}</span>
                </div>

                <div className='flex items-center gap-1'>
                    <ThemeToggle label={labels.toggleTheme} />
                    <Button size='sm' asChild>
                        <a href={proposal.cta.primary.href}>{proposal.cta.primary.label}</a>
                    </Button>
                </div>
            </div>
        </header>
    )
}
