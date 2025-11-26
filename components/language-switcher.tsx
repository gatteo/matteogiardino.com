'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Check, Globe } from 'lucide-react'
import { useLocale } from 'next-intl'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const languages = [
    { code: 'it', label: 'Italiano', short: 'IT' },
    { code: 'en', label: 'English', short: 'EN' },
]

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname() // Returns full pathname including locale prefix (e.g., '/en/about' or '/')

    const switchLocale = (newLocale: string) => {
        // Remove current locale prefix if it exists (e.g., '/en/about' -> '/about')
        const pathWithoutLocale = pathname.replace(/^\/(en|it)/, '') || '/'

        // Build new path based on locale
        // Italian (default) has no prefix: '/about'
        // English has '/en' prefix: '/en/about'
        const newPath = newLocale === 'it' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`

        router.push(newPath)
    }

    const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm' className='gap-2 hover:bg-accent hover:text-accent-foreground'>
                    <Globe className='size-4' />
                    <span>{currentLanguage.short}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='min-w-[140px]'>
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => switchLocale(language.code)}
                        className={cn(
                            'flex cursor-pointer items-center justify-between',
                            locale === language.code && 'bg-accent font-medium',
                        )}>
                        <span>{language.label}</span>
                        {locale === language.code && <Check className='size-4' />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
