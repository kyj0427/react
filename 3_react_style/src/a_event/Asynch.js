//a_event / Asynch.js

import { useState } from "react";

function App(){
    
    let [count, setCount] = useState(100);

    const synch_increment = () =>{
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)

    }

    const asynch_increment =()=>{
        setCount((count)=> count+1);
        setCount((count)=> count+1);
        setCount((count)=> count+1);
    }

    const asynch_increment_temp =()=>{
        setCount((count)=> count+1);
        setCount((count)=> count+1);
        setCount((count)=> count+1);
    }

    return(
        <div>
            <div>{count}</div>
        <button onClick={synch_increment}>동기식</button>
        <button onClick={()=>{}}>비동기식(리액트권장)</button>
        <button onClick={()=>{}}>잘못된 방식</button>
        </div>
        
        
    )
}

export default App;