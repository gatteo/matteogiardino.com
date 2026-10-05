import type { ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalHowItWorks({
    howItWorks,
    labels,
}: {
    howItWorks: NonNullable<Proposal['howItWorks']>
    labels: ProposalLabels
}) {
    return (
        <Section id='how-it-works'>
            <Reveal>
                <SectionHeading title={howItWorks.title} subtitle={howItWorks.subtitle} />
            </Reveal>

            <ol className='mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4'>
                {howItWorks.steps.map((step, index) => (
                    <Reveal key={step.title} delay={index * 0.06}>
                        <li className='relative flex h-full flex-col rounded-md border bg-muted p-5'>
                            <span className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                {labels.step} {index + 1}
                            </span>
                            <span
                                aria-hidden='true'
                                className='pointer-events-none absolute right-4 top-2 select-none text-6xl font-bold leading-none text-foreground/[0.06]'>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className='mt-3 text-lg font-semibold'>{step.title}</h3>
                            <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                                <Emphasis text={step.description} />
                            </p>
                        </li>
                    </Reveal>
                ))}
            </ol>
        </Section>
    )
}
