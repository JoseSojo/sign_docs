"use client";

import { useSignature } from "@/app/_hooks/useCount";
import { Dispatch, FC, SetStateAction } from "react";
import SignatureCanvas from "react-signature-canvas";


interface Props {
    reloadDocs: ()=>{},
    id: string,
    close: () => void
}

export const SignatureContainer: FC<Props> = ({  reloadDocs, id, close }) => {

    const sign = useSignature();

    const SignDoc = async () => {
        await sign.SignDocById(id);
        reloadDocs();
    }

    const handleSignature = async () => {
        await SignDoc();
    }

    return (
        <div className='w-[300px] lg:w-[500px] p-8 h-auto min-h-[500px] bg-white rounded-md grid grid-rows-[1fr_auto]'>
            <div className='bg-gray-100'>
                <SignatureCanvas
                    canvasProps={{
                        width: 500, 
                        height: 300,
                        style:{
                            'border':'1px solid #000000',
                            'width':'100%',
                            'height':'100%',
                            'borderRadius':'2em'
                        }
                    }}
                    />
            </div>
            <div>
                <button
                    onClick={handleSignature}
                    className='px-7 py-2 transition-colors duration-200 rounded-lg text-white bg-gradient-to-l to-sky-500 from-cyan-600 hover:to-sky-600 hover:via-blue-500 hover:from-cyan-700'
                >
                    firmar documento...
                </button>
                <button
                    onClick={close}
                    className='px-7 py-2 transition-colors duration-200 rounded-lg text-white font-bold bg-gradient-to-l to-red-500 from-orange-600 hover:to-red-600 hover:via-red-500 hover:from-orange-700'
                >
                    cerrar
                </button>
            </div>
        </div>
    );
}
