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
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h1 className='font-oswald text-white text-center text-white text-5xl p-5 font-sans'>Welcome to Webbuzz</h1>
        <p className=' font-popins text-white text-center'>WebBuzz is a premier sports organization specializing in hosting and organizing exhilarating cricket tournaments across various formats.Our tournaments cater to all levels of cricketing talent, offering formats like Test, ODI, T20, and T10, providing both seasoned players and newcomers a chance to engage in the sport they love.At WebBuzz, we believe that cricket is more than just a game—it’s a community. We strive to promote sportsmanship, teamwork, and the spirit of competition through well-organized, high-energy tournaments. Whether you&apos;re a player or a fan, WebBuzz provides an inclusive platform for everyone to enjoy the essence of cricket.

          Join us and be part of the excitement as we continue to create unforgettable cricketing moments, one match at a time!</p>
        {token ?
          <div className='flex justify-center'>
            <Button asChild>
              <Link href="/dashboard">Go to Tournaments</Link>
            </Button>
          </div>
          :
          <div className='flex justify-between w-1/6 '>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>}
      </div>
    </>
  );
}
