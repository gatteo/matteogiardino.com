import Image from '@/components/mdx/image'

export default function Pictures() {
    return (
        <section className="relative my-16 flex flex-col">
            <div className="relative isolate px-6 py-24 sm:py-32 lg:px-0">
                <div className="absolute inset-0 -z-10">
                    <svg
                        className="absolute left-[50%] top-0 h-[48rem] max-h-full w-[128rem] max-w-[100vw] -translate-x-1/2 overflow-hidden stroke-slate-700 [mask-image:radial-gradient(64rem_34rem_at_center,white,transparent)]"
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
                        {/* <svg x="50%" y={-1} className="overflow-visible fill-slate-900">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg> */}
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        />
                    </svg>
                </div>

                <div className="flex flex-col gap-8 md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-2">
                    <Image
                        src="/static/images/home/6.png"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className="m-auto -rotate-3 rounded-xl drop-shadow-2xl transition-all duration-200 hover:rotate-0"
                    />

                    <Image
                        src="/static/images/home/8.png"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className="m-auto rounded-lg drop-shadow-2xl"
                    />
                    <Image
                        src="/static/images/home/1.gif"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className=" m-auto rounded-lg drop-shadow-2xl md:col-start-2 md:row-start-2"
                    />
                    <Image
                        src="/static/images/home/3.png"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className="m-auto rounded-lg drop-shadow-2xl"
                    />
                    <Image
                        src="/static/images/home/4.png"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className="m-auto rounded-lg drop-shadow-2xl"
                    />

                    <Image
                        src="/static/images/home/2.png"
                        alt=""
                        loading="lazy"
                        width={500}
                        height={500}
                        className="m-auto rotate-3 rounded-lg drop-shadow-2xl transition-all duration-200 hover:rotate-0"
                    />
                    {/* <div className="col-span-2 col-start-2 row-start-1 rounded-lg">
                        <img src="/static/images/home/5.png" className="rounded-lg" alt="" loading="lazy" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
