import Link from 'next/link'

export const metadata = {
    title: '404',
}

const NotFound = () => {
    return (
        <div className="mb-40 mt-52 flex flex-col items-center justify-center gap-12">
            <h1 className="text-center text-6xl font-bold">404 Ooopz non c'è nulla qui</h1>
            <Link
                href="/"
                className="rounded-lg border border-accent-2 px-3 py-2 transition-colors duration-150 hover:bg-accent-2">
                Vai alla home
            </Link>
        </div>
    )
}

export default NotFound
