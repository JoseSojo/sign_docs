import Link from "next/link"

export const Navbar: React.FC = () => {

    return (
        <nav className='flex justify-between items-center px-6 lg:px-16 bg-white shadow-md py-3'>
            <Link href={'/'}>
                <h1 className='font-bold text-xl font-mono'>
                    FirDocs
                </h1>
            </Link>

            <ul className='flex sm:gap-y-4 bg-white lg:gap-x-8'>
                <Link href={'/login'}>
                    <li className='px-5 py-2 border-2 border-emerald-700 text-emerald-700 rounded-full hover:bg-emerald-700 font-bold text-md hover:text-white transition-colors duration-200'>
                        Iniciar Sesion
                    </li>
                </Link>
                <Link href={'/docs'}>
                    <li className='px-5 py-2 border-2 border-sky-700 text-sky-700 rounded-full hover:bg-sky-700 font-bold text-md hover:text-white transition-colors duration-200'>
                        Cargar documento
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
