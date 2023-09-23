"use client";

import React, { useState } from "react";
import useSWR from "swr";
import NASA from "@/libs/Api/NASA";

export default function AstronomyPictureOfTheDay() {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const { data: astronomyPicture, error } = useSWR(
        selectedDate,
        NASA.fetchAPOD
    );

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <>
            <div className={"flex container mx-auto gap-4 py-4"}>
                <img src={astronomyPicture.url} className={"max-w-4xl"}></img>

            <div className="flex flex-row container items-center justify-end gap-x-4 mx-auto">
                <input type="date" value={selectedDate} onChange={handleDateChange}
                    className="shadow rounded py-2 px-3 bg-indigo-700 text-white font-bold focus:outline-none focus:shadow-outline" />
            </div>

            <div className="flex container mx-auto gap-4 py-4">
                {error ? (
                    <p>Error loading data.</p>
                ) : !astronomyPicture ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <img
                            src={astronomyPicture.url}
                            className="max-w-4xl"
                            alt={astronomyPicture.title}
                        />
                        
                        <div className="mx-4">
                            <p className="text-md text-indigo-500">{astronomyPicture.date}</p>
                            <p className="text-3xl font-semibold mb-2">
                                {astronomyPicture.title}
                            </p>
                            <p className="text-1xl mb-4">
                                Copyright: {astronomyPicture.copyright}
                            </p>
                            <p className="text-lg">{astronomyPicture.explanation}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
    {
        /* <img src={astronomyPicture.url} className={"max-w-4xl"}></img>
    
                    <div className={"mx-4"}>
                        <p className={"text-md text-indigo-500"}>{astronomyPicture.date}</p>
                        <p className={"text-3xl font-semibold mb-2"}>{astronomyPicture.title}</p>
                        <p className={"text-1xl mb-4"}>Copyright: {astronomyPicture.copyright}</p>
                        <p className={"text-lg"}>{astronomyPicture.explanation}</p>
                    </div> */
    }
}
