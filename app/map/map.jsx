"use client";

import dynamic from "next/dynamic";
import NASA from "@/libs/Api/NASA";
import { BsFilter } from "react-icons/bs";

const MapWithNoSSR = dynamic(() => import('/components/Map'), {
    ssr: false,
});


export default async function Map(){
    return (
        <>
            <div className={"w-full h-screen absolute top-0 overflow-hidden flex justify-center items-center"}>
                <img src={"/loading.gif"} alt={"Loading"}/>
            </div>
            <div className={"relative h-[calc(100vh-80px)]"}>
                <button className="absolute z-[9800] top-0 right-0 bg-[#171717] m-5 p-2 rounded-[2px] text-[22px]">
                    <BsFilter/>
                </button>
                <MapWithNoSSR 
                    className={"h-full"} 
                    latitude={50.5128119} 
                    longitude={13.6396802} 
                    markerSize={10}
                    markers={await NASA.fetchMeteorites()}
                />
            </div>
        </>
    )
}