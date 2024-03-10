import Link from 'next/link'

export function Topbar() {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className='animate-shine flex items-center justify-center  bg-muted bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat py-3'>
            <p className='text-sm'>✨ riaprono le iscrizioni del corso Programmatore Leggendario ✨</p>
            <Link href='/' className='ml-2 text-sm underline underline-offset-2' aria-label='Homepage'>
                iscriviti ora.
            </Link>
        </div>
    )
}
