'use client'
import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function Preferida({tecnologia}:PreferidaProps) {

    //
    // A. estados
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem(tecnologia)||'0'
        return parseInt(storedLikes)
    })

    //
    // B. Efeitos
    useEffect(() => {
        localStorage.setItem(tecnologia, `${likes}`);
    }, [likes])


    //
    // C. Renderização
    return (
        <>
            : {likes} <button
                className="cursor-pointer"
                onClick={()=>setLikes(likes+1)}
            > 
                ❤️
            </button>
        </>
    )
}
