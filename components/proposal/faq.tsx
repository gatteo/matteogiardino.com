import { IconChevronDown } from '@tabler/icons-react'

import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalFaq({ faq }: { faq: NonNullable<Proposal['faq']> }) {
    return (
        <Section id='faq'>
            <Reveal>
                <SectionHeading title={faq.title} />
            </Reveal>

            <Reveal>
                <div className='mt-10 divide-y rounded-md border bg-muted'>
                    {faq.items.map((item) => (
                        <details key={item.question} className='group p-5 [&_summary::-webkit-details-marker]:hidden'>
                            <summary className='flex cursor-pointer list-none items-center justify-between gap-4 font-semibold'>
                                {item.question}
                                <IconChevronDown className='size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180' />
                            </summary>
                            <p className='mt-3 text-sm leading-relaxed text-muted-foreground md:text-base'>
                                <Emphasis text={item.answer} />
                            </p>
                        </details>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}
