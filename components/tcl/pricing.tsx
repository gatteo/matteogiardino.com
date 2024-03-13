import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AmazonLogo from 'public/images/brands/amazon.svg'
import GoogleLogo from 'public/images/brands/google.svg'
import NetflixLogo from 'public/images/brands/netflix.svg'
import WezardLogo from 'public/images/brands/wezard.svg'

import { env } from '@/env.mjs'
import { ProductSKU } from '@/config/products'
import { Button } from '@/components/ui/button'
import { PayPalButton } from '@/components/marketing/paypal-button'

const paymentBulletPoints = [
    'Mentoring 1-1 con Matteo Giardino',
    'Preparazione a 360° al colloquio di lavoro',
    'Partecipa come spettatore ad un colloquio vero',
    'Lascia a bocca aperta i recruiter',
    'Ottieni il lavoro e la paga che meriti',
]

export function Pricing() {
    return (
        <section id='pricing' className='relative isolate py-24 md:pt-44'>
            <div
                aria-hidden='true'
                className='absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80'>
                <div className='h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-purple-700'></div>
                <div className='h-32 bg-gradient-to-r from-indigo-400 to-sky-300 blur-[106px] dark:to-indigo-600'></div>
            </div>
            <div className='absolute inset-0 -z-10'>
                <svg
                    className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-slate-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]'
                    aria-hidden='true'>
                    <defs>
                        <pattern
                            id='e813992c-7d03-4cc4-a2bd-151760b470a0'
                            width={100}
                            height={100}
                            x='50%'
                            y={-1}
                            patternUnits='userSpaceOnUse'>
                            <path d='M100 200V.5M.5 .5H200' fill='none' />
                        </pattern>
                    </defs>

                    <rect
                        width='100%'
                        height='100%'
                        strokeWidth={0}
                        fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)'
                    />
                </svg>
            </div>
            <div className='mx-auto'>
                <div className='m-auto text-center lg:w-8/12 xl:w-7/12'>
                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
                        Avvia la tua carriera da programmatore oggi
                    </h2>
                </div>
                <div className='mt-12 md:mt-20'>
                    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
                    <div className='animate-shine dark:accent-1 relative overflow-hidden rounded-3xl border border-slate-900 bg-zinc-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl'>
                        <div className='flex flex-col gap-12 divide-y p-8 dark:divide-gray-800 sm:p-20 md:flex-row md:divide-x md:divide-y-0'>
                            <div className='text-center md:w-5/12'>
                                <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>Tech Career Launch</h3>
                                <p className='text-lg text-gray-600 dark:text-gray-300'>
                                    Lancia la tua carriera da programmatore
                                </p>
                                <span className='mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white'>
                                    <span className='text-4xl text-primary dark:text-gray-200'>$</span>249
                                </span>

                                <div className='flex-col justify-center'>
                                    <Button asChild className='mb-2 w-full' size='sm'>
                                        <Link href={env.NEXT_PUBLIC_STRIPE_TCL_LINK as string}>Paga con carta</Link>
                                    </Button>
                                    <PayPalButton fundingType={'paypal'} productSKU={ProductSKU.TCL} />
                                    <PayPalButton fundingType={'paylater'} productSKU={ProductSKU.TCL} />
                                </div>

                                <p className='mt-2 text-xs text-gray-500 dark:text-gray-400'>
                                    Pagamento unico e protetto da SSL. Nessun abbonamento o costo aggiuntivo.
                                </p>
                            </div>
                            <div className='relative md:w-7/12 md:pl-12'>
                                <ul className='space-y-4 py-6 text-gray-600 dark:text-gray-200'>
                                    {paymentBulletPoints.map((feature) => (
                                        <li className='flex items-center space-x-2' key={feature}>
                                            <svg
                                                className='size-5 shrink-0 text-purple-500 dark:text-purple-400'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                                    clipRule='evenodd'></path>
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className='text-sm text-gray-700 dark:text-gray-400'>
                                    Acquistando avrai anche accesso illimitato e gratuito a tutti i corsi premium di
                                    devv.it per 12 mesi.
                                </p>
                                <div className='mt-12 flex flex-wrap items-center justify-between gap-6 grayscale dark:brightness-200 dark:contrast-0'>
                                    <Image className='h-4 w-auto' src={WezardLogo} alt='Wezard logo' height='24' />
                                    <Image className='h-4 w-auto' src={NetflixLogo} alt='Netflix logo' height='24' />
                                    <Image className='h-6 w-auto' src={GoogleLogo} alt='Google logo' height='40' />
                                    <Image className='h-5 w-auto' src={AmazonLogo} alt='Amazon logo' height='28' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
