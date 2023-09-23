"use client";

import NASA from "@/libs/Api/NASA";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaGlobeEurope, FaArrowRight, FaSun, FaMoon, FaSatellite  } from "react-icons/fa";

// Calculus/Trig - Angle between 3d vectors - sun/moon earth vehicle angle
export const getAngleBetweenVectors = (body, dscovr) => {
    const dotProduct =
        body.x * dscovr.x + body.y * dscovr.y + body.z * dscovr.z;
    const magnitudeA = Math.sqrt(
        Math.pow(body.x, 2) + Math.pow(body.y, 2) + Math.pow(body.z, 2)
    );
    const magnitudeB = Math.sqrt(
        Math.pow(dscovr.x, 2) + Math.pow(dscovr.y, 2) + Math.pow(dscovr.z, 2)
    );
    const cosAngle = dotProduct / (magnitudeA * magnitudeB);
    const angle = Math.acos(cosAngle) * (180 / Math.PI);
    return angle;
};

// Calculus vector magnitude/distance = sqrt(x^2 + y^2 + z^2)
export const getDistance = (x, y, z) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
};

// Trig - Law of cosines - c = sqrt(a^2 + b^2 - 2ab * cos(y))
export const lawOfCosines = (distance1, distance2, angle) => {
    const result = Math.sqrt(
        Math.pow(distance1, 2) +
        Math.pow(distance2, 2) -
        2 * distance1 * distance2 * Math.cos(angle * (Math.PI / 180))
    );
    return result;
};


export default async function EarthPolychromaticImagingCamera() {
    const epicNatural = await NASA.fetchEPICNatural();

    const dscovr = epicNatural[0].dscovr_j2000_position;
    const sun = epicNatural[0].sun_j2000_position;
    const moon = epicNatural[0].lunar_j2000_position;
    
    const earthToDscovrDistance = getDistance(
        dscovr.x,
        dscovr.y,
        dscovr.z, 
    );

    const earthToSunDistance = getDistance(sun.x, sun.y, sun.z);
    const earthToMoonDistance = getDistance(moon.x, moon.y, moon.z);

    const sevAngle = getAngleBetweenVectors(sun, dscovr);
    const mevAngle = getAngleBetweenVectors(moon, dscovr);

    const dscovrToSunDistance = lawOfCosines(
        earthToSunDistance,
        earthToDscovrDistance,
        sevAngle
    );
    const dscovrToMoonDistance = lawOfCosines(
        earthToMoonDistance,
        earthToDscovrDistance,
        mevAngle
    );


    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Polychromatická země</h1>
            </div>

            {/* <div className={"flex container justify-center mx-auto gap-4 py-4"}> */}
            <div className={"grid grid-cols-2 grid-row-1 container justify-center mx-auto py-4"}>
                <div className={"max-w-[38rem]"}>
                    <Swiper loop={true} pagination={{ clickable: true }} modules={[Pagination]} className="swiper">
                        {epicNatural.map(data => {
                            const date = new Date(data.date);
                            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate()}/png/${data.image}.png`;

                            return (
                                <SwiperSlide key={data.identifier}>
                                    <img src={imageUrl} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <div className={"mx-4"}>
                    <div className="text-center">
                        <div className='grid grid-cols-2 grid-rows-1'>
                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaGlobeEurope className='mr-3' />
                                    <FaArrowRight className='mr-3' />
                                    <FaSun />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>Earth to Sun</p>
                                <p className={"text-gray-300"}>{Math.round(earthToSunDistance).toLocaleString()} km</p>
                            </div>

                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaGlobeEurope className='mr-3' />
                                    <FaArrowRight className='mr-3' />
                                    <FaMoon />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>Earth to Moon</p>
                                <p className={"text-gray-300"}>{Math.round(earthToMoonDistance).toLocaleString()} km</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 grid-rows-1'>
                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaSatellite className='mr-3' />
                                    <FaArrowRight className='mr-3' />
                                    <FaSun />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>EPIC to Sun</p>
                                <p className={"text-gray-300"}>{Math.round(dscovrToSunDistance).toLocaleString()} km</p>
                            </div>

                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaSatellite  className='mr-3' />
                                    <FaArrowRight className='mr-3' />
                                    <FaMoon />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>EPIC to Moon</p>
                                <p className={"text-gray-300"}>{Math.round(dscovrToMoonDistance).toLocaleString()} km</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 grid-rows-1'>
                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaGlobeEurope className='mr-3' />
                                    <FaArrowRight className='mr-3' />
                                    <FaSatellite />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>Earth to EPIC</p>
                                <p className={"text-gray-300"}>{Math.round(earthToDscovrDistance).toLocaleString()} km</p>
                            </div>

                            <div className="my-4">
                                <div className='flex justify-center pb-1 text-xl text-primary'>
                                    <FaSun className='mr-3' />
                                    <FaGlobeEurope className='mr-3' />
                                    <FaSatellite />
                                </div>

                                <p className={"pb-1 text-lg font-bold"}>SEV Angle</p>
                                <p className={"text-gray-300"}>{sevAngle.toFixed(2)} &deg;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
