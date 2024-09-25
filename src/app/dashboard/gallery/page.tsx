
import Image from "next/image"

export default function Component() {
    return (
        <>
            <h1 className=" text-center text-5xl font-semibold text-gray-100 dark:text-gray-100">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
                <Image src={"/Images/Gallery/1.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/2.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/3.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/4.jpg"} width={400} height={400} alt="gallery" />
                {/* <Image src={"/Images/Gallery/5.jpg"} width={400} height={400} alt="gallery" /> */}
                <Image src={"/Images/Gallery/6.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/7.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/8.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/9.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/10.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/11.jpg"} width={400} height={400} alt="gallery" />
                {/* <Image src={"/Images/Gallery/12.jpg"} width={400} height={400} alt="gallery" /> */}
                {/* <Image src={"/Images/Gallery/13.jpg"} width={400} height={400} alt="gallery" /> */}
                <Image src={"/Images/Gallery/14.jpg"} width={400} height={400} alt="gallery" />
                <Image src={"/Images/Gallery/15.jpg"} width={400} height={400} alt="gallery" />
            </div>
        </>
    )
}