// App6_useHook.js

import { useEffect, useState } from "react";

/*
    사용자 hook

*/

function useCounter(initValue){

    const [count, setCount] = useState(initValue);

    const incrementCount = ()=> setCount((count)=> count+1);

    const decreamentCount = () => setCount(count=> Math.max(count-1,0));

    //함수 3가지 리턴
    return[count,incrementCount,decreamentCount];
}

const MAX_CAPACITY = 5;

function Room(){
    //훅을 통해 변수를 생성
    const [count, increaseCount, decreaseCount] = useCounter(0);

    const [isFull, setIsFull] = useState(false);

    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY)
        console.log(`현재 수 확인: ${count} -${isFull}`)
    }  ,[count] );
    return(
        <div>
            <p>{`총 ${count}명 입실`}</p>
            < button onClick={()=> increaseCount()}>입실</button>
            < button onClick={()=> decreaseCount()}>퇴실</button>

            { isFull && <p style={{color:'red'}}>정원이 다 찼습니다</p>}
        </div>
    )
}

export default Room;