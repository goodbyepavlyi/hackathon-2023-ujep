"use client";

import dynamic from "next/dynamic";
import {GET} from "../api/meteorites/route";

const MapWithNoSSR = dynamic(() => import('/components/Map'), {
    ssr: false,
});

export default function Map(){
    // Fetches from the meteorite API
    const meteoriteData = fetch("/api/meteorites")
        .then(res => res.json())
        .then(data => console.log(data));

        
        console.log(meteoriteData)

    return (
        <>
            {/* <MapWithNoSSR className={"h-screen"} latitude={50.5128119} longitude={13.6396802} markerSize={10} zoom={2}/> */}
        </>
    )
}