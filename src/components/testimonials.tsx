import React from 'react'

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
                    <img
                        className="mx-auto h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                        alt=""
                    />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-accent-7 sm:text-2xl sm:leading-9">
                            <p>
                                “In questa sezione dovrebbero esserci delle recensioni, ma ancora non ho avuto il tempo
                                di chiederle. Lascio spazio alla tua immaginazione”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold ">Judith Black</div>
                                <svg
                                    viewBox="0 0 2 2"
                                    width={3}
                                    height={3}
                                    aria-hidden="true"
                                    className="fill-gray-300">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-300">CEO of Workcation</div>
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
