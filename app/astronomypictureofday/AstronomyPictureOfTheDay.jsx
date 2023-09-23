"use client";

import React, { useState } from "react";
import useSWR from "swr";
import NASA from "@/libs/Api/NASA";

export default function AstronomyPictureOfTheDay() {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const { data, error } = useSWR(
        selectedDate,
        NASA.fetchAPOD
    );

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <>
            <div className="flex container mx-auto gap-4 p-4 justify-end">
                <input type="date" value={selectedDate} onChange={handleDateChange}
                    className="shadow rounded py-2 px-3 bg-indigo-700 text-white font-bold focus:outline-none focus:shadow-outline mx-4 md:mx-0" />
            </div>

            <div className="flex container mx-auto gap-4 p-4 flex-wrap xl:flex-nowrap">
                {data && !data?.code ? (
                    <>
                    <img
                        src={data.url}
                        className="w-full xl:w-[50%] object-contain rounded"
                        alt={data.title}
                    />
                    
                    <div className="mx-4">
                        <p className="text-md text-indigo-500 font-bold">{data.date}</p>
                        <p className="text-3xl font-semibold mb-2">{data.title}</p>
                        <p className="text-1xl mb-4"><span className="font-bold">Autor:</span> {data.copyright}</p>
                        <p className="text-lg">{data.explanation}</p>
                    </div>
                </>
                ) : (
                    <p className="text-lg font-medium">Načítaní dat..</p>
                )}
            </div>
        </>
    );
}
