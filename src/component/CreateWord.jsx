import React, { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function CreateWord(props) {
    const days = useFetch("http://localhost:3010/days");
    const history = useNavigate();

    function onSubmit(e) {
        // 기본 기능을 막아줌 (새로고침)
        e.preventDefault();
        // 값 가져오는지 확인
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);
        fetch(`http://localhost:3010/words/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        }).then(
            res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다.");
                    // 날짜로 이동
                    history(`/day/${dayRef.current.value}`)
                }
            });

    }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label htmlFor='engInput'>Eng</label>
                <input type='text' placeholder='computer' id="engInput" ref={engRef} />
            </div>
            <div className='input_area'>
                <label htmlFor='korInput'>Kor</label>
                <input type='text' placeholder='컴퓨터' id="korInput" ref={korRef} />
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {days && days.map(k => {
                        return <option key={k.id} value={k.day}>
                            {k.day}
                        </option>
                    })}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}

export default CreateWord;