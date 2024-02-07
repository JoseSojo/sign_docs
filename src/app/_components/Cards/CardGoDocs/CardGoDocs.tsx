import Link from "next/link";
import { CardMovedComponent } from "../CardMoved/CardMovedComponent";

export const CardGoDocs = () => {

    return (
        <CardMovedComponent>
            <aside className='p-8 rounded-lg w-[400px] flex flex-col justify-between h-full shadow-lg bg-slate-100'>
                <h2 className='font-bold text-4xl font-mono'>Cargar Documento</h2>
                <p className='text-center text-gray-600 text-lg font-light'>Enviar documento/solicitud al Área de ing Sistemas</p>
                <Link href='/docs'>
                    <button className='w-full rounded-lg bg-sky-700 font-bold text-white hover:bg-sky-800 py-3'>
                        Ir Enviar Documento
                    </button>
                </Link>
            </aside>
        </CardMovedComponent>
    );
}
