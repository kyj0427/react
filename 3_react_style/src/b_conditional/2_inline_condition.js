//2_inline_condition.js

import { useState } from "react";


/*
    [1] && 연산자 => if문 동일한 효과

        true && expression => expression (뒤에있는)
            
        false && expression => false (상관없이 false)

    [2] 삼항연산자 => if~else 동일한 효과

        조건 ? 참일경우 : 거짓인경우

    [3]
*/

function Counter(props){

    const [count , setCount] = useState(0);

    return(
        <div>
            {count && <h3>현재카운트: {count}</h3>}
            <hr/>
            <button onClick={()=>setCount((count)=>count+1 )}>눌러</button>
        </div>
    )
}

function MailBox(props){
    
    const unreadMessage = props.data

    return(
        <div>
            <h1>나의 메일 함</h1>
            {
                unreadMessage.length > 0 &&
                    <h3>
                        현재 {unreadMessage.length}개의 읽지 않은 메세지가 있습니다
                    </h3>
            }
        </div>
    )
}

function App(){

    var msg = []
    var msg2 = ['광고메일','회의메일','안부메일']

    return(
        <div>
            <Counter></Counter>
            <Counter></Counter>
            <hr/>
            <MailBox data={msg}></MailBox>
            <MailBox data={msg2}></MailBox>
        </div>
    )
}

export default App;