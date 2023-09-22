"use client";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import('/components/Map'), {
    ssr: false,
});

export default function Map(){
    return (
        <>
            <MapWithNoSSR className={"h-screen"} latitude={50.5128119} longitude={13.6396802} markerSize={50} zoom={2}/>
        </>
    )
}