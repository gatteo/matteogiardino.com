import type { Proposal } from './schema'

/** UI chrome strings. Proposal content itself is authored in the proposal file. */
export const proposalLabels = {
    it: {
        confidential: 'Proposta riservata',
        preparedFor: 'Preparata per',
        preparedBy: 'Preparata da',
        issuedOn: 'Data',
        validUntil: 'Valida fino al',
        reference: 'Rif.',
        recommended: 'Consigliato',
        perMonth: '/mese',
        once: 'una tantum',
        hoursPerMonth: 'ore al mese',
        hoursOnce: 'ore',
        perHour: 'all’ora',
        choosePlan: 'Scegli questo piano',
        step: 'Passo',
        expiredTitle: 'Questa proposta è scaduta',
        expiredBody: 'I termini e i prezzi indicati non sono più garantiti. Scrivimi e la aggiorno in giornata.',
        acceptedTitle: 'Proposta accettata',
        acceptedBody: 'Grazie per la fiducia. Ci sentiamo a breve per partire.',
        draftTitle: 'Bozza',
        draftBody: 'Questa proposta è ancora in lavorazione e potrebbe cambiare.',
        footerNote:
            'Documento riservato, preparato esclusivamente per il destinatario. Ti chiedo di non condividere il link.',
        contact: 'Domande? Scrivimi a',
        toggleTheme: 'Cambia tema',
    },
    en: {
        confidential: 'Private proposal',
        preparedFor: 'Prepared for',
        preparedBy: 'Prepared by',
        issuedOn: 'Date',
        validUntil: 'Valid until',
        reference: 'Ref.',
        recommended: 'Recommended',
        perMonth: '/month',
        once: 'one-off',
        hoursPerMonth: 'hours per month',
        hoursOnce: 'hours',
        perHour: 'per hour',
        choosePlan: 'Choose this plan',
        step: 'Step',
        expiredTitle: 'This proposal has expired',
        expiredBody: 'Terms and prices shown are no longer guaranteed. Drop me a line and I will refresh it today.',
        acceptedTitle: 'Proposal accepted',
        acceptedBody: 'Thank you for the trust. We will be in touch shortly to kick off.',
        draftTitle: 'Draft',
        draftBody: 'This proposal is still being worked on and may change.',
        footerNote: 'Confidential document prepared exclusively for the recipient. Please do not share the link.',
        contact: 'Questions? Write to',
        toggleTheme: 'Toggle theme',
    },
} as const

export type ProposalLabels = (typeof proposalLabels)[Proposal['locale']]

export function getLabels(locale: Proposal['locale']): ProposalLabels {
    return proposalLabels[locale]
}

export function formatMoney(amount: number, currency: string, locale: Proposal['locale']) {
    return new Intl.NumberFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
        style: 'currency',
        currency,
        maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount)
}

export function formatDate(iso: string, locale: Proposal['locale']) {
    return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(`${iso}T12:00:00`))
}
