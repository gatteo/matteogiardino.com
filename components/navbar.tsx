'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UtmUrl } from '@/utils/urls'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

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
    const t = useTranslations('navigation')

    return (
        <NavigationMenu className='hidden md:block'>
            <NavigationMenuList key={'navbar'}>
                {/* Per le aziende */}
                <NavigationMenuItem key='business-menu-item'>
                    <NavigationMenuTrigger>{t('business')}</NavigationMenuTrigger>
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
                                            {t('businessServices')}
                                        </div>
                                        <p className='mt-2 text-sm leading-tight text-sky-100'>
                                            {t('businessDescription')}
                                        </p>
                                        <p className='mt-4 text-sm underline underline-offset-2'>
                                            {t('discoverServices')} <ArrowUpRight className='ml-1 inline-block size-4' />
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
                    <NavigationMenuTrigger>{t('learningProducts')}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[400px] grid-cols-1 gap-2 p-4 md:w-[500px] lg:w-[500px]'>
                            {products.map((product) => (
                                <React.Fragment key={product.title}>
                                    <ListItem
                                        key={product.title}
                                        title={product.title}
                                        href={UtmUrl(product.url, {
                                            medium: UtmMediums.Navbar,
                                        })}
                                        target='_blank'
                                        image={product.pictogram}
                                        badge={product.badge}
                                        className='dark:hidden'>
                                        {product.description}
                                    </ListItem>
                                    <ListItem
                                        key={product.title + '-dark'}
                                        title={product.title}
                                        href={UtmUrl(product.url, {
                                            medium: UtmMediums.Navbar,
                                        })}
                                        target='_blank'
                                        image={product.pictogramDark}
                                        badge={product.badge}
                                        className='hidden dark:block'>
                                        {product.description}
                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem key='projects-menu-item'>
                    <NavigationMenuLink
                        active={pathname === Routes.Projects}
                        className={navigationMenuTriggerStyle()}
                        asChild>
                        <Link
                            href={UtmUrl(Routes.Projects, {
                                medium: UtmMediums.Navbar,
                            })}>
                            {t('projects')}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem key='contacts-menu-item'>
                    <NavigationMenuLink
                        active={pathname === Routes.Contact}
                        className={navigationMenuTriggerStyle()}
                        asChild>
                        <Link
                            href={UtmUrl(Routes.Contact, {
                                medium: UtmMediums.Navbar,
                            })}>
                            {t('contacts')}
                        </Link>
                    </NavigationMenuLink>
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
>(({ className, title, image, badge, icon, children, href, target, ...props }, _ref) => {
    return (
        <li key={props.key}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        'focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent',
                        className,
                    )}
                    target={target || '_self'}
                    {...props}>
                    <div className='flex flex-row items-center gap-4'>
                        {image ? (
                            <Image
                                src={image}
                                height={40}
                                width={80}
                                alt='Logo'
                                className='h-fit w-[80px] rounded-sm opacity-70'
                            />
                        ) : null}

                        <div className='flex flex-1 flex-col'>
                            <div className='flex flex-row gap-1'>
                                <div className=' flex items-center text-sm font-semibold leading-tight'>
                                    {title}{' '}
                                    {badge && (
                                        <Badge className='mb-1 ml-2 p-1 px-2' variant={'secondary'}>
                                            {badge}
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
