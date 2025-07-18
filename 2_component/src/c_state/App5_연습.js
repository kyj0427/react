// App5_연습.js => 함수형 컴포넌트 

import { useState } from "react";



function App(){

    let [count , number] = useState(0)

    return(
        <div>
            <h3>값:{count}</h3>
            <input type="button" value='+' onClick={()=>number(count+1) }></input>
            <input type="button" value='-' onClick={()=>number(count-1) }></input>
        </div>
    )
}

export default App;

