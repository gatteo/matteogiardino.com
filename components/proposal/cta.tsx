import type { Proposal } from '@/lib/proposals/schema'
import { shineAnimation } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { Emphasis } from './primitives'
import { Reveal } from './reveal'

export function ProposalCta({ cta }: { cta: Proposal['cta'] }) {
    return (
        <section id='cta' className='py-16 md:py-24'>
            <Reveal>
                <div
                    className={`relative overflow-hidden rounded-3xl border bg-background p-8 text-center shadow-2xl md:p-16 ${shineAnimation}`}>
                    <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-60'>
                        <div className='absolute -left-20 top-0 h-56 w-1/2 bg-gradient-to-br from-[var(--proposal-accent)] to-purple-400 blur-[106px] dark:to-purple-700' />
                        <div className='absolute -right-20 bottom-0 h-40 w-1/2 bg-gradient-to-r from-indigo-400 to-[var(--proposal-accent)] blur-[106px] dark:from-indigo-600' />
                    </div>

                    <h2 className='text-balance text-3xl font-bold md:text-5xl'>{cta.title}</h2>
                    {cta.subtitle && (
                        <p className='mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg'>
                            <Emphasis text={cta.subtitle} />
                        </p>
                    )}
                    <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
                        <Button size='lg' asChild>
                            <a href={cta.primary.href}>{cta.primary.label}</a>
                        </Button>
                        {cta.secondary && (
                            <Button size='lg' variant='outline' asChild>
                                <a href={cta.secondary.href} target='_blank' rel='noreferrer noopener'>
                                    {cta.secondary.label}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
