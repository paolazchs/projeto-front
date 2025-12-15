import Image from "next/image";

import logo from "@/public/logo.png"
import undraw from "@/public/undraw.png"

import { Fuzzy_Bubbles } from "next/font/google";
import InputPage from "@/app/components/input/page";
import ButtonPage from "@/app/components/button/page";
import { useRouter } from "next/navigation";

export const fuzzy = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LoginPage() {
    const router = useRouter();
    return(
        <main className="flex h-screen w-screen bg-[#FFFDF1] ">
            <div className="bg-[#5F8861] w-[40vw] flex items-center justify-center flex-col gap-10">
                <div className="flex items-center">
                    <img src="logo.png" width={70}/>
                    <h1 className={`${fuzzy.className} text-[2.5rem] font-semibold text-[#FFF9D8]`}>Kanboard</h1>
                </div>

                <InputPage placeholder="Enter your email" />
                <InputPage placeholder="Enter your password"/>
                <span>

                    <ButtonPage onClick={() => router.push('/admin/perfil')}> <p className={`${fuzzy.className} text-[1.3rem] font-semibold text-[#5F8861]`}>Sign up now </p> </ButtonPage>
                </span>

            </div>

            <div className="flex justify-center items-center w-[60vw]">
                <img src="undraw.png" width={450}/>
            </div>
        </main>
    );
}
