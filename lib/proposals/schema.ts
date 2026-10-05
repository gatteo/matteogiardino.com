import { z } from 'zod'

/**
 * Proposal page schema.
 *
 * A proposal is a single JSON document that lives OUTSIDE this repository
 * (private repo, see docs/proposals.md). The page at /p/[token] renders it.
 * Every section except `hero`, `plans` and `cta` is optional, so a proposal can
 * be as short or as long as the deal requires.
 */

export const proposalIcons = [
    'code',
    'rocket',
    'shield',
    'clock',
    'chart',
    'message',
    'check',
    'bolt',
    'users',
    'file',
    'sparkles',
    'refresh',
    'calendar',
    'lock',
    'server',
    'bug',
    'target',
    'eye',
    'layers',
    'wallet',
] as const

export type ProposalIcon = (typeof proposalIcons)[number]

const icon = z.enum(proposalIcons)

const link = z.object({
    label: z.string().min(1),
    href: z.string().min(1),
})

const iconItem = z.object({
    icon: icon.optional(),
    title: z.string().min(1),
    description: z.string().min(1),
})

const stat = z.object({
    value: z.string().min(1),
    label: z.string().min(1),
})

const plan = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    tagline: z.string().optional(),
    /** Omit for a fixed-price package where hours are not the unit of sale. */
    hours: z.number().positive().optional(),
    price: z.number().nonnegative(),
    currency: z.string().default('EUR'),
    /** "month" is the subscription cadence; "once" for one-off add-ons. */
    period: z.enum(['month', 'once']).default('month'),
    features: z.array(z.string().min(1)).min(1),
    recommended: z.boolean().default(false),
    cta: link.optional(),
    footnote: z.string().optional(),
})

export const proposalSchema = z.object({
    version: z.literal(1),
    /** Must equal the file name (without .json). This is the URL token. */
    token: z
        .string()
        .min(16)
        .regex(/^[a-z0-9-]+$/, 'token: lowercase letters, digits and dashes only'),
    locale: z.enum(['it', 'en']).default('it'),
    status: z.enum(['draft', 'sent', 'accepted', 'declined', 'expired']).default('sent'),
    reference: z.string().min(1),
    issuedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    validUntil: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /** Tiny custom accent (hex). Falls back to the site's sky accent. */
    accent: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .optional(),

    client: z.object({
        name: z.string().min(1),
        contactName: z.string().optional(),
        product: z.string().optional(),
        website: z.string().url().optional(),
        logoUrl: z.string().url().optional(),
    }),

    hero: z.object({
        eyebrow: z.string().optional(),
        title: z.string().min(1),
        subtitle: z.string().min(1),
        stats: z.array(stat).max(4).optional(),
    }),

    context: z
        .object({
            title: z.string().min(1),
            paragraphs: z.array(z.string().min(1)).min(1),
            cards: z.array(iconItem).max(6).optional(),
        })
        .optional(),

    howItWorks: z
        .object({
            title: z.string().min(1),
            subtitle: z.string().optional(),
            steps: z
                .array(z.object({ title: z.string().min(1), description: z.string().min(1) }))
                .min(2)
                .max(6),
        })
        .optional(),

    plans: z.object({
        title: z.string().min(1),
        subtitle: z.string().optional(),
        items: z.array(plan).min(1).max(3),
        /** Show the computed "≈ €/hour" line under each price. */
        showHourlyRate: z.boolean().default(false),
        note: z.string().optional(),
    }),

    included: z
        .object({
            title: z.string().min(1),
            subtitle: z.string().optional(),
            items: z.array(iconItem).min(1).max(9),
        })
        .optional(),

    terms: z
        .object({
            title: z.string().min(1),
            subtitle: z.string().optional(),
            items: z.array(z.object({ title: z.string().min(1), description: z.string().min(1) })).min(1),
        })
        .optional(),

    about: z
        .object({
            title: z.string().min(1),
            paragraphs: z.array(z.string().min(1)).min(1),
            facts: z.array(stat).max(4).optional(),
            testimonials: z
                .array(
                    z.object({
                        name: z.string().min(1),
                        title: z.string().min(1),
                        avatar: z.string().optional(),
                        quote: z.string().min(1),
                    }),
                )
                .max(3)
                .optional(),
        })
        .optional(),

    faq: z
        .object({
            title: z.string().min(1),
            items: z.array(z.object({ question: z.string().min(1), answer: z.string().min(1) })).min(1),
        })
        .optional(),

    cta: z.object({
        title: z.string().min(1),
        subtitle: z.string().optional(),
        primary: link,
        secondary: link.optional(),
    }),

    footer: z
        .object({
            note: z.string().optional(),
        })
        .optional(),
})

export type Proposal = z.infer<typeof proposalSchema>
export type ProposalInput = z.input<typeof proposalSchema>
export type ProposalPlan = Proposal['plans']['items'][number]
