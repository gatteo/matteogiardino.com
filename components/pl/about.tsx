import { Rating } from '@/components/marketing/rating'

export function About() {
    return (
        <section id='what-is' className='pt-32' aria-label="Che cos'è Programmatore Leggendario">
            {/* Heading */}
            <div className='mx-auto max-w-2xl md:text-center'>
                <Rating className='mb-8 md:flex md:items-center' average={4.97} count={316} />
                <h2 className='font-display mb-4 text-3xl font-bold tracking-tight lg:text-5xl'>
                    Il corso ✨ pluripremiato ✨ per imparare a programmare
                </h2>
                <p className='mb-8 text-neutral-400 lg:text-xl'>
                    Programmatore leggendario è un corso di Matteo Giardino per imparare a programmare e sviluppare la
                    mentalità del programmatore di successo. Comprende 45+ lezioni interattive, 35+ sfide e progetti
                    reali, un certificato, una community e molto altro.
                </p>
            </div>

            {/* Features */}
            <div className='mt-12 md:mt-20'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3'>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-center gap-4 md:flex-col md:items-center '>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <path
                                    opacity='.5'
                                    d='M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'></path>
                                <path
                                    opacity='.3'
                                    d='M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'></path>
                                <path
                                    d='M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z'
                                    fill='#fff'></path>
                            </svg>

                            <h3 className='text-xl font-semibold text-yellow-400  md:max-w-[70%] md:text-center'>
                                45+ Videolezioni Interattive
                            </h3>
                        </div>
                        <p className='mt-4 text-neutral-400 md:mt-2 md:text-center'>
                            Imparerai i concetti chiave della programmazione e JavaScript.
                        </p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-center gap-4 md:flex-col md:items-center'>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <defs>
                                    <linearGradient
                                        id=':Rardm:'
                                        x1='11.5'
                                        y1='18'
                                        x2='36'
                                        y2='15.5'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop offset='.194' stopColor='#fff'></stop>
                                        <stop offset='1' stopColor='#14213b'></stop>
                                    </linearGradient>
                                </defs>
                                <path
                                    d='m30 15-4 5-4-11-4 18-4-11-4 7-4-5'
                                    stroke='url(#:Rardm:)'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'></path>
                            </svg>
                            <h3 className='text-xl font-semibold text-yellow-400 md:max-w-[70%] md:text-center'>
                                35+ Progetti Reali e Certificato Finale
                            </h3>
                        </div>
                        <p className='mt-4 text-neutral-400 md:mt-2 md:text-center'>
                            Scriverai programmi reali e otterrai un attestato valido per il lavoro.
                        </p>
                    </div>
                    <div className='flex flex-col justify-items-center'>
                        <div className='flex items-center gap-4 md:flex-col md:items-center'>
                            <svg aria-hidden='true' className='size-9 rounded-lg bg-neutral-800 md:mx-auto' fill='none'>
                                <path
                                    opacity='.5'
                                    d='M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z'
                                    fill='#fff'></path>
                                <path
                                    d='M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z'
                                    fill='#fff'></path>
                            </svg>
                            <h3 className='text-xl font-semibold text-yellow-400 md:max-w-[70%] md:text-center'>
                                Accesso a Community Privata
                            </h3>
                        </div>

                        <p className='mt-4 text-neutral-400 md:mt-2 md:text-center'>
                            Un luogo esclusivo e sicuro dove confrontarti e ricevere supporto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
