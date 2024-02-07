"use client";

import '@/app/_components/OptionsNav/OptionsNav.css'
import { FC, useState } from 'react';

interface Props {
    getAll: () => void,
    getSign: () => void,
    getForSign: () => void
}

export const OptionsNavbar: FC<Props> = ({ getAll, getSign, getForSign }) => {

    const [active, setActive] = useState(false);

    return (
        <div className='relative'>
            <input type="checkbox" id="checkbox" onClick={()=>setActive(!active)} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>

            {
                active &&
                <section className={`bg-white z-10 shadow-lg w-56 border-t-4 border-purple-700 py-3 rounded-lg grid gap-y-1 absolute top-8 -right-10 transition-all duration-200 ${active ? 'scale-y-100' : 'scale-y-0'}`}>
                    <span 
                        onClick={()=>getAll()}
                        className='text-lg font-light p-3 bg-gradient-t-l to-white from-white cursor-pointer hover:to-purple-400 hover:from-sky-400'
                    >
                        Todos
                    </span>
                    <span 
                        onClick={()=>getSign()}
                        className='text-lg font-light p-3 bg-gradient-t-l to-white from-white cursor-pointer hover:to-purple-400 hover:from-sky-400'
                    >
                        Firmados
                    </span>
                    <span 
                        onClick={()=>getForSign()}
                        className='text-lg font-light p-3 bg-gradient-t-l to-white from-white cursor-pointer hover:to-purple-400 hover:from-sky-400'
                    >
                        Firmar
                    </span>
                </section>
            }

        </div>
    )
}
