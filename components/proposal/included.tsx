import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, ProposalIconGlyph, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalIncluded({ included }: { included: NonNullable<Proposal['included']> }) {
    return (
        <Section id='included'>
            <Reveal>
                <SectionHeading title={included.title} subtitle={included.subtitle} />
            </Reveal>

            <div className='mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                {included.items.map((item, index) => (
                    <Reveal key={item.title} delay={(index % 3) * 0.06}>
                        <div className='flex h-full flex-col rounded-md border bg-muted p-5 transition-colors hover:bg-accent'>
                            <span className='flex size-9 items-center justify-center rounded-md border bg-background text-[var(--proposal-accent)]'>
                                <ProposalIconGlyph name={item.icon} />
                            </span>
                            <h3 className='mt-4 font-semibold'>{item.title}</h3>
                            <p className='mt-1.5 text-sm leading-relaxed text-muted-foreground'>
                                <Emphasis text={item.description} />
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
