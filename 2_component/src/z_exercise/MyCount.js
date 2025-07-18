// MyCount.js

import { useState } from "react";


function MyCount({name}){
    
    const [number , setNumber] = useState(0);

    const incrementCount = ()=> setNumber((count)=> count+1);

    const decreamentCount = () => setNumber(count=> Math.max(count-1,0));

    return(
        <div>
            <span>{name}</span>
            <button onClick={incrementCount}>▲</button>
                <span>{number}</span>
            <button onClick={decreamentCount}>▼</button>
        </div>
    )
    
    
}

export default MyCount;