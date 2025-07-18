
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

const App = () => {

    return(
        <div className='App'>
           <p>공통영역</p>
           
           <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/'       element={<Home/>}/>
                    <Route path='/first'  element={<First/>}/>
                    <Route path='/second' element={<Second/>}/>
                </Routes>
           </BrowserRouter>
        </div>
    )

}

export default App;