'use client'

import * as React from 'react'
import type { FUNDING_SOURCE } from '@paypal/paypal-js'
import { FUNDING, PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

import { env } from '@/env.mjs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const initialOptions = {
    'clientId': env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
    'enable-funding': 'paylater,venmo',
    'currency': 'EUR',
}

type Props = {
    productSKU: string
    fundingType: FUNDING_SOURCE
}

export function PayPalButton({ fundingType, productSKU }: Props) {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const [dialogTitle, setDialogTitle] = React.useState('')
    const [dialogDescription, setDialogDescription] = React.useState('')

    const showErrorMessage = (errorMessage?: string) => {
        setDialogTitle("C'è stato un errore con il tuo pagamento..")
        setDialogDescription(
            `Ho riscontrato un errore con il tuo pagamento, ti preghiamo di riprovare più tardi. (${errorMessage})`,
        )
        setDialogOpen(true)
    }

    return (
        <div style={{ colorScheme: 'none' }}>
            <Dialog open={dialogOpen} onOpenChange={(o) => setDialogOpen(o)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{dialogTitle}</DialogTitle>
                        <DialogDescription>{dialogDescription}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    fundingSource={fundingType}
                    key={fundingType}
                    style={{
                        layout: 'vertical',
                        shape: 'rect',
                        color: fundingType === FUNDING.PAYLATER ? 'gold' : 'blue',
                        height: 36,
                    }}
                    createOrder={async (data, actions) => {
                        try {
                            const response = await fetch('/api/paypal/orders', {
                                method: 'POST',
                                body: JSON.stringify({
                                    sku: productSKU,
                                }),
                            })

                            const details = await response.json()

                            return details.order.id
                        } catch (error) {
                            console.error(error)
                            showErrorMessage(error as string)
                        }
                    }}
                    onApprove={async (data, actions) => {
                        try {
                            console.log('PayPal Approve', data)

                            const response = await fetch(`/api/paypal/orders/${data.orderID}/capture`, {
                                method: 'POST',
                            })

                            const details = (await response.json()).order
                            // Three cases to handle:
                            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                            //   (2) Other non-recoverable errors -> Show a failure message
                            //   (3) Successful transaction -> Show confirmation or thank you message

                            // This example reads a v2/checkout/orders capture response, propagated from the server
                            // You could use a different API or structure for your 'orderData'
                            const errorDetail = Array.isArray(details.details) && details.details[0]

                            if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                                return actions.restart()
                                // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                            }

                            if (errorDetail) {
                                let msg = ''
                                msg += errorDetail.description ? ' ' + errorDetail.description : ''
                                msg += details.debug_id ? ' - ' + details.debug_id + ' ' : ''
                                showErrorMessage(msg)
                            }

                            setDialogTitle(`${details.payer.name.given_name}, il pagamento è andato a buon fine 🎉`)
                            setDialogDescription(
                                'Grazie del tuo pagamento, ora non ti resta che aspettare di ricevere una mail con le indicazioni su come procedere!',
                            )
                            setDialogOpen(true)
                        } catch (error) {
                            console.error(error)
                            // Handle the error or display an appropriate error message to the user
                            showErrorMessage(error as string)
                        }
                    }}
                    onError={(error) => {
                        console.error(error)
                        showErrorMessage()
                    }}
                />
            </PayPalScriptProvider>
        </div>
    )
}
