// App4_연습1_class.js

import { Component } from "react"

class App extends Component{
    
    //생성자 함수를 이용하여 변수 사용 
    constructor(props){
        //반드시 생성자함수에서는 super를 불러야한다 
        super(props)

        // 정적인 데이터 
        this.state = {
            title : '맛집정보'
        }
    }

    render(){
        return(
        <div>   
        <ul>
        <li className='App-title' onClick={() => this.setState({ title: '돈가스맛집' })}>
            돈가스맛집
        </li>
        <li className='App-title' onClick={() => this.setState({ title: '호남식당맛집' })}>
            호남식당맛집
        </li>
        <li className='App-title' onClick={() => this.setState({ title: '학식맛집' })}>
            학식맛집
        </li>
        </ul>
        <div className='App-header'>{this.state.title}</div>
        </div>    
        );
    }

}

export default App;