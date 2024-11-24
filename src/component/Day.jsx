import { useParams } from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";
function Day(props) {
    const day = useParams().day ;
    const words =  useFetch(`http://localhost:3010/words?day=${day}`)
    // const [words, setWords] = useState([]);
    
    // useEffect(() => {
    //     fetch(`http://localhost:3010/words?day=${day}`)
    //     .then(res =>{
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         setWords(data);
    //     })
    //     .catch((error) => console.error("Error fetching days:", error));
    //   },[day]);
    return (
        <>
            <h2> Day {day}</h2>
            <table>
                <tbody>
                    {/* map은 배열의 요소를 하나씩 추출 처리 할때 사용 ,
                     k는 배열에서 추출 하나의 요소를 의미한다. */}
                    {words.map(k =>(
                        <Word word={k} key={k.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Day;