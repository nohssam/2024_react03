import { useParams } from "react-router-dom";
import dummy from "../db/data.json"

function Day(props) {
    // const day = 1 ;
     // url에 포함된 day값을 가져오기 위해서 useParams()
    // useParams()는 라우터에서 제공 
    const day = useParams().day ;
    const wordList = dummy.words.filter(k => (k.day === Number(day)));
    return (
        <>
            <h2> Day {day}</h2>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 추출 처리 할때 사용 ,
                     k는 배열에서 추출 하나의 요소를 의미한다. */}
                    {wordList.map(k =>(
                        <tr key={k.id}>
                            <td>
                                <input type="checkbox" />
                            </td>    
                            <td>{k.eng}</td>                            
                            <td>{k.kor}</td>     
                            <td>
                                <button>뜻 보기</button>
                                <button class="btn_del">삭제</button>
                            </td>                       
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;