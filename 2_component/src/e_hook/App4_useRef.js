// App4_useRef.js

import { useState, useRef } from "react";

/*
    useRef()

        [1] useRef()로 리턴값은 객체는 컴포넌트의 모든 생명주기 동안 유지됨
                => ref 객체가 변경되더라도 렌더링 되지 않는다
                    그러나 useState()의 변수에 렌더링이 일어나면 화면에 값이 변경됨

        [2] 브라우저 DOM 요소에 직접 접근 가능
*/

const App =() =>{
    // useState() : 타이핑할 때 마다 값이 계속 바뀜 
    const [ realname, setRealname ] = useState('홍길동')

    // useRef() : 값은 유지되지만 다른것에 의해서 변경됨
    const refNickname = useRef('산적')

    return(
        <div>
            <h2>데이타 상태</h2>
            <div>
                <span> 본명 : {realname} </span>
                <input type='text' onChange={(evt)=>{ setRealname(evt.target.value)

                }}></input>
            </div>
            <div>
                <span> 별명 : {refNickname.current}</span>
                <input type='text' onChange={(evt)=>{ refNickname.current = evt.target.value}}></input>
            </div>
        </div>
    )

}

export default App;