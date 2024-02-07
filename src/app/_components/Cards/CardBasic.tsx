import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const CardBasic: FC<Props> = ({ children }) => {

    return (
        <aside className='p-8 rounded-lg grid h-auto bg-gradient-to-r from-transparent via-slate-100 to-gray-200'>
            { children }
        </aside>
    )
}
