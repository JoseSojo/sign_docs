"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useSignature } from '../_hooks/useCount';
import { LoaderScreen } from "./Loaders/LoaderScreen/LoaderScren";


export const UploadFileForm: FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [load, setLoad] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<{type:boolean,msg:string} | null>(null);

    const sign = useSignature();

    const HandleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) return setFile(e.target.files[0]);
        return;
    }

    const SetErrorAndLoad = (error: string) => {
        setError(error);
        return setLoad(null);
    }

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!file) return SetErrorAndLoad('input.file');
        if(!email) return SetErrorAndLoad('input.email');
        if(!description) return SetErrorAndLoad('input.description');

        setLoad('form.upload');
        const SaveFile = async () => {
            const fields = new FormData();
            fields.append('doc', file);

            const response = await fetch('/api/docs', { method:'POST', body:fields });
            if(!response.ok) return console.log('ERROR');

            const result = await response.json();
            
            const SaveToContract = {
                email: email,
                description: description,
                id: `${result.body.filename}`,
                signature: false,
            }
            const resultContract = await sign.AddDoc(SaveToContract);

            if(resultContract) {
                setMessage({type:true,msg:'Documento/solicitud enviado'});
                return setLoad(null);
            }
            setLoad(null);
            setMessage({type:false,msg:'error al cargar Documento/solicitud'});
            return setError('Error al cargar el archivo');
        }
        SaveFile();

    }

    return (
        <>
        {
            load == 'form.upload'
            ?   <div className='grid place-items-center h-full'>
                <LoaderScreen />
                <p className='text-emerald-500 font-light text-2xl'>Cargando Documento...</p>
            </div>
            :   error == 'global'  
            ?   <p>Faltal error...</p>
            :<>
            {message != null && <h3 className={`${message.type ? 'text-emerald-700' : 'text-red-700'} font-extra-bold text-2xl`}>{message.msg}</h3>}
            <form onSubmit={HandleSubmit} className='grid gap-y-5'>
                <label className='grid text-lg text-gray-600'>
                    <p>
                        (<span className='font-bold text-lg text-sky-800'>*</span>)
                        Documento/Solicitud
                    </p>
                    <input
                        className='p-3 rounded-lg shadow-md bg-white' 
                        type='file'
                        placeholder=''
                        onChange={HandleChangeFile}
                        />
                    { error && error == 'input.file' && <p className='text-lg text-red-700'>Debes seleccionar un archivo</p> }
                </label>
                
                <label className='grid text-lg text-gray-600'>
                    <p>
                        (<span className='font-bold text-lg text-sky-800'>*</span>)
                        Correo Electrónico
                    </p>
                    <input
                        className='p-3 rounded-lg shadow-md bg-white' 
                        type='email'
                        placeholder='ejemplo@gmail.com'
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    { error && error == 'input.email' && <p className='text-lg text-red-700'>Debes completar este campo</p> }
                </label>

                <label className='grid text-lg text-gray-600'>
                    <p>
                        (<span className='font-bold text-lg text-sky-800'>*</span>)
                        Descripción
                    </p>
                    <input
                        className='p-3 rounded-lg shadow-md bg-white' 
                        type='text'
                        placeholder='descripción corta'
                        onChange={(e)=> setDescription(e.target.value)}
                        />
                    { error && error == 'input.description' && <p className='text-lg text-red-700'>Debes completar este campo</p> }
                </label>

                <button
                    type='submit'
                    className='w-full bg-sky-700 hover:bg-sky-800 text-white font-bold rounded-lg py-2'
                >
                    enviar
                </button>
            </form>
            </>
        }
        </>
    );
} 