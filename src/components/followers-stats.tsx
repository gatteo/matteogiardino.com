import Image from '@/components/mdx/image'

const stats = [
    { name: 'Followers TikTok', value: '113.000+' },
    { name: 'Followers Instagram', value: '14.000+' },
    { name: 'Corsisti', value: '900+' },
    { name: 'Visualizzazioni totali', value: '266.7 Mln' },
]

export default function FollowersStats() {
    return (
        <section className="relative mt-16">
            <div className="absolute inset-0 -z-10 ">
                <svg
                    className="absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2  stroke-slate-700 [mask-image:radial-gradient(64rem_24rem_at_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={100}
                            height={100}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>

                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    />
                </svg>
            </div>

            <div className="flex flex-col gap-12 py-16 md:flex-row md:py-32">
                <div className="flex-auto ">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            <strong className="underline decoration-sky-400 underline-offset-4">130.000+</strong>{' '}
                            studenti.
                        </h2>
                        <p className="mt-6 max-w-lg text-lg leading-8 text-accent-5 dark:text-gray-300">
                            La programmazione ha rivoluzionato la mia vita. Per questo motivo ogni giorno mi impegno a
                            diffondere la mia passione fornendo strumenti e risorse per rendere l'apprendimento
                            accessibile a tutti.
                        </p>
                    </div>
                    <div className="flex-1">
                        <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-2">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-sm leading-7 text-accent-3 dark:text-gray-300 sm:text-base">
                                        {stat.name}
                                    </dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <div className="flex-auto">
                    <Image
                        src="/static/images/home/screen.png"
                        alt=""
                        loading="lazy"
                        width={300}
                        height={500}
                        className="m-auto max-w-[300px] rotate-2 rounded-xl transition-all duration-200 hover:rotate-0"
                    />
                    {/* <video loop autoPlay width="100%" height="auto" style={{ width: '500px', height: '500px' }}>
                        <source src="/static/images/home/3.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </div>
        </section>
    )
}
