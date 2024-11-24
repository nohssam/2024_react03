import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />} />
        {/* 동적라우팅하기 위해서   */}
        <Route path="/day/:day" element={<Day />} />
        
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />

         {/* 이외에 url이 들어오면 받아들이는 페이지 */}
         <Route path="/*" element={<EmptyPage />} />
      </Routes>
    </div>  
  </BrowserRouter>
  );
}

export default App;
