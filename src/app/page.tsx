import Cards from "@/components/HomePage/Cards";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import tournament from "../data/tournament.json";

export default function Home() {
  const tournamentdata = tournament.tournamentdata;
  return (
    <>
      {/* <Link href={"/registration"}>Registration</Link>
      <Link href={"/login"}>Login</Link> */}

      <>

        {/* <nav className="bg-green-900 rounded-b-lg grid grid-cols-2 justify-items-center"> */}
        <nav className="backdrop-blur-sm rounded-b-lg grid grid-cols-2 justify-items-center">

          <div className="">
            <Image width={100} height={100} src="/images/logo.png" alt="PULSE" />
          </div>
          <div className="grid gird-cols-2  flex items-center">
            <Link href="/registration">
              <Button >Registration</Button>
            </Link>
            <Link href="/login">
              <Button className="w-full" >Login</Button>
            </Link>
          </div>
          <div>

          </div>
        </nav>
        <p className="text-center	text-white text-5xl p-5">Select Tournament</p>
        <p className="text-center	text-white text-3xl">Total <span className="text-yellow-300">3+</span> ongoing tournament registration!!!</p>
        <ul className="demos">
          {tournamentdata.map((data, index) => {
            return (<>
              {data ? <><li key={index}><Cards data={data} /></li></> : <></>}
            </>)
          })}
        </ul>


      </>

    </>
  );
}
