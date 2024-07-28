import { useState, useEffect } from "react";

function getInfo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 1000);
    })
}


export const useGetInfo = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [info, setInfo] = useState<string>("");

    useEffect(() => {
        getInfo().then(res => {
            setInfo(res);
            setLoading(false);
        })
    }, [])

    return {
        loading, info
    }
}