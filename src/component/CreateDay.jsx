import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CreateDay(props) {
    const days = useFetch("http://localhost:3010/days")
    const navigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3010/days/`, {
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
              day : days && days.length + 1
            }),
          })
          .then(res => {
            if(res.ok) {
              alert('생성 완료되었습니다');
              navigate(`/`); // 첫 화면으로 가도록
            }
          }); 
      }
    return (
        <div>
           <h3>현재 일수 : {days && days.length}일</h3>
           <button onClick={addDay}>Day 추가</button>
        </div>
    );
}

export default CreateDay;