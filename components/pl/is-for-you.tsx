import * as React from 'react'

const forYouIf = [
    'Vuoi imparare a programmare da zero o migliorare le tue competenze esistenti.',
    'Cerchi una guida chiara, passo per passo',
    'Vuoi iniziare una carriera da programmatore',
    'Vuoi migliorare la tua carriera attuale con la programmazione',
    'Vuoi imparare facendo pratica su esercizi reali',
    'Vuoi imparare come creare un tuo progetto',
    'Desideri entrare in una community di persone come te',
    'Sei disposto a dedicare tempo ed impegno',
]

const notForYouIf = [
    'Hai già delle solide competenze di programmazione ',
    'Lavori già come sviluppatore e sei soddisfatto',
    'Vuoi imparare la programmazione studiando solo la teoria',
    'Sai già tutto quello che serve per creare un tuo progetto',
    'Non sei interessato a una carriera alto pagante da programmatore',
    'Preferisci prepararti da solo, senza una guida',
    'Non sei disposto a dedicare tempo ed impegno per imparare',
]

export function IsForYou() {
    return (
        <section id='is-for-you' className='border-b border-neutral-700 pb-16 lg:pb-24'>
            <div className='max-w-2xl'>
                <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-5xl'>
                    Programmatore Leggendario{'  '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>non è per tutti</span>.
                </h2>
                <p className='font-light text-neutral-400 lg:text-xl'>
                    Scopri se Programmatore Leggendario fa al caso tuo o no.
                </p>
            </div>
            <div className='mt-12 flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-8 lg:gap-16'>
                <div className=''>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-3xl'>
                        Fa per te se:
                    </h2>
                    <ul className='my-6 space-y-5 border-neutral-700 md:border-t md:pt-8'>
                        {forYouIf.map((item) => (
                            <li className='flex space-x-3' key={item}>
                                <svg
                                    className='size-5 shrink-0 dark:text-green-400'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                        clipRule='evenodd'></path>
                                </svg>
                                <span className='text-base font-medium leading-tight text-neutral-900 dark:text-white'>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-neutral-500 dark:text-neutral-400 lg:text-lg'>
                        Programmatore Leggendario è il corso perfetto per chi vuole imparare a programmare e vuole una
                        guida pratica e chiara.
                    </p>
                </div>

                <div className=''>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-3xl'>
                        Non fa per te se:
                    </h2>
                    <ul className='my-6 space-y-5 border-neutral-700 md:border-t md:pt-8'>
                        {notForYouIf.map((item) => (
                            <li className='flex space-x-3' key={item}>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    className='-mt-0.5 size-5 shrink-0 text-red-500 dark:text-red-400'>
                                    <circle cx='12' cy='12' r='10'></circle>
                                    <line x1='15' y1='9' x2='9' y2='15'></line>
                                    <line x1='9' y1='9' x2='15' y2='15'></line>
                                </svg>
                                <span className='text-base font-medium leading-tight text-neutral-900 dark:text-white'>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-neutral-500 dark:text-neutral-400 lg:text-lg'>
                        Programmatore non è adatto a chi è già esperto di programmazione o ha delle solide basi.
                    </p>
                </div>
            </div>
        </section>
    )
}
