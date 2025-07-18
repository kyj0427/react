//App6_state_배열.js

import { useState } from "react";

function App(){
    //useState ()안에 는 초기값
    //functional 컴포넌트에서 값변경
    let[title , setTitle] = useState(['맛집1','맛집2','맛집3'])

    return(
        <div>
            <div>{title}</div>
            <button onClick={()=>{
                //배열 변경시 한꺼번에 변경가능 
                setTitle(['변경1', '변경2', '변경3'])
            }}> 변경 </button>
            <hr/>
            <ul>
                {
                    //인자 두개가넘어오는데 값이 필요없으면 안받아도된다 
                    title.map((item,idx)=>{
                        return(
                            <li key={idx} onClick={()=>{
                            let newItem = ['호남식당','학식','짬뽕집']
                            // console.log(newItem)
                            title[idx] = newItem[idx]
                            // console.log(title)
                            // setTitle(title);
                            // 깊은복사 => 전개연산자 사용해야한다
                            setTitle([...title])
                            }}>{item}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default App;