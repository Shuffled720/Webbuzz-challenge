import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '../ui/button';

interface Props {
    data: { title: string, image: string, link: string, fee: number }

}
const Cards = (props: Props) => {
    const data = props.data;
    return (
        <>

            {/* <Link href={data.link} >
                <Image className='object-contain h-64 w-64' width={1000} height={1000} src={data.image} alt="preview" />
                <p>{data.title}</p>
                <p>Fee: {data.fee}</p>
            </Link> */}
            {/* <Link href={{ pathname: '/dashboard/registration', query: { tournament: data.link } }} > */}
            <Image className='object-contain h-64 w-64' width={1000} height={1000} src={data.image} alt="preview" />
            <p className='text-white'>{data.title}</p>
            <p className='text-white'>Fee: {data.fee}</p>
            <Button asChild><Link href={{ pathname: '/dashboard/registration', query: { tournament: data.link } }}>Register</Link></Button>
            {/* </Link> */}

        </>
    )
}

export default Cards