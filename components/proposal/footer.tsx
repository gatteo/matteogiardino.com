import type { ProposalLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'

const CONTACT_EMAIL = 'me@matteogiardino.com'

export function ProposalFooter({ proposal, labels }: { proposal: Proposal; labels: ProposalLabels }) {
    return (
        <footer className='border-t py-10 text-sm text-muted-foreground'>
            <p className='max-w-2xl leading-relaxed'>{proposal.footer?.note ?? labels.footerNote}</p>
            <div className='mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                <p>
                    {labels.contact}{' '}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className='font-medium text-foreground underline-offset-4 hover:underline'>
                        {CONTACT_EMAIL}
                    </a>
                </p>
                <p>
                    © {new Date().getFullYear()}{' '}
                    <a
                        href='https://matteogiardino.com'
                        className='font-medium text-foreground underline-offset-4 hover:underline'>
                        Matteo Giardino
                    </a>
                    <span className='mx-2 text-border'>·</span>
                    {labels.reference} {proposal.reference}
                </p>
            </div>
        </footer>
    )
}
