import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* 라우터의 영향을 받지 않고 고정된 컴포넌트 */}
        <Header />
        <Routes>
          {/* path='/' 는 첫페이지을 의미한다.(홈페이지) */}
          <Route path='/' element={<DayList />} />

          {/* 동적라우딩 */}
          <Route path='/day/:day' element={<Day />} />

          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
