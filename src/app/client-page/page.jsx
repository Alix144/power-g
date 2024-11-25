"use client"

import { useEffect, useState } from "react";


const ClientPage = () => {
    const [names, setNames] = useState(null)

    const getNames = async() => {
        try {
            const response = await fetch("/api/name/")
            const data = await response.json()
            setNames(data)
            console.log(names)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getNames()
    },[])

    return ( 
        <div className="w-full h-full">
            {names === null ?
            <p>loading...</p>:

            names?.map((name)=>(
                <h2 key={name._id}>{name.name}</h2>
            ))
        }
        </div>
     );
}
 
export default ClientPage;