import Image from 'next/image'

import type { Proposal } from '@/lib/proposals/schema'

import { Emphasis, Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function ProposalAbout({ about }: { about: NonNullable<Proposal['about']> }) {
    return (
        <Section id='about'>
            <div className='grid gap-10 lg:grid-cols-5'>
                <Reveal className='lg:col-span-3'>
                    <SectionHeading title={about.title} />
                    <div className='mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg'>
                        {about.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                <Emphasis text={paragraph} />
                            </p>
                        ))}
                    </div>

                    {about.facts && about.facts.length > 0 && (
                        <dl className='mt-8 grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4'>
                            {about.facts.map((fact) => (
                                <div key={fact.label}>
                                    <dt className='text-2xl font-bold tracking-tight'>{fact.value}</dt>
                                    <dd className='mt-1 text-sm text-muted-foreground'>{fact.label}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                </Reveal>

                {about.testimonials && about.testimonials.length > 0 && (
                    <Reveal delay={0.1} className='grid gap-3 self-start lg:col-span-2'>
                        {about.testimonials.map((testimonial) => (
                            <figure key={testimonial.name} className='rounded-md border bg-muted p-5'>
                                <blockquote className='text-sm leading-relaxed'>“{testimonial.quote}”</blockquote>
                                <figcaption className='mt-4 flex items-center gap-3'>
                                    {testimonial.avatar ? (
                                        <Image
                                            src={testimonial.avatar}
                                            alt=''
                                            width={36}
                                            height={36}
                                            className='size-9 rounded-full object-cover'
                                        />
                                    ) : (
                                        <span className='flex size-9 items-center justify-center rounded-full border bg-background text-xs font-semibold'>
                                            {testimonial.name
                                                .split(' ')
                                                .map((part) => part[0])
                                                .join('')
                                                .slice(0, 2)}
                                        </span>
                                    )}
                                    <div>
                                        <p className='text-sm font-semibold'>{testimonial.name}</p>
                                        <p className='text-xs text-muted-foreground'>{testimonial.title}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </Reveal>
                )}
            </div>
        </Section>
    )
}
