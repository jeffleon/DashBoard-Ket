import {useState, useEffect} from 'react';
/* Custome hook to fetch pasing a url and then return a data a error and loading*/
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchsource = async () =>{
            try{
                var response = await fetch(url); 
                const data = await response.json();
                setData(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);     
            }
        }
        fetchsource()
    },[url])

    return {data, loading, error}
}

export default useFetch