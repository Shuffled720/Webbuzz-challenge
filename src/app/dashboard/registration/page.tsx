const page = ({ params,
    searchParams, }: {
        params: { slug: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }) => {
    console.log(params, searchParams);
    return (

        <>
            <div className="text-white text-5xl">

                <h1>Registration Page</h1>
                <p>Registration page for <span className="text-green-500">{searchParams?.tournament}</span></p>
            </div>
        </>
    )

}

export default page