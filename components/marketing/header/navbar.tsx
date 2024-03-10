import Link from 'next/link'

import { type HeaderLinks } from '@/types/links'
import { Button } from '@/components/ui/button'

interface NavbarProps {
    links: HeaderLinks
    ctaText: string
    ctaHref: string
    ctaClassName: string
}

const Navbar = (props: NavbarProps) => {
    return (
        <>
            <ul className='hidden space-x-2 md:flex'>
                {props.links.map((link) => (
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

            <Button asChild className={props.ctaClassName} size='sm'>
                <Link href={props.ctaHref}>{props.ctaText}</Link>
            </Button>
        </>
    )
}
export default Navbar
