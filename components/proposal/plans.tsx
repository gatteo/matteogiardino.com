import { IconCheck } from '@tabler/icons-react'

import { formatMoney, type ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal, ProposalPlan } from '@/lib/proposals/schema'
import { cn, shineAnimation } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import { Emphasis, GlowBackground, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalPlans({ proposal, labels }: { proposal: Proposal; labels: ProposalLabels }) {
    const { plans, cta, locale } = proposal
    const columns = plans.items.length

    return (
        <Section id='plans' className='relative isolate'>
            <GlowBackground />

            <Reveal>
                <SectionHeading title={plans.title} subtitle={plans.subtitle} align='center' />
            </Reveal>

            <div
                className={cn(
                    'mt-12 grid items-stretch gap-4',
                    columns === 1 && 'mx-auto max-w-xl',
                    columns === 2 && 'mx-auto max-w-4xl md:grid-cols-2',
                    columns === 3 && 'md:grid-cols-3',
                )}>
                {plans.items.map((plan, index) => (
                    <Reveal key={plan.id} delay={index * 0.08} className='flex'>
                        <PlanCard
                            plan={plan}
                            labels={labels}
                            locale={locale}
                            fallbackCta={cta.primary}
                            showHourlyRate={plans.showHourlyRate}
                        />
                    </Reveal>
                ))}
            </div>

            {plans.note && (
                <Reveal>
                    <p className='mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground'>
                        <Emphasis text={plans.note} />
                    </p>
                </Reveal>
            )}
        </Section>
    )
}

function PlanCard({
    plan,
    labels,
    locale,
    fallbackCta,
    showHourlyRate,
}: {
    plan: ProposalPlan
    labels: ProposalLabels
    locale: Proposal['locale']
    fallbackCta: Proposal['cta']['primary']
    showHourlyRate: boolean
}) {
    const cta = plan.cta ?? { label: labels.choosePlan, href: fallbackCta.href }
    const hourly = showHourlyRate && plan.hours ? plan.price / plan.hours : 0

    return (
        <article
            className={cn(
                'relative flex w-full flex-col rounded-xl border bg-muted p-6 md:p-7',
                plan.recommended && 'border-foreground/20 bg-background shadow-2xl',
                plan.recommended && shineAnimation,
            )}>
            {plan.recommended && (
                <span className='absolute -top-3 left-6 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background'>
                    {labels.recommended}
                </span>
            )}

            <header>
                <h3 className='text-xl font-bold'>{plan.name}</h3>
                {plan.tagline && <p className='mt-1 text-sm text-muted-foreground'>{plan.tagline}</p>}
            </header>

            <div className='mt-6 flex flex-wrap items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight md:text-5xl'>
                    {formatMoney(plan.price, plan.currency, locale)}
                </span>
                <span className='whitespace-nowrap text-sm text-muted-foreground'>
                    {plan.period === 'month' ? labels.perMonth : labels.once}
                </span>
            </div>

            {plan.hours && (
                <p className='mt-2 text-sm text-muted-foreground'>
                    <span className='font-semibold text-foreground'>{plan.hours}</span>{' '}
                    {plan.period === 'month' ? labels.hoursPerMonth : labels.hoursOnce}
                    {hourly > 0 && (
                        <>
                            <span className='mx-2 text-border'>·</span>≈{' '}
                            {formatMoney(Math.round(hourly), plan.currency, locale)} {labels.perHour}
                        </>
                    )}
                </p>
            )}

            <ul className='mt-6 flex-1 space-y-3 border-t pt-6 text-sm'>
                {plan.features.map((feature) => (
                    <li key={feature} className='flex items-start gap-3'>
                        <IconCheck className='mt-0.5 size-4 shrink-0 text-[var(--proposal-accent)]' stroke={2.5} />
                        <span className='leading-relaxed'>
                            <Emphasis text={feature} />
                        </span>
                    </li>
                ))}
            </ul>

            <Button asChild className='mt-8 w-full' variant={plan.recommended ? 'default' : 'outline'}>
                <a href={cta.href}>{cta.label}</a>
            </Button>

            {plan.footnote && <p className='mt-3 text-center text-xs text-muted-foreground'>{plan.footnote}</p>}
        </article>
    )
}
