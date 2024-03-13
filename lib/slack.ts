import { env } from '@/env.mjs'

export async function notifyOfPayPalPurchase(email: string, amount: string): Promise<void> {
    if (env.NODE_ENV !== 'production') return

    const message = `:money_mouth_face: New Purchase with PayPal - ${email} *${amount}*`

    try {
        const response = await fetch(env.SLACK_PAYMENTS_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })

        if (!response.ok) {
            throw new Error(`Failed to send Slack notification. Status: ${response.status}`)
        }
    } catch (error: any) {
        console.error('Error sending Slack notification:', error.message)
    }
}
