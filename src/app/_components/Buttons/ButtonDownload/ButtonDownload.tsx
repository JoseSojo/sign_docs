"use client";

import { FC } from "react";
import '@/app/_components/Buttons/ButtonDownload/ButtonDounload.css';

interface Props {
    click: () => void
}

export const ButtonDownload: FC<Props> = ({ click }) => {

    return (
        <button 
            onClick={click}
            className="Btn bg-gradient-to-l to-sky-400 from-purple-500"
        >
            <svg className="svgIcon text-2xl text-gray-50 hover:animate-spin" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
            
        </button>
    );
}
