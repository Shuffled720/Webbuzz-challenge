import Image from 'next/image';
import { cookies } from 'next/headers'; // To access cookies
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  return (
    <>
      <nav className="shadow-lg grid grid-cols-2 justify-items-center">
        <div className="">
          <Image width={100} height={100} src="/Images/logo.png" alt="LoGo" />
        </div>
      </nav>
      <div className='m-10'>
        <h1 className='text-white text-center text-white text-5xl p-5 font-sans'>Welcome to Webbuzz</h1>
        <p className='text-white text-center'>Lorem ipsum dolo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque sed ipsa corrupti minima eius dolores distinctio! Pariatur voluptatem eligendi nam fugiat, nemo ipsum fuga nostrum, vitae magnam tenetur saepe amet.r sit amet consectetur adipisicing elit. Rem dolores molestias, recusandae veritatis corrupti fugiat. Illum fugiat ut veritatis, odit perferendis architecto impedit similique magni quia aliquam. Sed, voluptatibus necessitatibus.</p>
      </div>
      {token ?
        <>
          <Button asChild>
            <Link href="/dashboard">Continue</Link>
          </Button>
        </>
        :
        <>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </>}
    </>
  );
}
