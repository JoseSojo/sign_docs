import { CardMovedComponent } from "@/app/_components/Cards/CardMoved/CardMovedComponent";
import { UploadFileForm } from "@/app/_components/LoadFile";
import { Navbar } from "@/app/_components/Navbar";

export default function Docs() {

    return (
        <>
            <Navbar />
            <main className='h-full grid grid-cols-1 place-items-center gap-8 p-10'>

                <CardMovedComponent>
                    <aside className='p-8 rounded-lg sm:w-full lg:w-[400px] flex flex-col justify-between h-full shadow-lg bg-slate-100'>
                        <UploadFileForm />
                    </aside>
                </CardMovedComponent>

            </main>
            
        </>
    )
}
 