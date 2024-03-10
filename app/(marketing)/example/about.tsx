import React from 'react'

const Section: React.FC = () => {
    return (
        <section
            id="secondary-features"
            aria-label="Features for simplifying everyday business tasks"
            className="pt-48">
            <div className="">
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
                        Supera le sfide nell'avvio della tua carriera
                    </h2>
                    <p className="mb-8 text-gray-400 lg:text-xl">
                        Tech Career Launch è un percorso di 4 settimane con Matteo Giardino, un mentore esperto che ti
                        fornirà consigli pratici, orientamento strategico e supporto personalizzato per superare i
                        colloqui di lavoro.
                    </p>
                </div>
                <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
                    <div>
                        <div className="mx-auto max-w-2xl">
                            <div className="w-9 rounded-lg bg-purple-600">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <defs>
                                        <linearGradient
                                            id=":R2mdm:"
                                            x1="11.5"
                                            y1="18"
                                            x2="36"
                                            y2="15.5"
                                            gradientUnits="userSpaceOnUse">
                                            <stop offset=".194" stopColor="#fff"></stop>
                                            <stop offset="1" stopColor="#6692F1"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                                        stroke="url(#:R2mdm:)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <h3 className="mt-6 text-sm font-medium text-purple-600">Reporting</h3>
                            <p className="font-display mt-2 text-xl text-gray-400">
                                Stay on top of things with always up-to-date reporting features.
                            </p>
                        </div>
                        <div className="relative mt-10 pb-10">
                            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-400/5 ring-1 ring-slate-500/10">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="1688"
                                    height="856"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-full"
                                    sizes="52.75rem"
                                    src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-auto max-w-2xl">
                            <div className="w-9 rounded-lg bg-purple-600">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <path
                                        opacity=".5"
                                        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                    <path
                                        opacity=".3"
                                        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                    <path
                                        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                </svg>
                            </div>
                            <h3 className="mt-6 text-sm font-medium text-purple-600">Inventory</h3>
                            <p className="font-display mt-2 text-xl text-gray-400">
                                Never lose track of what’s in stock with accurate inventory tracking.
                            </p>
                            <p className="mt-4 text-sm text-slate-600">
                                We don’t offer this as part of our software but that statement is inarguably true.
                                Accurate inventory tracking would help you for sure.
                            </p>
                        </div>
                        <div className="relative mt-10 pb-10">
                            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-400/5 ring-1 ring-slate-500/10">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="1688"
                                    height="856"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-full"
                                    sizes="52.75rem"
                                    src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mx-auto max-w-2xl">
                            <div className="w-9 rounded-lg bg-purple-600">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <path
                                        opacity=".5"
                                        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                        fill="#fff"></path>
                                    <path
                                        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                        fill="#fff"></path>
                                </svg>
                            </div>
                            <h3 className="mt-6 text-sm font-medium text-purple-600">Contacts</h3>
                            <p className="font-display mt-2 text-xl text-gray-400">
                                Organize all of your contacts, service providers, and invoices in one place.
                            </p>
                            <p className="mt-4 text-sm text-slate-600">
                                This also isn’t actually a feature, it’s just some friendly advice. We definitely
                                recommend that you do this, you’ll feel really organized and professional.
                            </p>
                        </div>
                        <div className="relative mt-10 pb-10">
                            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-400/5 ring-1 ring-slate-500/10">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="1688"
                                    height="856"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-full"
                                    sizes="52.75rem"
                                    src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:mt-20 lg:block">
                    <div className="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
                        <div className="relative">
                            <div className="w-9 rounded-lg bg-slate-800">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <path
                                        opacity=".5"
                                        d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                        fill="#fff"></path>
                                    <path
                                        d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                        fill="#fff"></path>
                                </svg>
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-purple-400">Mentoring 1-1</h3>
                            <p className="mt-2 text-gray-400">
                                Solo tu e Matteo, per ricevere supporto su misura in base alle tue esigenze.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="w-9 rounded-lg bg-slate-800">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <path
                                        opacity=".5"
                                        d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                    <path
                                        opacity=".3"
                                        d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                    <path
                                        d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                        fill="#fff"></path>
                                </svg>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-purple-400">4 Settimane</h3>
                            <p className="font-display mt-2  text-gray-400">
                                Un percorso intenso, alla fine del quale sarai pronto a qualunque sfida.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="w-9 rounded-lg bg-slate-800">
                                <svg aria-hidden="true" className="h-9 w-9" fill="none">
                                    <defs>
                                        <linearGradient
                                            id=":Rardm:"
                                            x1="11.5"
                                            y1="18"
                                            x2="36"
                                            y2="15.5"
                                            gradientUnits="userSpaceOnUse">
                                            <stop offset=".194" stopColor="#fff"></stop>
                                            <stop offset="1" stopColor="#14213b"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
                                        stroke="url(#:Rardm:)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-purple-400">Preparazione e Pratica</h3>
                            <p className="font-display mt-2 text-gray-400">
                                Preparazione a 360° e pratica costante, per arrivare preparato al colloquio.
                            </p>
                        </div>
                    </div>
                    <div className="relative mt-20 overflow-hidden rounded-3xl bg-slate-800 px-14 py-16 xl:px-16">
                        <div className=" flex">
                            <div className="w-[52.75rem] overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-400/5 ring-1 ring-slate-500/10">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="1688"
                                    height="856"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-full"
                                    sizes="52.75rem"
                                    src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75"
                                />
                            </div>
                        </div>
                        <div className="rounded-4xl pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-400/10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
