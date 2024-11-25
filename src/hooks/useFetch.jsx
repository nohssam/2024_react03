import React, { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState([])

    // response.json()메서드를 호출하면 JSON 데이터를 javascript 객체로 변환한다.
    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
            })
            .catch((error) => console.error("Error : ", error));
    }, [url]);
    return data;
}

export default useFetch;