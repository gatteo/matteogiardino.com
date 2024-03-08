'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FOOTER_CONTACTS, FOOTER_LINKS, FOOTER_SOCIAL_MEDIA } from '@/config/links'
import { products } from '@/config/products'

import NowPlaying from './now-playing'

export function Footer() {
    return (
        <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
            <NowPlaying />

            <div className='mt-12 grid grid-cols-2 md:grid-cols-4'>
                <div className='col-span-2 mb-10 flex flex-col items-start gap-4 sm:col-span-1'>
                    {FOOTER_CONTACTS.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className='hover:text-accent-fg text-muted-foreground transition-colors duration-150'>
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className='col-span-2 mb-10 flex flex-col items-start gap-4 pr-4 md:hidden'>
                    <div className='grid w-full grid-cols-2 gap-2 sm:grid-cols-4'>
                        {products.map((p) => (
                            <Link key={p.title} href={p.href} target='_blank'>
                                <Image
                                    src={p.image}
                                    height={80}
                                    width={100}
                                    key={p.title}
                                    alt={p.title}
                                    className='hidden'
                                />
                                <Image
                                    src={p.imageDark}
                                    height={80}
                                    width={100}
                                    key={p.title}
                                    alt={p.title}
                                    className='hidden dark:hidden'
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {FOOTER_LINKS.map((list) => (
                    <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
                        {list.links.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className='hover:text-accent-fg text-muted-foreground transition-colors duration-150'>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                ))}
                <div className='mb-10 flex flex-col items-start gap-4 pr-4'>
                    {FOOTER_SOCIAL_MEDIA.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className='hover:text-accent-fg text-muted-foreground transition-colors duration-150'
                            target='_blank'
                            rel='noopener noreferrer'>
                            {link.title}
                        </a>
                    ))}
                </div>
                <div className='mb-10 hidden flex-col items-start gap-4 pr-4 md:flex'>
                    {products.map((p) => (
                        <Link key={p.title} href={p.href} target='_blank'>
                            <Image src={p.image} height={80} width={100} alt={p.title} className='dark:hidden' />
                            <Image
                                src={p.imageDark}
                                height={80}
                                width={100}
                                key={p.title}
                                alt={p.title}
                                className='hidden dark:block'
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-sm'>&copy; Matteo Giardino, {new Date().getFullYear()}</div>
        </footer>
    )
}
