
// 1_basic / App.js

/*
    http://localhost:3000/          <Home/>
    http://localhost:3000/first     <First/>
    http://localhost:3000/second    <Second/>

    * route : url의 매핑에 따라 다른 페이지 구성

    > npm install react-router-dom
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import First from './pages/First';
import Home from './pages/Home';
import Second from './pages/Second';
import Menu from './pages/Menu';
import Third from './pages/Third';
import { useState } from 'react';
import Fourth from './pages/Fourth';

const App = () => {

    //data 변수만들기
    const [data, setData] = useState([
        {title: '영화0', img:'movie0.jpg'}
        ,{title: '영화1', img:'movie1.jpg'}
        ,{title: '영화2', img:'movie2.jpg'}
        ,{title: '영화3', img:'movie3.jpg'}
        ,{title: '영화4', img:'movie4.jpg'}
        ,{title: '영화5', img:'movie5.jpg'}
    ]);

    return(
        <div className='App'>
            <p>공통영역</p>

            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/'       element={<Home/>}/>
                    <Route path='/first'  element={<First msg='리엑트의 세계에 환영합니다'/>}/>
                    <Route path='/second' element={<Second msg='리엑트 즐기기'/>}/>
                    <Route path='/third' element={<Third datas={data}/>}/>
                    <Route path='/fourth/:idx/:name' element={<Fourth datas={data}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;