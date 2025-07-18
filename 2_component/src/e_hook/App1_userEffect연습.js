// App1_userEffect연습

import { useEffect, useState } from 'react';
import '../App.css';

const Clock = ()=>{
    const [nowTime, setNowTime] = useState(new Date().toString())

    useEffect(()=>{

        const handle = setInterval(()=>{
            console.log('똑딱\n')
            setNowTime(new Date().toString())
        },1000)
        
        
        return()=>{clearInterval(handle)}
    }, [])

    return(
        <div className='App-link'>
            <h4>{nowTime}</h4> 
        </div> 
    )
}

const App= ()=>{

    const [isClockVisible, setIsClockVisible] = useState(false)

    return(
        <div className='App-header'>
            <h2>시계놀이</h2>
            <button onClick={()=>{ setIsClockVisible(!isClockVisible)}}>눌러</button>
            <hr/>
            { isClockVisible? <Clock/> : ""}
        </div>
    )  

}

export default App;