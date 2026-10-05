import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalTerms({ terms }: { terms: NonNullable<Proposal['terms']> }) {
    return (
        <Section id='terms'>
            <Reveal>
                <SectionHeading title={terms.title} subtitle={terms.subtitle} />
            </Reveal>

            <Reveal>
                <dl className='mt-10 divide-y rounded-md border bg-muted'>
                    {terms.items.map((item) => (
                        <div key={item.title} className='grid gap-2 p-5 md:grid-cols-3 md:gap-8'>
                            <dt className='font-semibold'>{item.title}</dt>
                            <dd className='text-sm leading-relaxed text-muted-foreground md:col-span-2 md:text-base'>
                                <Emphasis text={item.description} />
                            </dd>
                        </div>
                    ))}
                </dl>
            </Reveal>
        </Section>
    )
}
