
/* 
    리액트의 기본베이스는 컴포넌트 
        - 클래스형 : 기존부터 사용
        - 함수형   : 최근에 부각 
*/

// const { Component } = require("react");
import { Component } from "react"; //component 라는 클래스를 임포트 => 기존스타일 
import "../App.css";



// 클래스형 컴포넌트 
//  [1] Component 상속받기
//  [2] render()

class App extends Component{
    // 랜더링 : 브라우저에 화면 출력
    render(){

        // 바깥으로 내보냄
        // 자바스크립트 주석1
        /* 자바스크립트 주석2 */
        return(
            // return 안에는 최상위 태그 1개만 
            //jsx 문법 원래는 className 이 아닌 class 가 들어와야한다 
            <div className='App'>
                
                {/* 여기 영역은 JSX 문법 영역이다 */}
                {/* 여기 안에 주석  */}
                <div className="App-link">안녕하세요</div>
                <div className="App-logo">짝꿍님 오늘도</div>
                <hr/>
                <img src='../logo192.png' />
            </div>
        );
    } 
}

export default App;
