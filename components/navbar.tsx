'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronRightSquare, Shrub, Target } from 'lucide-react'

import { Products } from '@/config/products'
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Navbar() {
    const pathname = usePathname()

    return (
        <NavigationMenu className='hidden md:block'>
            <NavigationMenuList>
                {/* Per le aziende */}
                <NavigationMenuItem key='business-menu-item'>
                    <NavigationMenuTrigger>Per le aziende</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid gap-2 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                            <li className='row-span-3'>
                                <NavigationMenuLink asChild>
                                    <a
                                        className='flex size-full select-none flex-col justify-end rounded-md bg-opacity-20 bg-gradient-to-b from-sky-700 to-sky-950 p-3 no-underline outline-none focus:shadow-md'
                                        href='/services'>
                                        <div className='text-lg font-semibold leading-tight'>
                                            Servizi per le aziende
                                        </div>
                                        <p className='mt-2 text-sm leading-tight text-sky-100'>
                                            Aiuto aziende e imprenditori a sbloccare il loro potenziale con la
                                            tecnologia.
                                        </p>
                                        <p className='mt-4 text-sm underline underline-offset-2'>
                                            Scopri tutti i servizi <ArrowUpRight className='inline-block size-4' />
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href='/services#development' icon={ChevronRightSquare} title='Sviluppo App e Web'>
                                Trasformo le tue idee in prodotti digitali.
                            </ListItem>
                            <ListItem
                                href='/services#product-and-growth-advisory'
                                icon={Shrub}
                                title='Product & Growth Advisory'>
                                Porto il tuo prodotto al prossimo livello.
                            </ListItem>
                            <ListItem href='/services#cto-as-a-service' icon={Target} title='CTO as a Service'>
                                Gestisco le sfide tecniche del tuo prodotto.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Prodotti di formazione */}
                <NavigationMenuItem key='learn-menu-item'>
                    <NavigationMenuTrigger>Prodotti di formazione</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[400px] grid-cols-1 gap-3 p-4 md:w-[500px] lg:w-[500px] '>
                            {Products.map((product) => (
                                <>
                                    <ListItem key={product.title} target='_blank' {...product} className='dark:hidden'>
                                        {product.description}
                                    </ListItem>
                                    <ListItem
                                        key={product.title}
                                        target='_blank'
                                        {...product}
                                        image={product.imageDark}
                                        className='hidden dark:block'>
                                        {product.description}
                                    </ListItem>
                                </>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem key='projects-menu-item'>
                    <Link href='/projects' legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === '/projects'} className={navigationMenuTriggerStyle()}>
                            Progetti
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem key='contacts-menu-item'>
                    <Link href='/contacts' legacyBehavior passHref>
                        <NavigationMenuLink active={pathname === '/contacts'} className={navigationMenuTriggerStyle()}>
                            Contatti
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & {
        title: string
        href: string
        image?: string
        badge?: string
        icon?: React.ElementType
    }
>(({ className, title, image, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent',
                        className,
                    )}
                    target={props.target || '_self'}
                    {...props}>
                    <div className='flex flex-row items-center gap-4'>
                        {image ? (
                            <Image
                                src={image}
                                height={40}
                                width={80}
                                alt='Logo'
                                className='h-fit w-[80px] opacity-70'
                            />
                        ) : null}

                        {props.icon ? (
                            <div className='flex size-10 items-center justify-center rounded-xl bg-sky-500'>
                                <props.icon
                                    className='size-6 text-black'
                                    size={48}
                                    strokeWidth={2}
                                    color={'black'}
                                    aria-hidden='true'
                                />
                            </div>
                        ) : null}

                        <div className='flex flex-1 flex-col'>
                            <div className='flex flex-row gap-1'>
                                <div className='text-sm font-semibold leading-tight'>
                                    {title}{' '}
                                    {props.badge ? (
                                        <span className='ml-2 rounded-sm bg-slate-600 px-2 py-1 text-xs font-semibold leading-none text-white'>
                                            {props.badge}
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                            <p className='mt-1 line-clamp-2 text-sm leading-tight text-muted-foreground'>{children}</p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = 'ListItem'
