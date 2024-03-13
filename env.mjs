import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'production']),
        PAYPAL_API_URL: z.string().min(1),
        PAYPAL_CLIENT_SECRET: z.string().min(1),
        SLACK_PAYMENTS_WEBHOOK_URL: z.string().min(1),
        SPOTIFY_CLIENT_ID: z.string().min(1),
        SPOTIFY_CLIENT_SECRET: z.string().min(1),
        SPOTIFY_REFRESH_TOKEN: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_PAYPAL_CLIENT_ID: z.string().min(1),
        NEXT_PUBLIC_STRIPE_TCL_LINK: z.string().min(1),
        NEXT_PUBLIC_STRIPE_PL_LINK: z.string().min(1),
        NEXT_PUBLIC_GTM_MEASUREMENT_ID: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        PAYPAL_API_URL: process.env.PAYPAL_API_URL,
        NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        PAYPAL_CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
        SLACK_PAYMENTS_WEBHOOK_URL: process.env.SLACK_PAYMENTS_WEBHOOK_URL,
        NEXT_PUBLIC_STRIPE_TCL_LINK: process.env.NEXT_PUBLIC_STRIPE_TCL_LINK,
        NEXT_PUBLIC_STRIPE_PL_LINK: process.env.NEXT_PUBLIC_STRIPE_PL_LINK,
        NEXT_PUBLIC_GTM_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GTM_MEASUREMENT_ID,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    },
})
