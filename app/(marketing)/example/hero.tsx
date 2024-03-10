import React from 'react'

const Section: React.FC = () => {
    return (
        <div className='relative' id='home'>
            {/* Background blur */}
            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-16 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl'>
                <div className='h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-purple-700'></div>
                <div className='h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600'></div>
            </div>

            <div className='mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0'>
                <div className='relative ml-auto pt-20'>
                    <div className='gap-12 md:flex md:items-center'>
                        <div className='text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2'>
                            <h1 className='text-5xl font-black dark:text-white md:text-6xl xl:text-7xl'>
                                Tech Career Launch
                                <img
                                    src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png'
                                    alt='Rocket'
                                    width='64'
                                    height='64'
                                    className='ml-2  inline-block fill-current'
                                />
                            </h1>
                            <div className=''>
                                <p className='mt-8 text-lg text-gray-100'>
                                    Un percorso di mentoring 1-1 per studenti di informatica e aspiranti programmatori
                                    che vogliono trovare il primo lavoro.
                                </p>
                                <div className='mt-12 flex justify-center gap-2 sm:gap-6 md:justify-start'>
                                    <a
                                        href='#pricing'
                                        className='rounded-xl bg-purple-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                                        Inizia ora
                                    </a>
                                    <a
                                        href='#pricing'
                                        className='border-accent-5 rounded-xl border px-4 py-2.5 text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                                        Scopri di più
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5'>
                            <div className='-ml-6 md:-mr-72 lg:mr-0'>
                                <img
                                    className='h-full object-cover object-left dark:hidden'
                                    src='https://astrolus-premium.netlify.app/images/hero-dark.webp'
                                    alt='app screenshot'
                                    width='1628'
                                    height='1233'
                                />
                                <img
                                    className='hidden h-full object-cover object-left dark:block'
                                    src='https://astrolus-premium.netlify.app/images/hero-dark.webp'
                                    alt='app screenshot'
                                    width='1628'
                                    height='1233'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16'>
                        <span className='text-sm font-semibold tracking-wider text-gray-800 dark:text-white'>
                            I MIEI STUDENTI ORA LAVORANO DA
                        </span>
                        <div className='mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24'>
                            <img
                                className='h-8 w-auto lg:h-10'
                                src='https://astrolus-premium.netlify.app/images/clients/google.svg'
                                loading='lazy'
                                alt='airbnb'
                                width='100'
                                height=''
                            />
                            <img
                                className='h-6 w-auto lg:h-10'
                                src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                loading='lazy'
                                alt='bissell'
                                width='100'
                                height=''
                            />
                            <img
                                className='h-6 w-auto lg:h-10'
                                src='https://astrolus-premium.netlify.app/images/clients/google.svg'
                                loading='lazy'
                                alt='ge'
                                width='100'
                                height='100'
                            />
                            <img
                                className='h-6 w-auto lg:h-10'
                                src='https://astrolus-premium.netlify.app/images/clients/netflix.svg'
                                loading='lazy'
                                alt='lilly'
                                width='100'
                                height='100'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
