import { FC, ReactNode } from 'react';
import './partials.css';

interface Props {
    children: ReactNode
}

export const CardMovedComponent: FC<Props> = ({children}) => {

    return (
        <>
            <div className={`e-card playing w-full lg:w-[750px]`}>
                
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                
                <div className="infotop">   
                    {children}
                </div>
            </div>
        </>
    );
}
