"use client";

import { Navbar } from "../_components/Navbar";
import { CardLogin } from "../_components/Cards/CardLogin/CardLogin";
import { CardGoDocs } from "../_components/Cards/CardGoDocs/CardGoDocs";

export default function Home() {

    return (
        <div className='h-full'>
            <Navbar />

            <main className='h-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 p-10'>

                <CardGoDocs />

                <CardLogin />

            </main>
        </div>
    );
}
 