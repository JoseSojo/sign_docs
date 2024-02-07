"use client";

import { useState } from 'react';
import { useGreetingContract } from './useGrettingContract';

export const useSignature = () => {
    const contract = useGreetingContract();
    const [load, setLoad] = useState(true);

    const see = async () => {
        console.log(contract);
    }

    const AddDoc = async (obj: {email:string,description:string,id:string,signature:boolean}) => {
        try {
            if(contract) {
                await contract.AddDoc(obj);
                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }    
    
    const GetAllDocs = async () => {
        try {
            if(contract) {
                const result = await contract.GetAllDocs() as any[];

                return result;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }    
    
    const GetSignDocs = async () => {
        try {
            if(contract) {
                const result = await contract.getSignedDocuments() as any[];

                return result;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }    
    
    const GetNotSignDocs = async () => {
        try {
            if(contract) {
                const result = await contract.getNotSignedDocuments() as any[];
                console.log(result);
                return result;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }    
    
    const SignDocById = async (id: string) => {
        if(contract) {
            try {
                const sing = await contract.signDocument(id);
                GetAllDocs();
                return sing
            } catch (error) {
                console.error(error);
                return false   
            }
        }
        return false;
    }    
    
    const GetCountDocs = async () => {}    

    return { see, load, AddDoc, GetSignDocs, GetAllDocs, GetNotSignDocs, SignDocById, GetCountDocs };
}
