"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Fuzzy_Bubbles } from "next/font/google";

export const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
    const router = useRouter();

    return(
        <nav className="h-[10vh] bg-[#5F8861] w-screen flex items-center justify-around">
            <h1 className={`${fuzzy.className} cursor-pointer  text-[1.5rem] font-semibold text-[#FFF9D8]`}>Kanboard</h1>

            <ul>
                <li><a onClick={() => router.push('/home')} className="cursor-pointer text-[1.2rem] font-semibold text-[#FFF9D8]">Home</a></li>
            </ul>

            <a onClick={() => router.push('/login')} className="cursor-pointer " ><img src="logout.png" width={35}/></a>
        </nav>
    );
}
