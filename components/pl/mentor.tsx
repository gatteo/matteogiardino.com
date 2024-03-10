import * as React from 'react'
import Image from 'next/image'

const personalAchievements = [
    { title: "Kangourou dell'Informatica", subtitle: 'Finalista Nazionale, 2016/2017' },
    { title: 'Vincitore Droidcon Hackathon', subtitle: 'Edizioni 2018 e 2019' },
    { title: 'Forbes Top 100 under 30', subtitle: 'Anno 2019/2020' },
    { title: 'Freelancer e Dipendente (Google)', subtitle: 'Dal 2018 al 2021' },
    { title: 'Fondatore di Westudents SRL, Oltre, Devv, Wezard, Testy', subtitle: 'Dal 2019 ad oggi' },
]

export function Mentor() {
    return (
        <section id='mentor' className='lg:pt-8'>
            <div className='max-w-3xl'>
                <h2 className='text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl lg:text-5xl'>
                    Sono Matteo Giardino e sarò la tua{' '}
                    <span className='underline decoration-yellow-400 underline-offset-4'>guida</span>.
                </h2>
            </div>

            <div className='flex flex-col justify-between md:flex-row'>
                <p className='my-8 text-neutral-600 dark:text-neutral-400 md:w-6/12 lg:text-lg'>
                    A 17 anni avevo un sogno: creare un social network, un po' come Facebook. Dopo poco ho realizzato
                    che ne la scuola, ne l'università mi avrebbero aiutato a realizzare questo sogno. Così ho
                    abbandonato gli studi.
                    <br />
                    <br />
                    La sera, quando gli amici uscivano a divertirsi, io stavo a casa a formarmi.
                    <br />
                    <br />
                    È stato il periodo più difficile della mia vita, perché non avevo una guida, un percorso da seguire,
                    nessuno che potesse dirmi come fare.
                    <br />
                    <br />
                    Dopo molti errori e sforzi sono riuscito ad imparare a programmare e creare quello che sognavo
                    (Westudents, un social che oggi ha quasi 500.000 utenti).
                    <br />
                    <br />
                    Nel tempo grazie alla programmazione ho ricevuto offerte di lavoro da aziende come Google e lavorato
                    per startup di successo.
                    <br />
                    <br />
                    Da allora ho un solo obiettivo: aiutare le persone che vogliono imparare a programmare per cambiare
                    la loro vita, proprio come me.
                </p>
                <div className='mt-8 h-full md:w-5/12'>
                    <div className='grid grid-flow-row grid-cols-2 gap-6 md:gap-8'>
                        <Image
                            src='/images/home/6.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto hidden -rotate-3 rounded-xl drop-shadow-2xl transition-all duration-200 hover:rotate-0 md:block'
                        />

                        <Image
                            src='/images/home/8.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl'
                        />
                        <Image
                            src='/images/home/1.gif'
                            alt=''
                            loading='lazy'
                            unoptimized
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl'
                        />

                        <Image
                            src='/images/home/4.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl'
                        />

                        <Image
                            src='/images/tcl/me-1.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto rounded-lg drop-shadow-2xl md:hidden'
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between md:flex-row'>
                <div className='relative mr-auto h-full md:w-5/12'>
                    <div className='my-8 flex flex-col gap-8 md:grid md:grid-cols-2'>
                        <Image
                            src='/images/home/3.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto hidden rounded-lg drop-shadow-2xl md:block'
                        />

                        <Image
                            src='/images/tcl/me-1.webp'
                            alt=''
                            loading='lazy'
                            width={500}
                            height={500}
                            className='m-auto hidden rounded-lg drop-shadow-2xl md:block'
                        />
                        <Image
                            src='/images/tcl/mentor-3.webp'
                            alt=''
                            loading='lazy'
                            width={1000}
                            height={500}
                            className='col-span-2 m-auto rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0'
                        />
                    </div>
                </div>
                <div className='mt-8 md:w-6/12'>
                    <ol className='relative ml-2 border-l border-neutral-200 dark:border-neutral-700'>
                        {personalAchievements.map((achievement) => (
                            <li className='mb-8 ml-6' key={achievement.title}>
                                <div className='absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-yellow-500' />
                                <h3 className='mb-1 text-lg font-semibold text-neutral-900 dark:text-white'>
                                    {achievement.title}
                                </h3>
                                <p className='text-base font-normal text-neutral-500 dark:text-neutral-400'>
                                    {achievement.subtitle}
                                </p>
                            </li>
                        ))}
                    </ol>
                    {/* <p className="text-neutral-600 dark:text-neutral-400 lg:text-xl">
                        Con questo percorso voglio svelati i segreti del settore e permetterti di raggiungere i tuoi
                        obiettivi professionali.
                        <br />
                    </p> */}
                </div>
            </div>
        </section>
    )
}
