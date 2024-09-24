import React from 'react'
import Image from 'next/image'

interface Props {
    data: { title: string, image: string, link: string, fee: number }

}
const Cards = (props: Props) => {
    const data = props.data;
    return (
        <>

            <a href={data.link} target="_blank">
                <Image className='object-contain h-64 w-64' width={1000} height={1000} src={data.image} alt="preview" />
                <p>{data.title}</p>
                <p>Fee: {data.fee}</p>
            </a>

        </>
    )
}

export default Cards