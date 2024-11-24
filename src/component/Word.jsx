import { useState } from "react";

// props 로 넘어온 변수를  word 를 w 로 사용하자 
function Word({word : w}) {
    const [word , setWords] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(params) {
        setIsShow(!isShow)
    }
    function toggleDone() {

       // setIsDone(!isDone);

       //  다른 곳을 같다 오면 초기화 된다. DB 정보를 수정해서 정보를 유지 하자 
       // Create: POST
       // Read: GET
       // Update: PUT
       // Delete: DELETE
       fetch(`http://localhost:3010/words/${word.id}`, {
        method:'PUT',
        headers : {
          'Content-Type' : 'application/json',
        },
        body :JSON.stringify({
            // 수정을 위한 정보 
            ...word,
            isDone : !isDone,
        })
       })
       .then(res => {
        if(res.ok){
            setIsDone(!isDone);
        }
       });
    }

    function del() {
        if (window.confirm('정말 삭제할까요?')) {
            fetch(`http://localhost:3010/words/${word.id}`, {
                method : "DELETE",
            }).then(res =>{
                if(res.ok){
                    // setWords를 호출해 상태를 초기화합니다 (id: 0).
                    setWords({id:0})
                }
            });
        }
    }

    // 단어의 id가 0이라면 아무것도 렌더링하지 않습니다.
    // React 컴포넌트는 null을 반환하면 아무것도 렌더링하지 않습니다.
    // 삭제 후 UI에서 관련 내용을 감추는 역할을 합니다.
    if(word.id ===0){
        return null;
    }
    return (
        <tr className={isDone ? "off" : ""}>
        <td><input type="checkbox" checked={isDone}  onChange={toggleDone}/></td>
        <td>{word.eng}</td>                            
        <td>{isShow && word.kor}</td>     
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' :'보기'}</button>
            <button onClick={del} class="btn_del">삭제</button>
        </td>                       
    </tr>
    );
}

export default Word;