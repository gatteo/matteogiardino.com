import type { CSSProperties } from 'react'

import { getLabels } from '@/lib/proposals/labels'
import type { Proposal } from '@/lib/proposals/schema'

import { ProposalAbout } from './about'
import { ProposalContext } from './context'
import { ProposalCta } from './cta'
import { ProposalFaq } from './faq'
import { ProposalFooter } from './footer'
import { ProposalHeader } from './header'
import { ProposalHero } from './hero'
import { ProposalHowItWorks } from './how-it-works'
import { ProposalIncluded } from './included'
import { ProposalPlans } from './plans'
import { ProposalStatusBanner } from './status-banner'
import { ProposalTerms } from './terms'

const DEFAULT_ACCENT = '#38bdf8' // tailwind sky-400, the site's accent

export function ProposalPage({ proposal, expired }: { proposal: Proposal; expired: boolean }) {
    const labels = getLabels(proposal.locale)
    const style = { '--proposal-accent': proposal.accent ?? DEFAULT_ACCENT } as CSSProperties

    return (
        <div style={style} className='relative overflow-x-clip'>
            <ProposalHeader proposal={proposal} labels={labels} />

            <main className='mx-auto max-w-5xl px-6 md:px-8'>
                <ProposalHero
                    proposal={proposal}
                    labels={labels}
                    banner={<ProposalStatusBanner proposal={proposal} expired={expired} labels={labels} />}
                />
                {proposal.context && <ProposalContext context={proposal.context} />}
                {proposal.howItWorks && <ProposalHowItWorks howItWorks={proposal.howItWorks} labels={labels} />}
                <ProposalPlans proposal={proposal} labels={labels} />
                {proposal.included && <ProposalIncluded included={proposal.included} />}
                {proposal.terms && <ProposalTerms terms={proposal.terms} />}
                {proposal.about && <ProposalAbout about={proposal.about} />}
                {proposal.faq && <ProposalFaq faq={proposal.faq} />}
                <ProposalCta cta={proposal.cta} />
                <ProposalFooter proposal={proposal} labels={labels} />
            </main>
        </div>
    )
}
