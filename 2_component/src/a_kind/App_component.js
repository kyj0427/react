

// [예시] <h2> ooo님, 반갑습니다 </h2>

import '../App.css'; 
import { Component } from "react";

function FuncHello(props){
    return(
    <div>
        <h1>{props.name}</h1>
    </div>
    );
}

class ClassHello extends Component{

    render(){
        return(
            <header>
                <h1>{this.props.name}</h1>
            </header>
        );
    }
} 




function App(props){
    return(
        <div>
            함수형 컴포넌트 : <FuncHello name='홍길동'></FuncHello>
            <hr/>
            클래스형 컴포넌트 : <ClassHello name='박길동'></ClassHello>
        </div>
    )

}

export default App;