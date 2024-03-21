import Link from 'next/link'

import { TclRoutes } from '@/config/routes'
import { HeaderLinks } from '@/config/tcl'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    return (
        <>
            <ul className='hidden space-x-2 md:flex'>
                {HeaderLinks.map((link) => (
                    <li key={link.text}>
                        <Link
                            className='rounded px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-accent-foreground'
                            href={link.href}
                            scroll>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>

            <Button asChild className='bg-gradient-to-br from-purple-600 to-indigo-500 font-semibold' size='sm'>
                <Link href={TclRoutes.Pricing}>Lancia la tua carriera </Link>
            </Button>
        </>
    )
}
export default Navbar
