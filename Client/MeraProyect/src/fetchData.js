import { useState, useEffect } from 'react';

export function FetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}


export async function FetchDataPost(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return await response.json();
}
