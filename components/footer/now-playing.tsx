'use client'

import { motion } from 'framer-motion'
import useSWR from 'swr'

import { ApiResponseSuccess, GetSongResponse } from '@/types/api'
import { ApiRoutes } from '@/config/routes'
import { fetcher } from '@/lib/fetcher'

function AnimatedBars() {
    return (
        <div className='flex w-auto items-end overflow-hidden'>
            <motion.span
                className='mr-[3px] h-2 w-1 rounded-t-sm bg-gray-300 opacity-75 dark:bg-gray-500'
                animate={{
                    transform: [
                        'scaleY(1.0) translateY(0rem)',
                        'scaleY(1.5) translateY(-0.082rem)',
                        'scaleY(1.0) translateY(0rem)',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.span
                animate={{
                    transform: [
                        'scaleY(1.0) translateY(0rem)',
                        'scaleY(3) translateY(-0.083rem)',
                        'scaleY(1.0) translateY(0rem)',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='mr-[3px] size-1 rounded-t-sm bg-gray-300 dark:bg-gray-500'
            />
            <motion.span
                animate={{
                    transform: [
                        'scaleY(1.0)  translateY(0rem)',
                        'scaleY(0.5) translateY(0.37rem)',
                        'scaleY(1.0)  translateY(0rem)',
                    ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='h-3 w-1 rounded-t-sm bg-gray-300 opacity-80 dark:bg-gray-500'
            />
        </div>
    )
}

const NowPlaying = () => {
    const { data: response } = useSWR<ApiResponseSuccess<GetSongResponse>>(ApiRoutes.GetSong, fetcher)

    return (
        <div className='flex items-center gap-4'>
            <svg
                stroke='currentColor'
                fill='#1ed760'
                strokeWidth='0'
                viewBox='0 0 496 512'
                height='20'
                width='20'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z'></path>
            </svg>

            {response?.data?.isPlaying ? <AnimatedBars /> : null}

            <div className='inline-flex w-full items-center justify-center gap-1 text-sm md:justify-start'>
                <p>
                    {response?.data?.isPlaying ? (
                        <>
                            <a
                                href='https://open.spotify.com/user/1189222906'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <span className='text-muted-foreground'>In questo momento sto ascoltando </span>
                                {response.data.name}
                                <span className='text-muted-foreground'> - {response.data.artist}</span>
                            </a>
                        </>
                    ) : (
                        'In questo momento non sto ascoltando musica.'
                    )}
                </p>
            </div>
        </div>
    )
}

export default NowPlaying
