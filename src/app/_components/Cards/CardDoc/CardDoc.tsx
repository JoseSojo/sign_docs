"use client";

import { FC } from "react";
import { ButtonDownload } from "../../Buttons/ButtonDownload/ButtonDownload";
import { LoaderScreen } from "../../Loaders/LoaderScreen/LoaderScren";
import { LoaderInpit } from "../../Loaders/LoaderInput/LoaderInput";
// import "@/app/_components/Cards/CardDoc/CardDoc.css";

interface Docs {
    id: string,
    email: string,
    description: string,
    signature: boolean,
    loadVal: string | null,
    openModal: (id: string) => string
}


export const CardDoc: FC<Docs> = ({id,email,description,signature, loadVal, openModal}) => {

    return (
        <>
            <div
                className="w-full h-36 flex flex-col justify-center gap-2 bg-white rounded-lg hover:hadow-lg shadow-sm p-2"
            >
                {
                    loadVal == `doc.${id}`
                    ? <LoaderInpit />
                    : <>
                    
                    <div className="flex gap-2">
                        <div className="flex justify-center items-center w-24 h-24 shrink-0 rounded-lg">
                            <ButtonDownload click={()=>{}} />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-neutral-700 italic">{email}</span>
                            <p className="line-clamp-3">
                                {description}
                            </p>
                        </div>

                    </div>
                    {
                        signature
                        ? <span className='border border-indigo-700 rounded-full w-full py-2 font-light text-center text-indigo-700'>firmado</span>
                        : <button
                            onClick={()=>openModal(id)}
                            className="hover:bg-indigo-700 bg-indigo-500 font-bold text-neutral-100 rounded p-2"
                        >
                            firmar
                        </button>
                    }
                    </>
                }
                
                
            </div>
        </>
    )
}
