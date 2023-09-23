"use client";

import dynamic from "next/dynamic";
import { BsFilter } from "react-icons/bs";
import $ from "jquery";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Loader from "@/components/Loader";

const MapWithNoSSR = dynamic(() => import('/components/Map'), {
    ssr: false,
});

export default function Map(){
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(dayjs().year());
    const [filtersOpen, setFiltersOpen] = useState(false);
    const handleSubmitDates = (e) => {
        e.preventDefault();

        const target = $(e.target);
        const startDate = target.find("input[name=startDate]");
        const endDate = target.find("input[name=endDate]");

        setStartDate(startDate.val());
        setEndDate(endDate.val());
    }

    return (
        <>
            <Loader />
            <div className={"relative w-screen h-[calc(100vh-80px)] overflow-hidden"}>
                <button onClick={() => setFiltersOpen(!filtersOpen)} className={"absolute z-[9800] top-0 right-0 bg-[#171717] m-5 p-2 rounded-[2px] text-[22px]"}>
                    <BsFilter/>
                </button>
                
                <div className={`w-96 h-full bg-neutral-800 absolute right-0 z-[9750] ease-in transition-all ${filtersOpen ? "translate-x-0" : "translate-x-96"}`}>
                    <div className={"flex flex-col py-24 justify-center items-center"}>
                        <h1 className={"text-3xl font-medium mb-12"}>Filters</h1>
                        <form onSubmit={handleSubmitDates} className={"flex flex-col gap-3 w- items-center w-full px-16"}>
                            <label className={"w-full"}>
                                <span className={"block text-sm font-medium mb-1"}>Start Date</span>
                                <input className={"bg-neutral-700 w-full p-1 rounded"} name={"startDate"} type={"text"} defaultValue={startDate}/>
                            </label>
                            <label className={"w-full"}>
                                <span className={"block text-sm font-medium mb-1"}>End Date</span>
                                <input className={"bg-neutral-700 w-full p-1 rounded"} name={"endDate"} type={"text"} defaultValue={endDate}/>
                            </label>
                            <input className={"bg-indigo-600 py-2 px-4 rounded"} type={"submit"} value={"Filter"}/>
                        </form>
                        
                        <a href="/tridyMeteoritu" className="font-semibold underline leading-6 mt-3">Třídy meteoritů</a>
                    </div>
                </div>
                <MapWithNoSSR 
                    className={"h-full"} 
                    latitude={50.513869541747816} 
                    longitude={13.645337381266318} 
                    markerSize={10}
                    filters={{
                        date: {
                            start: startDate,
                            end: endDate
                        }
                    }}
                />
            </div>
        </>
    )
}