import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, ProposalIconGlyph, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalContext({ context }: { context: NonNullable<Proposal['context']> }) {
    return (
        <Section id='context'>
            <Reveal>
                <SectionHeading title={context.title} />
            </Reveal>

            <div className='mt-10 grid gap-10 lg:grid-cols-5'>
                <Reveal className='space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3 md:text-lg'>
                    {context.paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            <Emphasis text={paragraph} />
                        </p>
                    ))}
                </Reveal>

                {context.cards && context.cards.length > 0 && (
                    <Reveal delay={0.1} className='grid gap-3 self-start lg:col-span-2'>
                        {context.cards.map((card) => (
                            <div key={card.title} className='flex gap-4 rounded-md border bg-muted p-4'>
                                <span className='mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-background text-[var(--proposal-accent)]'>
                                    <ProposalIconGlyph name={card.icon} />
                                </span>
                                <div>
                                    <h3 className='font-semibold'>{card.title}</h3>
                                    <p className='mt-1 text-sm leading-relaxed text-muted-foreground'>
                                        <Emphasis text={card.description} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Reveal>
                )}
            </div>
        </Section>
    )
}
