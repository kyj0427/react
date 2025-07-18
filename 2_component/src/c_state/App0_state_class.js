// App0_state_class

import { Component } from "react";

class CLassComp extends Component{

    constructor(props){
        super(props);
        //정적변수 => 값 변경 안됨
        //this.data = 100;
    
        // 값이 변경 변수 
        this.state = {
            Number : 0
        }
    }

    render(){
        return(
            <div>
                <h3> 클래스 컴포넌트 </h3>
                <p> 숫자 : {this.state.Number}</p>
                <hr/>
                <input type='button' value='확인1' onClick={
                    function(){
                        this.setState({Number: Math.ceil(Math.random()*100)})
                    }.bind(this)
                }></input>
                <input type='button' value='확인2'onClick={
                    ()=>{ //화살표함수를 사용하면 bind 사용 안해도된다 
                        this.setState({Number: Math.ceil(Math.random()*100)})
                    }
                }></input>
            </div>
        )
    }
}
export default CLassComp