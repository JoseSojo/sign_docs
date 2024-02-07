"use client";

import { createContext, FC, ReactNode, useContext } from "react";
import useWeb3Provider, { IWeb3State } from "../_hooks/useWeb3Provider";

export interface IWeb3Context {
    connectWallet: () => Promise<any | undefined>;
    disconnect: () => void;
    web3: IWeb3State;
}

const Web3Context = createContext<IWeb3Context | null>(null);

interface Props {
    children: ReactNode
} 

export const Web3ContextProvider: FC<Props> = ({ children }) => {

    const { connectWallet, disconnect, web3 } = useWeb3Provider();

    return (
        <Web3Context.Provider
            value={{
                connectWallet,
                disconnect,
                web3
            }}
        >
            {children}
        </Web3Context.Provider>
    )
}

export const useWeb3Context = (): IWeb3Context => useContext(Web3Context) as IWeb3Context;
