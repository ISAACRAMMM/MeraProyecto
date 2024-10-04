import { useState, useEffect } from "react";


export function FetchProductos(url){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        //const abortController= new AbortController()
        // fetch(url , { signal: abortController.signal})
        setLoading(true)
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(()=>setLoading(false))

        
    },[url])
    return {data, loading, error}
}