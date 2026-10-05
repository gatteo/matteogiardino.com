import Image from 'next/image'
import { IconPlus } from '@tabler/icons-react'

import { formatDate, type ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'
import { Button } from '@/components/ui/button'

import { Emphasis } from './primitives'
import { Reveal } from './reveal'

export function ProposalHero({
    proposal,
    labels,
    banner,
}: {
    proposal: Proposal
    labels: ProposalLabels
    banner?: React.ReactNode
}) {
    const { hero, client, cta } = proposal

    return (
        <section id='hero' className='relative pb-8 pt-28 md:pb-16 md:pt-36'>
            <HeroBackground />

            {banner && <div className='mb-10'>{banner}</div>}

            <Reveal className='flex flex-col items-center text-center'>
                <Lockup client={client} />

                <div className='mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground'>
                    <span className='inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1'>
                        <span className='size-1.5 rounded-full bg-[var(--proposal-accent)]' />
                        {hero.eyebrow ?? labels.confidential}
                    </span>
                    <span className='rounded-full border bg-muted px-3 py-1'>
                        {labels.reference} {proposal.reference}
                    </span>
                </div>

                <h1 className='mt-8 max-w-4xl text-balance bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight text-transparent dark:from-white dark:via-white/85 dark:to-white/60 sm:text-5xl md:text-7xl'>
                    {hero.title}
                </h1>

                <p className='mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl'>
                    <Emphasis text={hero.subtitle} />
                </p>

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
            </Reveal>

            <Reveal delay={0.1}>
                <dl className='mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 border-t pt-6 text-center text-sm sm:grid-cols-4'>
                    <Meta label={labels.preparedFor}>
                        {client.name}
                        {client.contactName && (
                            <span className='block text-muted-foreground'>{client.contactName}</span>
                        )}
                    </Meta>
                    <Meta label={labels.preparedBy}>Matteo Giardino</Meta>
                    <Meta label={labels.issuedOn}>{formatDate(proposal.issuedAt, proposal.locale)}</Meta>
                    <Meta label={labels.validUntil}>{formatDate(proposal.validUntil, proposal.locale)}</Meta>
                </dl>
            </Reveal>

            {hero.stats && hero.stats.length > 0 && (
                <Reveal delay={0.2}>
                    <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
                        {hero.stats.map((stat) => (
                            <div key={stat.label} className='rounded-md border bg-muted p-5 text-center'>
                                <p className='text-3xl font-bold tracking-tight md:text-4xl'>{stat.value}</p>
                                <p className='mt-1 text-balance text-sm text-muted-foreground'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            )}
        </section>
    )
}

/** Client mark + Matteo's mark, side by side and slightly tilted, like two cards on a table. */
function Lockup({ client }: { client: Proposal['client'] }) {
    const tile =
        'flex size-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl shadow-black/30 transition-transform duration-300 hover:rotate-0 md:size-24'

    return (
        <div className='flex items-center gap-3 md:gap-4' aria-hidden='true'>
            <div className={`${tile} -rotate-6`}>
                {client.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={client.logoUrl} alt='' className='size-11 object-contain md:size-14' />
                ) : (
                    <span className='text-2xl font-bold text-white'>{client.name.slice(0, 1)}</span>
                )}
            </div>
            <IconPlus className='size-6 text-muted-foreground' stroke={2} />
            <div className={`${tile} rotate-6`}>
                <Image src='/images/mg-logo-white.webp' alt='' width={56} height={56} className='size-11 md:size-14' />
            </div>
        </div>
    )
}

/**
 * Grid confined to the top of the hero and faded out well before the meta row,
 * plus a soft accent glow behind the lockup.
 */
function HeroBackground() {
    return (
        <>
            <div
                aria-hidden='true'
                // eslint-disable-next-line tailwindcss/no-contradicting-classname
                className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[linear-gradient(to_right,hsl(var(--foreground)/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.07)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_75%_100%_at_50%_0%,#000_20%,transparent_100%)]'
            />
            <div
                aria-hidden='true'
                className='pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-[var(--proposal-accent)] opacity-[0.12] blur-3xl dark:opacity-[0.16]'
            />
        </>
    )
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <dt className='text-xs uppercase tracking-wider text-muted-foreground'>{label}</dt>
            <dd className='mt-1 font-medium'>{children}</dd>
        </div>
    )
}
