export enum ApiStatus {
    Success = 'SUCCESS',
    Error = 'ERROR',
}

export type ApiResponseSuccess<T> = {
    status: 'SUCCESS'
    code: string
    data: T
}

export type ApiResponseError = {
    status: 'ERROR'
    code: string
    message: string
    visible: boolean
    message_history: string
    error_history: {
        message: string
        status: number
        code: string
        data: unknown
        visible: boolean
    }[]
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError

export type GetSongResponse = {
    isPlaying?: boolean
    name: string
    artist: string
    album: string
    albumImage: string
    songUrl: string
}

export type CreatePayPalOrderResponse = {
    id: string
    // ... some other fields
}

/** Example response:
{
    "id": "5N0258154D237152G",
    "status": "COMPLETED",
    "payment_source": {
        "paypal": {
            "email_address": "sb-l6zv14916488@personal.example.com",
            "account_id": "78AXCBTHDUL24",
            "account_status": "VERIFIED",
            "name": {
                "given_name": "John",
                "surname": "Doe"
            },
            "address": {
                "country_code": "IT"
            }
        }
    },
    "purchase_units": [
        {
            "reference_id": "default",
            "shipping": {
                "name": {
                    "full_name": "John Doe"
                },
                "address": {
                    "address_line_1": "Via Unit? d'Italia",
                    "admin_area_2": "Napoli",
                    "admin_area_1": "Napoli",
                    "postal_code": "80127",
                    "country_code": "IT"
                }
            },
            "payments": {
                "captures": [
                    {
                        "id": "6DB2270259909754G",
                        "status": "COMPLETED",
                        "amount": {
                            "currency_code": "USD",
                            "value": "100.00"
                        },
                        "final_capture": true,
                        "seller_protection": {
                            "status": "ELIGIBLE",
                            "dispute_categories": [
                                "ITEM_NOT_RECEIVED",
                                "UNAUTHORIZED_TRANSACTION"
                            ]
                        },
                        "seller_receivable_breakdown": {
                            "gross_amount": {
                                "currency_code": "USD",
                                "value": "100.00"
                            },
                            "paypal_fee": {
                                "currency_code": "USD",
                                "value": "3.70"
                            },
                            "net_amount": {
                                "currency_code": "USD",
                                "value": "96.30"
                            }
                        },
                        "links": [
                            {
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/6DB2270259909754G",
                                "rel": "self",
                                "method": "GET"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/6DB2270259909754G/refund",
                                "rel": "refund",
                                "method": "POST"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/checkout/orders/5N0258154D237152G",
                                "rel": "up",
                                "method": "GET"
                            }
                        ],
                        "create_time": "2023-07-25T06:42:35Z",
                        "update_time": "2023-07-25T06:42:35Z"
                    }
                ]
            }
        }
    ],
    "payer": {
        "name": {
            "given_name": "John",
            "surname": "Doe"
        },
        "email_address": "sb-l6zv14916488@personal.example.com",
        "payer_id": "78AXCBTHDUL24",
        "address": {
            "country_code": "IT"
        }
    },
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/5N0258154D237152G",
            "rel": "self",
            "method": "GET"
        }
    ]
}
*/
export type CapturePayPalOrderResponse = {
    id: string
    status: string
    payment_source: {
        paypal: {
            email_address: string
            account_id: string
            account_status: string
            name: {
                given_name: string
                surname: string
            }
            address: {
                country_code: string
            }
        }
    }
    purchase_units: Array<{
        reference_id: string
        shipping: {
            name: {
                full_name: string
            }
            address: {
                address_line_1: string
                admin_area_2: string
                admin_area_1: string
                postal_code: string
                country_code: string
            }
        }
        payments: {
            captures: Array<{
                id: string
                status: string
                amount: {
                    currency_code: string
                    value: string
                }
                final_capture: boolean
                seller_protection: {
                    status: string
                    dispute_categories: Array<string>
                }
                seller_receivable_breakdown: {
                    gross_amount: {
                        currency_code: string
                        value: string
                    }
                    paypal_fee: {
                        currency_code: string
                        value: string
                    }
                    net_amount: {
                        currency_code: string
                        value: string
                    }
                }
                links: Array<{
                    href: string
                    rel: string
                    method: string
                }>
                create_time: string
                update_time: string
            }>
        }
    }>
    payer: {
        name: {
            given_name: string
            surname: string
        }
        email_address: string
        payer_id: string
        address: {
            country_code: string
        }
    }
    links: Array<{
        href: string
        rel: string
        method: string
    }>
    debug_id: string
    details: Array<{
        issue: string
        description: string
        debug_id: string
    }>
}
