import TeamRegistration from "@/components/TeamRegistration/TeamRegistration";

const page = ({ params,
    searchParams, }: {
        params: { slug: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }) => {
    console.log(params, searchParams);
    return (

        <>
            <div className="text-white text-5xl">

                <TeamRegistration />
            </div>
        </>
    )

}

export default page