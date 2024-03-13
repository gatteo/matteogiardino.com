import { NextRequest } from 'next/server'
import { z } from 'zod'

import { ProductPrices, ProductSKU } from '@/config/products'
import { APIResponse } from '@/lib/api'
import { createPayPalOrder } from '@/lib/paypal'

const CreateOrderSchema = z.object({
    sku: z.nativeEnum(ProductSKU),
})

export const POST = async (req: NextRequest) => {
    try {
        const json = await req.json()
        const body = CreateOrderSchema.parse(json)

        const order = await createPayPalOrder(ProductPrices[body.sku])

        console.log('Created PayPal order', order)

        return APIResponse.success(order, 201)
    } catch (error: any) {
        console.error('[API] Error creating PayPal order', error)

        if (error instanceof z.ZodError) {
            return APIResponse.error('Invalid data', 422, error.errors)
        }

        return APIResponse.error(error.message)
    }
}
