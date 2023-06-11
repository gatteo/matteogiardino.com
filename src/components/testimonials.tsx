import React from 'react'

import Image from './mdx/image'

const Testimonials = [
    {
        name: 'Ryan Florence',
        title: 'Co-author of React Router',
        avatar: '/static/images/testimonials/ryan-florence.jpg',
        testimonial: 'I feel like an idiot for not thinking of this myself.',
    },
    {
        name: 'Michael Chan',
        title: 'Author of React Patterns',
        avatar: '/static/images/testimonials/michael-chan.jpg',
        testimonial: 'Holy crap, this is amazing!',
    },
    {
        name: 'Kent C. Dodds',
        title: 'Author of Testing JavaScript',
        avatar: '/static/images/testimonials/kent-c-dodds.jpg',
        testimonial: 'This is the best thing since sliced bread!',
    },
    {
        name: 'Eve Porcello',
        title: 'Author of Learning React',
        avatar: '/static/images/testimonials/eve-porcello.jpg',
        testimonial: 'I love this so much!',
    },
    {
        name: 'Chris Biscardi',
        title: 'Author of Learn Next.js',
        avatar: '/static/images/testimonials/chris-biscardi.jpg',
        testimonial: 'This is exactly what I needed',
    },
    {
        name: 'Jen Luker',
        title: 'Author of Build a Career in Tech',
        avatar: '/static/images/testimonials/jen-luker.jpg',
        testimonial: 'This is exactly what I needed',
    },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof Testimonials)[0] }) => {
    return (
        <li className="text-sm leading-6">
            <figure className="dark:highlight-white/5 relative flex flex-col-reverse rounded-lg bg-slate-50 p-6 dark:bg-accent-1">
                <blockquote className="mt-6 text-slate-700 dark:text-gray-300">
                    <p>{testimonial.testimonial} </p>
                </blockquote>
                <figcaption className="flex items-center space-x-4">
                    <img
                        src="/static/images/projects/devv/icon.png"
                        alt=""
                        className="h-14 w-14 flex-none rounded-xl object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="flex-auto">
                        <div className="text-base font-semibold text-slate-900 dark:text-white">
                            <a href="https://twitter.com/ryanflorence/status/1187951799442886656" tabIndex="0">
                                <span className="absolute inset-0"></span>
                                {testimonial.name}
                            </a>
                        </div>
                        <div className="mt-0.5 dark:text-accent-5">{testimonial.title}</div>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default function TestimonialsSection() {
    return (
        <section className="md:mt-16">
            {/* Testimonial expanded */}
            <div className="relative isolate overflow-hidden px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img className="mx-auto h-12" src="/static/images/testimonials/revenue-farm-blue.png" alt="" />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-accent-7 sm:text-2xl sm:leading-9">
                            <p>
                                “Ho avuto modo di conoscere persone{' '}
                                <strong className="underline decoration-sky-400 underline-offset-4">
                                    competenti sul lato tecnico{' '}
                                </strong>
                                e persone competenti sul lato commerciale e di crescita. Poche persone comprendono in
                                profondità tutti e due i temi e sanno portare valore ovunque serva a livello sia pratico
                                che strategico,{' '}
                                <strong className="underline decoration-sky-400 underline-offset-4">
                                    Matteo è uno di questi unicorni{' '}
                                </strong>
                                ”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <Image
                                className="mx-auto h-10 w-10 rounded-full"
                                src="/static/images/testimonials/pietro-campanella.jpeg"
                                width={40}
                                height={40}
                                alt="Pietro campanella"
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold ">Pietro Campanella</div>
                                <svg
                                    viewBox="0 0 2 2"
                                    width={3}
                                    height={3}
                                    aria-hidden="true"
                                    className="fill-gray-300">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-300">CEO @ Revenue Farm</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>

            {/* Testimonial card */}
            <div className="grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-3">
                <ul className="space-y-4">
                    {Testimonials.slice(0, 2).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
                <ul className="space-y-4">
                    {Testimonials.slice(2, 4).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
                <ul className="space-y-4">
                    {Testimonials.slice(4, 6).map((e) => (
                        <TestimonialCard key={e.name} testimonial={e} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
