"use client";

import { FC } from "react";
import '@/app/_components/Cards/CardLogin/CardLogin.css';
import Link from "next/link";

export const CardLogin: FC = () => {

    return (
        <div className="card w-full lg:w-[400px] h-[350px]">
            <div className="card-img animate-bounce"></div>
            <div className="card-info">
                <h4 className='font-light text-2xl text-pretty'>Iniciar Sesión</h4>
                <p className="text-body">para el personal autorizado del AIS</p>
                <Link href='/login'>
                    <button
                        className='bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200 text-md px-5 py-2 rounded-lg font-bold text-white'
                    >
                        iniciar sesión
                    </button>
                </Link>
            </div>
        </div>
    )
}
