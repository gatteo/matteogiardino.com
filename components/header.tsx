import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MobileNav from '@/components/mobile-nav'
import Navbar from '@/components/navbar'

const Header = () => {
    return (
        <header className='fixed inset-x-0 top-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/80 dark:saturate-100'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                    <div className='hidden dark:block'>
                        <Image src={'/static/images/mg-logo-white.png'} height={28} width={28} alt='Logo' />
                    </div>
                    <div className='dark:hidden'>
                        <Image
                            className='rounded-lg'
                            src={'/static/images/mg-logo-black.png'}
                            height={28}
                            width={28}
                            alt='Logo'
                        />
                    </div>
                </Link>
                <div className='flex items-center gap-2'>
                    <Navbar />
                    {/* <CommandMenu /> */}
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
