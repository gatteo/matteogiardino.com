import * as React from 'react'
import Image from 'next/image'
import Logo from 'public/images/tcb/boost.png'

export function Hero() {
    return (
        <section
            id='hero'
            className='relative isolate h-screen'
            aria-label='Il primo corso di programmazione adatto a tutti'>
            {/* Background blur */}
            <div
                aria-hidden='true'
                className='absolute inset-0 top-16 m-auto grid h-max grid-cols-2 -space-x-52 opacity-40'>
                <div className='h-60 bg-gradient-to-br from-primary to-pink-400 blur-3xl dark:from-pink-700'></div>
                <div className='h-72 rounded-full bg-gradient-to-r from-rose-400 to-rose-300 blur-3xl dark:from-transparent dark:to-rose-600'></div>
            </div>

            {/* Grid */}
            <div aria-hidden='true' className='absolute inset-0 -z-10 opacity-70 md:opacity-100'>
                <svg className='absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-neutral-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]'>
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

            {/* Content */}
            <div className='-mt-20 flex h-screen pt-8 text-center sm:px-12 md:pt-0'>
                <div className='m-auto flex flex-col items-center'>
                    <p className='inline-block rounded-md bg-accent bg-opacity-20 px-2 py-1 text-sm'>⏳ Coming Soon</p>
                    <h1 className='mt-6 text-5xl font-black dark:text-white md:text-6xl xl:text-6xl'>
                        Tech Career
                        <Image src={Logo} alt='logo' className='m-auto h-full w-[60%] fill-current' />
                    </h1>
                    <div className=''>
                        <p className='m-auto mt-8 text-lg text-gray-100 sm:max-w-[60%]'>
                            Una mentorship 1-1 per programmatori che vogliono fare il salto di Seniority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
