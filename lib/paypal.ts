import { env } from '@/env.mjs'
import { CapturePayPalOrderResponse, CreatePayPalOrderResponse } from '@/types/api'

export async function generateAccessToken() {
    const auth = Buffer.from(env.NEXT_PUBLIC_PAYPAL_CLIENT_ID + ':' + env.PAYPAL_CLIENT_SECRET).toString('base64')

    const response = await fetch(`${env.PAYPAL_API_URL}/v1/oauth2/token`, {
        method: 'POST',
        body: 'grant_type=client_credentials',
        headers: {
            Authorization: `Basic ${auth}`,
        },
    })

    const data = await response.json()
    return data.access_token
}

export async function createPayPalOrder(amount: string) {
    const accessToken = await generateAccessToken()

    const response = await fetch(`${env.PAYPAL_API_URL}/v2/checkout/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'EUR',
                        value: amount,
                    },
                },
            ],
        }),
    })

    const data = (await response.json()) as CreatePayPalOrderResponse
    return data
}

export async function capturePayPalPayment(orderId: string) {
    const accessToken = await generateAccessToken()

    const response = await fetch(`${env.PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    })

    const data = (await response.json()) as CapturePayPalOrderResponse
    return data
}
