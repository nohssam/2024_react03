import {  Link } from "react-router-dom";
export default function EmptyPage() {
    return(
        <div>
          <h2>잘못된 접근 입니다.</h2>    
           <Link to="/">돌아가기</Link>
        </div>
    );
}