'use client'

import * as React from 'react'

export function FAQ({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = React.useState(false)

    return (
        <div key={question}>
            <dl className='mx-auto max-w-2xl'>
                <dt className='text-sm'>
                    <button
                        type='button'
                        className='flex w-full items-start justify-between py-6 text-left text-neutral-400'
                        aria-controls={`faq-${index}`}
                        onClick={() => setOpen((e) => !e)}>
                        <span className='font-sm text-neutral-900 dark:text-white'>{question}</span>
                        <span className='ml-6 flex h-7 items-center'>
                            <svg
                                className={`arrow-down size-6 rotate-0 duration-300${open ? 'rotate-180' : ''}`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'></path>
                            </svg>
                        </span>
                    </button>
                </dt>
                <dd
                    className={`flex ${open ? 'max-h-max' : 'max-h-0'} overflow-hidden pr-12 duration-300 ease-in-out`}
                    id={`faq-${index}`}>
                    <p className='pb-6 text-base text-neutral-600 dark:text-neutral-400'>{answer}</p>
                </dd>
            </dl>
        </div>
    )
}
