import * as React from 'react'
import {
    IconBolt,
    IconBug,
    IconCalendar,
    IconChartLine,
    IconCheck,
    IconClock,
    IconCode,
    IconEye,
    IconFileText,
    IconLock,
    IconMessageCircle,
    IconRefresh,
    IconRocket,
    IconServer,
    IconShieldCheck,
    IconSparkles,
    IconStack2,
    IconTarget,
    IconUsers,
    IconWallet,
    type TablerIconsProps,
} from '@tabler/icons-react'

import type { ProposalIcon } from '@/lib/proposals/schema'
import { cn } from '@/lib/utils'

const icons: Record<ProposalIcon, React.ComponentType<TablerIconsProps>> = {
    code: IconCode,
    rocket: IconRocket,
    shield: IconShieldCheck,
    clock: IconClock,
    chart: IconChartLine,
    message: IconMessageCircle,
    check: IconCheck,
    bolt: IconBolt,
    users: IconUsers,
    file: IconFileText,
    sparkles: IconSparkles,
    refresh: IconRefresh,
    calendar: IconCalendar,
    lock: IconLock,
    server: IconServer,
    bug: IconBug,
    target: IconTarget,
    eye: IconEye,
    layers: IconStack2,
    wallet: IconWallet,
}

export function ProposalIconGlyph({ name, className }: { name?: ProposalIcon; className?: string }) {
    const Comp = icons[name ?? 'check']
    return <Comp className={cn('size-5', className)} stroke={1.75} aria-hidden='true' />
}

/**
 * Renders `**bold**` spans inside authored strings. In headings the emphasis
 * becomes the site's sky underline; in body copy it becomes a brighter weight.
 */
export function Emphasis({ text, variant = 'body' }: { text: string; variant?: 'heading' | 'body' }) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    const inner = part.slice(2, -2)
                    return variant === 'heading' ? (
                        <strong
                            key={index}
                            className='font-bold underline decoration-[var(--proposal-accent)] decoration-[3px] underline-offset-[6px]'>
                            {inner}
                        </strong>
                    ) : (
                        <strong key={index} className='font-semibold text-foreground'>
                            {inner}
                        </strong>
                    )
                }
                return <React.Fragment key={index}>{part}</React.Fragment>
            })}
        </>
    )
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = 'left',
}: {
    eyebrow?: string
    title: string
    subtitle?: string
    align?: 'left' | 'center'
}) {
    return (
        <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
            {eyebrow && (
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>{eyebrow}</p>
            )}
            <h2 className='text-balance text-3xl font-bold leading-tight md:text-4xl'>
                <Emphasis text={title} variant='heading' />
            </h2>
            {subtitle && (
                <p className='mt-4 text-balance text-base leading-relaxed text-muted-foreground md:text-lg'>
                    <Emphasis text={subtitle} />
                </p>
            )}
        </div>
    )
}

export function Section({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
    return (
        <section id={id} className={cn('scroll-mt-24 py-16 md:py-24', className)}>
            {children}
        </section>
    )
}

export function GridBackground({ className }: { className?: string }) {
    return (
        <div
            aria-hidden='true'
            // eslint-disable-next-line tailwindcss/no-contradicting-classname
            className={cn(
                'pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.06)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_40%,#000_55%,transparent_100%)]',
                className,
            )}
        />
    )
}

export function GlowBackground({ className }: { className?: string }) {
    return (
        <div
            aria-hidden='true'
            className={cn(
                'pointer-events-none absolute inset-0 -z-10 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-70',
                className,
            )}>
            <div className='h-56 bg-gradient-to-br from-[var(--proposal-accent)] to-purple-400 blur-[106px] dark:to-purple-700' />
            <div className='h-32 bg-gradient-to-r from-indigo-400 to-[var(--proposal-accent)] blur-[106px] dark:from-indigo-600' />
        </div>
    )
}
