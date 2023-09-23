'use client'

import Header from "@/components/Header";

export default function NotFoundPage() {
    return (
        <>
            <Header />

            <div className={"min-h-[100vh]"}>
                <div className={"mx-auto max-w-6xl flex flex-col justify-center items-center gap-24 px-8 pb-16 pt-12 lg:min-h-[calc(100vh_-_40px)] lg:py-10"}>
                    <div className={"flex flex-col place-items-center gap-10 lg:flex-row lg:gap-6"}>
                        <div className={"flex flex-col place-items-center gap-10 text-center"}>
                            <h1 className={"text-3xl font-black leading-tight sm:text-7xl sm:leading-tight"}>
                                Page not <span class={"relative rounded bg-indigo-600 px-3 py-1 text-white"}>found</span>
                            </h1>

                            <p className={"my-6 leading-normal text-neutral-300"}>You've found yourself on a page that seems to be unfamiliar to us.</p>
                            <a href="/" className={"bg-indigo-500 hover:bg-indigo-600 font-bold py-2 px-4 rounded"}>Return</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}