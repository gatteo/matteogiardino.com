'use client'

import Image from 'next/image'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'

import { UtmMediums } from '@/types/links'
import { ContactLinks, FooterLinkGroups, SocialLinks } from '@/config/links'
import { products } from '@/config/products'

import { CalendarButton } from '../calendar-button'
import NowPlaying from './now-playing'

export function Footer() {
    return (
        <footer className='mx-auto flex max-w-5xl flex-col px-8 pb-8'>
            <NowPlaying />

            <div className='mt-12 grid grid-cols-2 md:grid-cols-4'>
                <div className='col-span-2 mb-10 flex flex-col items-start gap-4 sm:col-span-1'>
                    {ContactLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={`mailto:${link.mailto}`}
                            className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
                            {link.mailto}
                        </Link>
                    ))}
                    <CalendarButton />
                </div>

                <div className='col-span-2 mb-10 flex flex-col items-start gap-4 pr-4 md:hidden'>
                    <div className='grid w-full grid-cols-2 gap-2 sm:grid-cols-4'>
                        {products.map((p) => (
                            <Link
                                key={p.id}
                                href={UtmUrl(p.url, {
                                    medium: UtmMediums.Footer,
                                })}
                                target='_blank'>
                                <Image src={p.image} height={80} width={100} alt={p.title} className='hidden' />
                                <Image
                                    src={p.imageDark}
                                    height={80}
                                    width={100}
                                    alt={p.title}
                                    className='hidden dark:hidden'
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {FooterLinkGroups.map((list) => (
                    <div key={list.id} className='mb-10 flex flex-col items-start gap-4 pr-4'>
                        {list.links.map((link) => (
                            <Link
                                key={link.title}
                                href={UtmUrl(link.href, {
                                    medium: UtmMediums.Footer,
                                })}
                                className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                ))}

                <div className='mb-10 flex flex-col items-start gap-4 pr-4'>
                    {SocialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            className='text-muted-foreground transition-colors duration-150 hover:text-accent-foreground'
                            target='_blank'
                            rel='noopener noreferrer'>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className='mb-10 hidden flex-col items-start gap-4 pr-4 md:flex'>
                    {products.map((p) => (
                        <Link
                            key={p.id}
                            href={UtmUrl(p.url, {
                                medium: UtmMediums.Footer,
                            })}
                            target='_blank'>
                            <Image src={p.image} height={80} width={100} alt={p.title} className='dark:hidden' />
                            <Image
                                src={p.imageDark}
                                height={80}
                                width={100}
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
