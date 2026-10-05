import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { after } from 'next/server'
import { absoluteUrl } from '@/utils/urls'

import { site } from '@/config/site'
import { getLabels } from '@/lib/proposals/labels'
import { getProposal, isProposalExpired } from '@/lib/proposals'
import { getPostHogClient } from '@/lib/posthog-server'
import { ProposalPage } from '@/components/proposal/proposal-page'

// Content lives outside the repository and is fetched per request.
export const dynamic = 'force-dynamic'

type Props = {
    params: Promise<{ locale: string; token: string }>
}

const noIndex: Metadata['robots'] = {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { token } = await params
    const proposal = await getProposal(token)

    if (!proposal) {
        return { title: 'Not found', robots: noIndex, referrer: 'no-referrer' }
    }

    const labels = getLabels(proposal.locale)
    const title = `${labels.confidential} · ${proposal.client.name}`
    const description = proposal.hero.title

    return {
        title,
        description,
        robots: noIndex,
        referrer: 'no-referrer',
        // Reset the inherited canonical/hreflang: this URL has no public identity.
        alternates: {},
        openGraph: {
            type: 'website',
            siteName: site.title,
            title,
            description,
            locale: proposal.locale === 'it' ? 'it_IT' : 'en_GB',
            images: [{ url: absoluteUrl('/images/og/og.png'), width: 1200, height: 630, alt: site.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [{ url: absoluteUrl('/images/og/og.png'), width: 1200, height: 630, alt: site.title }],
        },
    }
}

export default async function Page({ params }: Props) {
    const { token } = await params
    const proposal = await getProposal(token)
    if (!proposal) notFound()

    const expired = isProposalExpired(proposal)

    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
        after(async () => {
            try {
                const client = getPostHogClient()
                client.capture({
                    distinctId: `proposal:${proposal.token}`,
                    event: 'proposal_viewed',
                    properties: {
                        client: proposal.client.name,
                        reference: proposal.reference,
                        status: proposal.status,
                        expired,
                        locale: proposal.locale,
                    },
                })
                await client.flush()
            } catch (error) {
                console.error('[proposals] analytics failed', error)
            }
        })
    }

    return <ProposalPage proposal={proposal} expired={expired} />
}
