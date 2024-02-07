"use client";

import { CardDoc } from "@/app/_components/Cards/CardDoc/CardDoc";
import { LoaderScreen } from "@/app/_components/Loaders/LoaderScreen/LoaderScren";
import { OptionsNavbar } from "@/app/_components/OptionsNav/OptionsNavbar";
import { SignatureContainer } from "@/app/_components/Signature/Signature";
import { useSignature } from "@/app/_hooks/useCount";
import useWeb3Provider from "@/app/_hooks/useWeb3Provider";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Docs {
    id: string,
    email: string,
    description: string,
    signature: boolean
}

export default function Dashboard () {
    const { web3: {address} } = useWeb3Provider();
    const [load, setLoad] = useState<string | null>(null);
    const [docs, setDocs] = useState<Docs[] | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [id, setId] = useState<string | null>(null) 

    const sign = useSignature();

    const GetAllDocs = async () => {
        setLoad('screen');
        const docs = await sign.GetAllDocs() as any[];
        setDocs(docs);
        setLoad(null);
    }

    const GetSignDocs = async () => {
        setLoad('screen');
        const docs = await sign.GetSignDocs() as any[];
        setDocs(docs);
        setLoad(null);
    }

    const GetForSignDocs = async () => {
        setLoad('screen');
        const docs = await sign.GetNotSignDocs() as any[];
        setDocs(docs);
        setLoad(null);
    }



    const OpenModal = (id: string) => {
        setModal(true);
        console.log('firmar...', id);
        setLoad(`doc.${id}`);
        setId(id);
        return id;
    }

    return (
        <>
            {
                modal && <div className='absolute z-10 grid place-items-center top-0 left-0 w-screen h-screen bg-black bg-opacity-50'>
                    <SignatureContainer
                        close={() => {
                            setLoad(null);
                            setModal(false);
                        }}
                        reloadDocs={GetAllDocs}
                        id={`${id}`}
                        />
                </div>
            }
            <nav className='bg-white flex justify-between items-center py-2 px-5 lg:px-16'>
                <h2 className='font-mono text-md font-extrabold'>
                    
                    <div className="group relative">
                        <span>{address?.substring(0,6)}...</span>
                        <div
                        className="bg-zinc-800 p-2 rounded-md group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
                        >
                        <span className="text-zinc-400 whitespace-nowrap">
                            {address}
                        </span>
                        <div
                            className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
                        ></div>
                        </div>
                    </div>
                </h2>
                
                <ul className='flex gap-5'>
                    <li className=''>
                        <OptionsNavbar
                            getAll={GetAllDocs}
                            getForSign={GetForSignDocs}
                            getSign={GetSignDocs}
                            />
                    </li>
                    <Link href='/'>
                        <li className='border-b-4 border-purple-500 py-2 px-5 hover:bg-purple-500 hover:text-white transition-colors duration-200'>salir</li>
                    </Link>
                </ul>
            </nav>
            {
                load == 'screen'
                ? <LoaderScreen />
                : <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-8'>{
                    docs && docs.map && docs.map(doc => (
                        <CardDoc 
                            key={doc.id}
                            email={doc.email} 
                            id={doc.id} 
                            description={doc.description} 
                            signature={doc.signature} 
                            loadVal={load}
                            openModal={OpenModal}
                            />
                    ))
                }</section>
            }
        </>
    )
} 