/*
    리액트의 장점 <- 리액트 사용 이유

    1> 태그 재사용
    2> 데이터 바인딩
*/

import { Component } from "react";
import "../App.css";

//functional 함수 
function MyHeader(){
    return(
        <div>
            <h1 className="App-link">우리 사이트</h1>
            <hr/>
        </div>
    );
}

//class 함수
class MyFooter extends Component{
    render(){
        return(
            <div className="App-logo">
                <h2>광고사이트</h2>
            </div>
        );
    }
}

function App(){
    return(
        <div className="App">
            {/* 컴포넌트 호출 */}
            <MyHeader></MyHeader>
            <MyHeader/>
            <hr/>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
            <MyFooter></MyFooter>
        </div>
    );
}

export default App