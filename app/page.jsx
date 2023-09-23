import Image from 'next/image'
import style from "./Home.module.scss";
import nasaLogo from '@/public/logo.svg';
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header />

            <div className={"min-h-[50vh]"}>
                <div className={"mx-auto max-w-6xl flex flex-col justify-center items-center gap-24 px-8 pb-16 pt-12 lg:min-h-[calc(90vh_-_40px)] lg:py-10"}>
                    <div className={"flex flex-col place-items-center gap-10 lg:flex-row lg:gap-4"}>
                        <div className={"flex flex-col place-items-center text-center"}>
                            <h1 className={"rounded bg-indigo-600 px-3 py-1 text-3xl font-black leading-tight sm:text-6xl sm:leading-tight"}>
                                Průzkumník Otevřených Dat NASA
                            </h1>
                            <p className={"my-6 leading-normal text-neutral-300"}>
                                Objevujte meteority, které v posledních 2000 letech spadly na Zemi a užívejte si hypnotizující Astronomický obrázek dne od NASA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
