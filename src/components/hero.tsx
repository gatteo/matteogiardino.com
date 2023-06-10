'use client'
import Image from 'next/image'

import { useCommandsMenu } from '@/providers/commands-menu'

const Hero = () => {
    const { setOpen } = useCommandsMenu()

    return (
        <>
            <div className="-mt-24 flex min-h-screen flex-col md:justify-center">
                <div className="flex flex-col-reverse gap-8 pt-24 md:flex-row md:justify-between md:pt-0">
                    <div className="md:max-w-lg">
                        {/* Name */}
                        <h1 className="animate-fade-in text-4xl font-bold sm:text-5xl">Matteo Giardino</h1>

                        {/* Occupation and description */}
                        <div className="my-6 space-y-2">
                            <h2 className="flex flex-wrap gap-x-2 text-sm font-medium leading-8 md:text-base">
                                <span>Founder & CTO @ </span>
                                <a
                                    href="https://westudents.it"
                                    className="inline-block transition-colors hover:text-sky-400">
                                    <Image
                                        src="/static/images/projects/westudents/icon.png"
                                        alt="Westudents logo"
                                        width={24}
                                        height={24}
                                        className="-mt-1 mr-1 inline-block h-6 rounded border border-accent-3"
                                    />
                                    Westudents{' '}
                                </a>
                                <a href="https://devv.it" className="inline-block transition-colors hover:text-sky-400">
                                    <Image
                                        src="/static/images/projects/devv/icon.png"
                                        alt="Devv logo"
                                        width={24}
                                        height={24}
                                        className="-mt-1 mr-1 inline-block h-6 rounded border border-accent-3"
                                    />
                                    Devv{' '}
                                </a>
                                <a
                                    href="https://wezard.it"
                                    className="inline-block transition-colors hover:text-sky-400">
                                    <Image
                                        src="/static/images/wezard-icon.png"
                                        alt="Devv logo"
                                        width={24}
                                        height={24}
                                        className="-mt-1 mr-1 inline-block h-6 rounded border border-accent-3"
                                    />
                                    Wezard{' '}
                                </a>
                            </h2>

                            <p className=" text-accent-5 md:text-lg">
                                Un programmatore innamorato della tecnologia, imprenditore innamorato delle idee ed
                                educatore innamorato della condivisione.
                            </p>
                        </div>

                        {/* Command */}
                        <button
                            className="group -ml-2 flex space-x-2 rounded-md p-2 transition-all duration-150 hover:bg-hover"
                            onClick={() => setOpen(true)}>
                            <span className="text-sm">Premi</span>{' '}
                            <div className="inline-block w-5 rounded-md bg-gray-300 text-sm text-gray-900 dark:bg-gray-400">
                                <span className="flex justify-center">⌘</span>
                            </div>{' '}
                            <span className="text-sm">+ </span>
                            <div className="inline-block w-5 rounded-md bg-gray-300 text-sm text-gray-900 dark:bg-gray-400">
                                <span className="flex justify-center">K</span>
                            </div>{' '}
                            <span className="text-sm">per iniziare </span>
                            <span className="pr-2 text-sm transition duration-200 group-hover:translate-x-2"> → </span>
                        </button>
                    </div>

                    {/* <div className='h-20 w-20 md:h-28 md:w-28'>
                            <Image
                            src='/static/images/avatar.png'
                            width={112}
                            height={112}
                            alt='Matteo Giardino'
                            rounded='rounded-full'
                            loading='eager'
                            priority
                            />
                        </div> */}
                </div>
                {/* <div className="flex gap-6">
                    {HERO_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noopener noreferrer">
                            {link.icon}
                        </a>
                    ))}
                </div> */}
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-50 max-h-screen w-screen">
                {/* Scroll down */}
                <div className="absolute bottom-0 left-0 right-0 mb-4">
                    <button
                        className="mx-auto flex rounded p-2 transition-colors hover:bg-hover"
                        aria-label="Learn more about me">
                        <p className="mr-2">Ti racconto chi sono, in 30 secondi </p>
                        <p className="inline-block animate-bounce"> ↓ </p>
                    </button>
                </div>

                {/* background grid */}
                <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 -z-50 inline-block bg-[url(/static/images/bg-grid.svg)] bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>

                {/* background profile image */}
                <div className="absolute inset-0 bottom-0 left-auto right-0 top-auto -z-50 h-[35%] w-full bg-[url(/static/images/profile.png)] bg-contain bg-bottom bg-no-repeat [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] sm:h-[45%] md:h-full md:w-1/2"></div>
            </div>
        </>
    )
}

export default Hero
