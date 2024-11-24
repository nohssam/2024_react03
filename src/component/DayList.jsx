import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function DayList(props) {
   const days =  useFetch('http://localhost:3010/days')
    // const[days, setDays] = useState([]);
        
    //   useEffect(() => {
    //     fetch('http://localhost:3010/days')
    //     .then(res =>{
    //         return res.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         setDays(data);
    //     })
    //     .catch((error) => console.error("Error fetching days:", error));
    //   },[]);
    return (
        <>
           <ul className="list_day">
                {days.map(k => (
                    <li key={k.id}>
                    <Link to={`/day/${k.day}`}>Day {k.day}</Link>
                    </li>
                ))}
            </ul>    
         </>
    )
}

export default DayList;