import { Link } from "react-router-dom";
import dummy from "../db/data.json"

function DayList(props) {
    // console.log(dummy);
    return (
        <ul className="list_day">
            {dummy.days.map(k => {
                return <li key={k.id}>
                    <Link to={`/day/${k.day}`}> Day {k.day}</Link>
                </li>
            })}
        </ul>
    );
}

export default DayList;