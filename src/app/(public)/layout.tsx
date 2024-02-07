"use client";

import { ReactNode } from "react";

export default function Layout ({children}:{children:ReactNode}) {

    return (
        <div className='min-h-screen bg-slate-200'>
            {children}
        </div>
    );
} 
