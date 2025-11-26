import { NextRequest } from 'next/server'
import { z } from 'zod'

import { APIResponse } from '@/lib/api'
import { capturePayPalPayment } from '@/lib/paypal'
import { notifyOfPayPalPurchase } from '@/lib/slack'

const CapturePaymentSchema = z.object({
    orderId: z.string(),
})

export const POST = async (req: NextRequest, { params }: { params: Promise<{ orderId: string }> }) => {
    try {
        const resolvedParams = await params
        const safeParams = CapturePaymentSchema.parse(resolvedParams)

        const order = await capturePayPalPayment(safeParams.orderId)

        console.log('Captured PayPal Payment', order)

        // send email to customer

        // send slack message to admin
        try {
            await notifyOfPayPalPurchase(
                order.payer.email_address,
                order.purchase_units[0].payments.captures[0].seller_receivable_breakdown.net_amount.value,
            )
        } catch (e) {}

        return APIResponse.success(order, 201)
    } catch (error: any) {
        console.error('[API] Error capturing PayPal payment', error)

        if (error instanceof z.ZodError) {
            return APIResponse.error('Invalid data', 422, error.errors)
        }

        return APIResponse.error(error.message)
    }
}
