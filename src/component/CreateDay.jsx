import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function CreateDay(props) {
    const day = useFetch("http://localhost:3010/days")
    const history = useNavigate();

    function addDay(params) {
        fetch(`http://localhost:3010/days`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                day: day && day.length + 1
            })
        })
            .then(res => {
                if (res.ok) {
                    alert("생성 완료");
                    history('/')
                }
            })
    }
    return (
        <div>
            <h3>현재 일수 : {day && day.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}

export default CreateDay;