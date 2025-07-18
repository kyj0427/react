// App.js
/*
    npm install axios
    npm install react-router-dom
    npm install bootstrap react-bootstrap
*/

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BoardListComp    from './components/BoardListComp';
import BoardInsertComp  from './components/BoardInsertComp';
import BoardUpdateComp  from './components/BoardUpdateComp';
import BoardViewComp    from './components/BoardViewComp';
import HeaderComp       from './components/HeaderComp';

import 'bootstrap/dist/css/bootstrap.css'
import MemberListComp from "./components/MemberListComp";

const App = () => {

    return(
        <div>
            <BrowserRouter>
            <HeaderComp/>
                <div className="container">
                    <Routes>
                        <Route path='/'          element={<BoardListComp/>}/>
                        <Route path='/api/board' element={<BoardListComp/>}/>
                        <Route path='/api/insert-board'      element={<BoardInsertComp/>}/>
                        <Route path='/api/view-board/:seq'   element={<BoardViewComp/>}/>
                        <Route path='/api/update-board/:seq' element={<BoardUpdateComp/>}/>
                        <Route path='/member/' element={<MemberListComp/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;