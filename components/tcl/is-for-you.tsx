const forYouIf = [
    'Sei uno studente di informatica o un aspirante programmatore',
    'Sai già programmare ma non lavori ancora',
    'Vuoi trovare un lavoro alto pagante da programmatore',
    'Vuoi superare con successo il colloquio di lavoro',
    'Vuoi imparare a distinguerti dagli altri candidati',
    'A volte hai dubbi su come avviare la tua carriera e vorresti di una guida',
    'Vuoi imparare dall’ esperienza di un mentore di successo gli errori da non commettere',
]

const notForYouIf = [
    'Devi ancora imparare a programmare',
    'Lavori già come sviluppatore e sei soddisfatto',
    'Sai già trucchi e strategie dei colloqui di lavoro',
    'Ti senti già pronto per il mondo del lavoro',
    'Non sei interessato a una carriera alto pagante da programmatore',
    'Preferisci prepararti da solo, senza una guida',
    'Non sei disposto a dedicare tempo ed impegno per avviare la tua carriera.',
]

export function IsForYou() {
    return (
        <section id='is-for-you' className='border-b border-gray-700 pb-16 pt-32 lg:pb-24'>
            <div className='max-w-3xl'>
                <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-5xl'>
                    Tech Career Launch{'  '}
                    <span className='underline decoration-purple-400 underline-offset-4'>non è per tutti</span>.
                </h2>
                <p className='font-light text-gray-400 lg:text-xl'>Scopri se Tech Career Launch fa al caso tuo o no</p>
            </div>
            <div className='mt-12 flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-8 lg:gap-16'>
                <div className=''>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-3xl'>
                        Fa per te se:
                    </h2>
                    <ul className='my-6 space-y-5 border-gray-700 md:border-t md:pt-8'>
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
                                <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-gray-500 dark:text-gray-400 lg:text-lg'>
                        Tech Career Launch è il percorso perfetto per chi vuole avviare una carriera di successo come
                        programmatore
                    </p>
                </div>

                <div className=''>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-3xl'>
                        Non fa per te se:
                    </h2>
                    <ul className='my-6 space-y-5 border-gray-700 md:border-t md:pt-8'>
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
                                <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className='text-gray-500 dark:text-gray-400 lg:text-lg'>
                        Sei già in cima alla tua carriera o preferisci intraprendere un altro percorso.
                    </p>
                </div>
            </div>
        </section>
    )
}
