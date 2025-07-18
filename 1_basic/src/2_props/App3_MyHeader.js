// App3_MyHeader.js

/*
    MyHeader 컴포넌트

    <header>
        <h1> 제목 </h1>
        <p> 내용</p>
    </header>

*/
import { Component } from "react";
import "../App.css";

/*
function MyHeader(props){
    console.log(props)

    // props.title = '제목변경'; props은 read-only 라서 변경안됨
    let mytitle = props.title + '변경';

    return(
        <div>
            <h1>{props.title}</h1>
            <h4>{mytitle}</h4>
            <h2>{props.content}</h2>
        </div>
    )
}


function App(props){
    return(
        <div className="App">
            <MyHeader title='자바' content='즐거운 자바'></MyHeader>
            <MyHeader title='파이썬' content='재미있는 파이썬'></MyHeader>

        </div>
    )
}

export default App;
*/

//class 컴포넌트를 사용할때는 반드시 component를 상속받아야한다
class MyHeader extends Component{

    render(){

        let mytitle = this.props.title = '변경2';

        return(
            <header>
                {/* 반드시 this 필요 */}
            <h1>{this.props.title}</h1>
            <h4>{mytitle}</h4>
            <p>{this.props.content}</p>
            </header>
        )
    }
}



function App(props){
    return(
        <div className="App">
            <MyHeader title='자바' content='즐거운 자바'></MyHeader>
            <MyHeader title='파이썬' content='재미있는 파이썬'></MyHeader>
        </div>
    )
}
export default App;