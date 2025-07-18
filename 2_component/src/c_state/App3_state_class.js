
//App3_state.class

/*
    state : 컴포넌트에서 값 변경하는 데이터 처리 객체    

    [클래스 컴포넌트인 경우]
    ` state 직접 변경은 안됨
    ` setState()를 이용하여 값을 변경 
    
*/

import { Component } from 'react';
import '../App.css'

class App extends Component{
    
    // let title = '우리동네'; => 에러 > 클래스형 컴포넌트에서는 바깥에서 변수 사용 불가 
    //생성자 함수를 이용하여 변수 사용 
    constructor(props){
        //반드시 생성자함수에서는 super를 불러야한다 
        super(props)

        // 정적인 데이터 
        this.title= '우리동네 사이트';

        // 변경 데이터
        this.state = {
            favorite : '맛집정보'
        }
    }
    
    render(){
        return(
            <div className='App'>
                <h2>클래스형 컴포넌트에서 state 변경하기</h2>
                <div className='App-link'>{this.title}</div>
                <div className='App-subtitle'>{this.state.favorite}</div>
                <hr/>
                <button onClick={()=>{
                    this.title = "너네 동네 사이트"
                    console.log(this.title)
                }}>일반변수 변경하기</button><br/>
         
                <button onClick={()=>{
                    this.state.favorite = "우리집 맛집 변경"
                    console.log(this.state.favorite)
                    this.forceUpdate(); //강제로 변경시킬수있지만 절대사용금지 
                }}>state 변수 직접 변경하기</button><br/>
         
                <button onClick={()=>{
                    this.setState({favorite:'맛집천하'})
                }}>state 변수 setState()로 변경하기</button><br/>
            </div>
        )
    }

}

export default App;

