import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { proposalSchema, type Proposal } from './schema'

export { proposalSchema, type Proposal, type ProposalPlan } from './schema'

const TOKEN_RE = /^[a-z0-9-]{16,80}$/

/**
 * Proposal documents are never stored in this (public) repository.
 *
 *  - Local development: `PROPOSALS_DIR` points at a folder of `<token>.json`
 *    files (a clone of the private proposals repository).
 *  - Production: `PROPOSALS_GITHUB_REPO` (`owner/name`) + `PROPOSALS_GITHUB_TOKEN`
 *    (fine-grained PAT, read-only on Contents) fetch `proposals/<token>.json`
 *    from that private repository through the GitHub API.
 *
 * When neither is configured every token resolves to "not found".
 */
export async function getProposal(token: string): Promise<Proposal | null> {
    if (!TOKEN_RE.test(token)) return null

    const raw = (await readFromDisk(token)) ?? (await readFromGitHub(token))
    if (!raw) return null

    const parsed = proposalSchema.safeParse(JSON.parse(raw))
    if (!parsed.success) {
        console.error(`[proposals] ${token}.json is invalid:`, parsed.error.flatten())
        return null
    }
    if (parsed.data.token !== token) {
        console.error(`[proposals] token mismatch: file ${token}.json declares token ${parsed.data.token}`)
        return null
    }
    return parsed.data
}

async function readFromDisk(token: string): Promise<string | null> {
    const dir = process.env.PROPOSALS_DIR
    if (!dir) return null
    try {
        return await readFile(path.join(dir, `${token}.json`), 'utf8')
    } catch {
        return null
    }
}

async function readFromGitHub(token: string): Promise<string | null> {
    const repo = process.env.PROPOSALS_GITHUB_REPO
    const auth = process.env.PROPOSALS_GITHUB_TOKEN
    if (!repo || !auth) return null

    const url = `https://api.github.com/repos/${repo}/contents/proposals/${token}.json`
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${auth}`,
                'Accept': 'application/vnd.github.raw+json',
                'X-GitHub-Api-Version': '2022-11-28',
            },
            // A proposal changes rarely; one minute keeps edits quick to appear.
            next: { revalidate: 60 },
        })
        if (res.status === 404) return null
        if (!res.ok) {
            console.error(`[proposals] GitHub responded ${res.status} for ${token}`)
            return null
        }
        return await res.text()
    } catch (error) {
        console.error('[proposals] GitHub fetch failed', error)
        return null
    }
}

export function isProposalExpired(proposal: Proposal, now = new Date()): boolean {
    if (proposal.status === 'expired') return true
    const end = new Date(`${proposal.validUntil}T23:59:59`)
    return now > end
}
