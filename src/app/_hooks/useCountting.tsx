"use client";

import { useEffect, useState } from "react";
import { useGreetingContract } from "./useGrettingContract";

export const useCountting = () => {
  const contract = useGreetingContract();
  const [count, setCount] = useState<any | null>(null);

  useEffect(() => {
    if (!contract) return;
    let mounted = true;

    return () => {
      mounted = false;
    };
  }, [contract]);

  return { count };
};