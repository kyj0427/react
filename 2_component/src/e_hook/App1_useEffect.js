// App1_useEffect.js

import { useEffect, useState } from "react";

/*
    # hook
        ` 함수형 컴포넌트에만 호출 
        ` 반복문이나 중첩함수 안에서 호출 안됨

    # useEffect()

        ` 클래스형 컴포넌트의 lifecycle 함수의 기능을 대신 수행  
        -> componentDidMount componentDidUpdate componentWillUnmount 와 동일한 기능 수행

        ` useEffect( 이벤트함수, 의존성배열 )

            -의존성 배열이 없는 경우: 컴포넌트가 업데이트 될 때마다 
            -의존성 배열이 있는 경우: 배열의 값이 변경될 때마다 호출
            -의존성 배열이 빈 배열인 경우: 레더링될 때 호출됨
*/

function Form(){

    const [realname, setRealname] = useState('ㄱ')
    const [nickname, setNickname] = useState('ㄴ')

    useEffect(()=>{
        //[1]
        console.log(`본명: ${realname} \t 별명: ${nickname}`)
        
        return ()=> console.log('~~~~~~~~~ Form 컴포넌트가 언마운트')
    }, [])

    return(
        <div>
            <div>
                <span>본명 : {realname}</span>
                {/* evt 인자 */}
                <input type="text" value={realname} onChange={(evt)=>{setRealname(evt.target.value)}}></input>
            </div>

            <div>
                <span> 별명 : {nickname}</span>
                <input type="text" value={nickname} onChange={(evt)=>{setNickname(evt.target.value)}}></input>
            </div>
        </div>
    )
}

function App(){

    const [isVisible, setIsVisible] = useState(true);

    return(
        <div>
            <button onClick={()=>{
                setIsVisible(!isVisible)
            }}>{isVisible?'Hide':'show'}</button>
            <hr/>
            { isVisible && <Form/>}
            
        </div>
        
    )

}

export default App;