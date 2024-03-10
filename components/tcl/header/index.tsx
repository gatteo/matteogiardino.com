import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MobileNav from './mobile-nav'
import Navbar from './navbar'
import LogoImage from '/public/images/tcl/tcl-v1.webp'

const Header = () => {
    return (
        <header className='fixed inset-x-0 top-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/80 dark:saturate-100'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                    <div className='block'>
                        <Image
                            src={LogoImage}
                            placeholder='blur'
                            height={60}
                            width={70}
                            alt='Tech Career Launch Logo'
                        />
                    </div>
                </Link>
                <div className='flex items-center gap-2'>
                    <Navbar />
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
