import  { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data => {
            setData(data);
        })
        .catch((error) => console.error("Error fetching days:", error));
      },[url]);
      return data ;
}

export default useFetch;