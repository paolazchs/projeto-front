import CardKanban from "@/app/components/cardKanban/page";
import Navbar from "@/app/components/navbar/page";

export default function Home() {
    return(
        <main className="bg-[#FFFDF1] h-screen w-screen flex flex-col items-center gap-20">
            <Navbar />

            <div className="flex gap-10">
                <CardKanban />
                <CardKanban />
                <CardKanban />
                <CardKanban />
            </div>

        </main>
    );
}
