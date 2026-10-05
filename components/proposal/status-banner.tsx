import { IconAlertTriangle, IconCircleCheck, IconPencil } from '@tabler/icons-react'

import type { ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'
import { cn } from '@/lib/utils'

export function ProposalStatusBanner({
    proposal,
    expired,
    labels,
}: {
    proposal: Proposal
    expired: boolean
    labels: ProposalLabels
}) {
    let tone: 'warning' | 'success' | 'neutral' | null = null
    let title = ''
    let body = ''

    if (proposal.status === 'accepted') {
        tone = 'success'
        title = labels.acceptedTitle
        body = labels.acceptedBody
    } else if (expired) {
        tone = 'warning'
        title = labels.expiredTitle
        body = labels.expiredBody
    } else if (proposal.status === 'draft') {
        tone = 'neutral'
        title = labels.draftTitle
        body = labels.draftBody
    }

    if (!tone) return null

    const Icon = tone === 'success' ? IconCircleCheck : tone === 'warning' ? IconAlertTriangle : IconPencil

    return (
        <div
            role='status'
            className={cn(
                'flex items-start gap-3 rounded-md border p-4 text-sm',
                tone === 'warning' && 'border-amber-500/40 bg-amber-500/10',
                tone === 'success' && 'border-emerald-500/40 bg-emerald-500/10',
                tone === 'neutral' && 'bg-muted',
            )}>
            <Icon className='mt-0.5 size-5 shrink-0' />
            <div>
                <p className='font-semibold'>{title}</p>
                <p className='mt-0.5 text-muted-foreground'>{body}</p>
            </div>
        </div>
    )
}
