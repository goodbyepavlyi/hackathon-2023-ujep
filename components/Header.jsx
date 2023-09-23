"use client";
import Image from 'next/image'
import NasaLogo from '@/public/logo.svg';
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className={"w-full overflow-hidden"}>
                    <nav className="px-12 mx-auto w-full flex justify-between items-center p-4 relative z-[10000] h-[80px] bg-neutral-900">
                        <Image src={NasaLogo} alt={"NASA"} height={40}/>
                        <a href="/" className="flex-1 text-xl font-semibold ml-1 hidden min-[600px]:block">Průzkumník otevřených dat NASA</a>
                        <a href="/" className="flex-1 text-xl font-semibold ml-1 hidden max-[600px]:block">PODN</a>

                        <div data-navbar="" className="hidden md:flex items-center flex-1 justify-end gap-x-6">
                            <a href="/map" className="font-semibold leading-6">Mapa meteorů</a>
                            <a href="/astronomypictureofday" className="font-semibold leading-6">Astronomický snímek dne</a>
                            <a href="/earthpolychromaticimagingcamera" className="font-semibold leading-6">Polychromatická země</a>
                        </div>
                        <button onClick={() => setOpen(!open)} className={"block md:hidden"}><AiOutlineMenu className={"text-3xl"}/></button>
                    </nav>
                    <div className={`absolute w-full h-screen bg-neutral-800 bottom-0 z-[9900] transition-[bottom] ease-in-out duration-500 ${open ? "bottom-0" : "bottom-full"}`}>
                        <ul className={"w-full relative h-full flex flex-col items-center justify-center gap-12 text-2xl"}>
                            <li><a href="/map" className="font-semibold leading-6">Mapa meteorů</a></li>
                            <li><a href="/astronomypictureofday" className="font-semibold leading-6">Astronomický snímek dne</a></li>
                            <li><a href="/earthpolychromaticimagingcamera" className="font-semibold leading-6">Polychromatická země</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}