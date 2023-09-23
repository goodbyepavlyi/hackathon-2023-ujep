import dynamic from "next/dynamic";
import NASA from "@/libs/Api/NASA";

export default async function AstronomyPictureOfTheDay() {
    const astronomyPicture = await NASA.fetchAPOD();

    return (
        <>
            <div className={"flex container mx-auto gap-4 py-4"}>
                <img src={astronomyPicture.url} className={"max-w-4xl"}></img>

                <div className={"mx-4"}>
                    <p className={"text-md text-indigo-500"}>{astronomyPicture.date}</p>
                    <p className={"text-3xl font-semibold mb-2"}>{astronomyPicture.title}</p>
                    <p className={"text-1xl mb-4"}>Copyright: {astronomyPicture.copyright}</p>
                    <p className={"text-lg"}>{astronomyPicture.explanation}</p>
                </div>
            </div>
        </>
    )
}
