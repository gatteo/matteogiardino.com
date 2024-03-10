import * as React from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import Navbar from './navbar'
import NavbarMobile from './navbar-mobile'

interface HeaderProps {
    logoForLightMode: ImageProps['src']
    logoForDarkMode: ImageProps['src']
    links: React.ComponentProps<typeof NavbarMobile>['links']
    ctaClassName: string
    ctaText: string
    ctaHref: string
}

const Header = (props: HeaderProps) => {
    return (
        <header className='fixed inset-x-0 top-0 z-40 bg-background/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:saturate-100'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                    <div className='dark:hidden'>
                        <Image src={props.logoForLightMode} height={60} width={70} alt='Logo' />
                    </div>

                    <div className='hidden dark:block'>
                        <Image src={props.logoForDarkMode} height={60} width={70} alt='Logo' />
                    </div>
                </Link>
                <div className='flex items-center gap-2'>
                    <Navbar
                        links={props.links}
                        ctaClassName={props.ctaClassName}
                        ctaHref={props.ctaHref}
                        ctaText={props.ctaText}
                    />
                    <NavbarMobile links={props.links} />
                </div>
            </div>
        </header>
    )
}

export default Header
