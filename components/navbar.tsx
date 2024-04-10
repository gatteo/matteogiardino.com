'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UtmUrl } from '@/utils/urls'
import { ArrowUpRight } from 'lucide-react'

import { UtmMediums } from '@/types/links'
import { products } from '@/config/products'
import { Routes } from '@/config/routes'
import { services } from '@/config/services'
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

import { CalendarButton } from './calendar-button'
import { Icons } from './icon'
import { Badge } from './ui/badge'

export function Navbar() {
    const pathname = usePathname()

    return (
        <NavigationMenu className='hidden md:block'>
            <NavigationMenuList key={'navbar'}>
                {/* Per le aziende */}
                <NavigationMenuItem key='business-menu-item'>
                    <NavigationMenuTrigger>per le aziende</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid gap-2 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                            <li className='row-span-3'>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className='flex size-full select-none flex-col justify-end rounded-md bg-opacity-20 bg-gradient-to-b from-sky-700 to-sky-950 p-3 no-underline outline-none focus:shadow-md'
                                        href={UtmUrl(Routes.Services, {
                                            medium: UtmMediums.Navbar,
                                        })}>
                                        <div className='text-lg font-semibold leading-tight'>
                                            servizi per le aziende
                                        </div>
                                        <p className='mt-2 text-sm leading-tight text-sky-100'>
                                            aiuto aziende e imprenditori a sbloccare il loro potenziale con la
                                            tecnologia.
                                        </p>
                                        <p className='mt-4 text-sm underline underline-offset-2'>
                                            scopri tutti i servizi <ArrowUpRight className='ml-1 inline-block size-4' />
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            {services.map((service) => (
                                <ListItem
                                    key={service.title}
                                    href={UtmUrl(service.url, {
                                        medium: UtmMediums.Navbar,
                                    })}
                                    title={service.title}
                                    icon={service.icon}>
                                    {service.short_desctiption}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Prodotti di formazione */}
                <NavigationMenuItem key='learn-menu-item'>
                    <NavigationMenuTrigger>prodotti di formazione</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[400px] grid-cols-1 gap-2 p-4 md:w-[500px] lg:w-[500px]'>
                            {products.map((product) => (
                                <React.Fragment key={product.title}>
                                    <ListItem
                                        {...product}
                                        key={product.title}
                                        href={UtmUrl(product.url, {
                                            medium: UtmMediums.Navbar,
                                        })}
                                        target='_blank'
                                        className='dark:hidden'>
                                        {product.description}
                                    </ListItem>
                                    <ListItem
                                        {...product}
                                        key={product.title + '-dark'}
                                        href={UtmUrl(product.url, {
                                            medium: UtmMediums.Navbar,
                                        })}
                                        target='_blank'
                                        image={product.imageDark}
                                        className='hidden dark:block'>
                                        {product.description}
                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem key='projects-menu-item'>
                    <Link
                        href={UtmUrl(Routes.Projects, {
                            medium: UtmMediums.Navbar,
                        })}
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Projects}
                            className={navigationMenuTriggerStyle()}>
                            progetti
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem key='contacts-menu-item'>
                    <Link
                        href={UtmUrl(Routes.Contact, {
                            medium: UtmMediums.Navbar,
                        })}
                        legacyBehavior
                        passHref>
                        <NavigationMenuLink
                            active={pathname === Routes.Contact}
                            className={navigationMenuTriggerStyle()}>
                            contatti
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem key='calendar-menu-item'>
                    <CalendarButton variant='ghost' />
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
        icon?: keyof typeof Icons
    }
>(({ className, title, image, children, ...props }, _ref) => {
    return (
        <li key={props.key}>
            <NavigationMenuLink asChild>
                <Link
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

                        <div className='flex flex-1 flex-col'>
                            <div className='flex flex-row gap-1'>
                                <div className='items-center text-sm font-semibold leading-tight'>
                                    {title}{' '}
                                    {props.badge && (
                                        <Badge className='ml-2' variant={'secondary'}>
                                            {props.badge}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <p className='mt-1 line-clamp-2 text-sm leading-tight text-muted-foreground'>{children}</p>
                        </div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = 'ListItem'
