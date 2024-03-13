import { NextResponse } from 'next/server'

export const APIResponse = {
    error: (error: string, status?: number, data?: any) => {
        return NextResponse.json({ success: false, error, data }, { status: status || 500 })
    },
    success: (data: any, status?: number) => {
        return NextResponse.json({ success: true, data }, { status: status || 200 })
    },
    notFound: () => {
        return NextResponse.json({ success: false, error: 'Resource not found' }, { status: 404 })
    },
    missingAuth: () => {
        return NextResponse.json({ success: false, error: 'Missing authentication' }, { status: 401 })
    },
    missingPermissions: () => {
        return NextResponse.json({ success: false, error: 'Missing permissions' }, { status: 403 })
    },
}
