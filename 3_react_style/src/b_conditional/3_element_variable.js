// 3_element_variable.js

import { useState } from "react";

// 엘리먼트 변수 : 엘리먼트(컴포넌트에 데이터까지 심어놓은)를 변수에 저장(지정)

//컴포넌트로 만들때 앞글자 대문자
function LoginButton(props){
    return <button onClick={props.onClick}>로그인</button>

}

function LogoutButton(props){
    return<button onClick={props.onClick}>로그아웃</button>
}

function LoginControl(props){
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let btn;

    if(isLoggedIn){
        btn = <LogoutButton onClick={()=>{setIsLoggedIn(false)}}/>

    }else{
        btn = <LoginButton onClick={()=>{setIsLoggedIn(true)}}/>
    }

    return btn;
}

function App(){
    return<LoginControl/>
}

export default App;