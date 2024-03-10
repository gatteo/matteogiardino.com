import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LogoImage from '/public/images/products/tcb-logo.webp'

const Header = () => {
    return (
        <header className='fixed inset-x-0 top-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/80 dark:saturate-100'>
            <div className='mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8'>
                <Link href='/' className='flex items-center justify-center gap-1' aria-label='Homepage'>
                    <div className='block'>
                        <Image src={LogoImage} placeholder='blur' height={60} width={70} alt='Tech Career Boost Logo' />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
