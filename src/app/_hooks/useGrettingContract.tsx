"use client";

import { Contract } from "ethers";
import { useMemo } from "react";
import useWeb3Provider from "./useWeb3Provider";
import abi from "../abi.json";

const address = "0x89F52527116088086b588a7509609b438aCf4156";

export const useGreetingContract = () => {
    const { web3 } = useWeb3Provider();

    return useMemo(
        () => web3.signer && new Contract(address, abi, web3.signer),
        [web3.signer]
    );
}
