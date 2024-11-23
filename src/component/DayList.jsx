import { Link } from "react-router-dom";
import dummy from "../db/data.json"

function DayList(props) {
   // console.log(dummy);
    // json 같은 반복 처리 할때는 주로 map를 사용
    // react-router => Link 
    return (
        <ul className="list_day">
            {dummy.days.map(k => (
                <li key={k.id}>
                  <Link to={`/day/${k.day}`}>Day {k.day}</Link>
                </li>
            ))}
        </ul>    
    )
}

export default DayList;