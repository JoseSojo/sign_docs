"use client";

import { BrowserProvider, ethers, JsonRpcSigner } from "ethers";
import { useCallback, useEffect, useState } from "react";

export interface IWeb3State {
  address: string | null;
  currentChain: number | null;
  signer: JsonRpcSigner | null;
  provider: BrowserProvider | null;
  isAuthenticated: boolean;
}

const useWeb3Provider = () => {
  const initialWeb3State = {
    address: null,
    currentChain: null,
    signer: null,
    provider: null,
    isAuthenticated: false,
  };

  const [web3, setweb3] = useState<IWeb3State>(initialWeb3State);

  const connectWallet = useCallback(async () => {
    if (web3.isAuthenticated) return;

    try {
      const { ethereum } = window as any;

      if (!ethereum) {
        console.log('error');
        return;
      }
      const provider = new ethers.BrowserProvider(ethereum);

      const accounts: string[] = await provider.send("eth_requestAccounts", []);

      if (accounts.length > 0) {
        const signer = await provider.getSigner();
        const chain = Number(await (await provider.getNetwork()).chainId);

        setweb3({
          ...web3,
          address: accounts[0],
          signer,
          currentChain: chain,
          provider,
          isAuthenticated: true,
        });

        localStorage.setItem("isAuthenticated", "true");
      }
    } catch {}
  }, [web3]);

  const disconnect = () => {
    setweb3(initialWeb3State);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    if (window == null) return;

    if (localStorage.hasOwnProperty("isAuthenticated")) {
      connectWallet();
    }
  }, [connectWallet, web3.isAuthenticated]);

  useEffect(() => {
    const { ethereum } = window as any;
    if (typeof ethereum === "undefined") return;

    ethereum.on("accountsChanged", (accounts: string[]) => {
      setweb3({ ...web3, address: accounts[0] });
    });

    ethereum.on("networkChanged", (network: string) => {
      setweb3({ ...web3, currentChain: Number(network) });
    });

    return () => {
      ethereum.removeAllListeners();
    };
  }, [web3]);

  return {
    connectWallet,
    disconnect,
    web3,
  };
};

export default useWeb3Provider;