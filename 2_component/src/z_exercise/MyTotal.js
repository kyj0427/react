import { useEffect, useState }from "react";

function useCounter(initValue){
    const [count, setCount ]  = useState(initValue);

    const incrementCount = () => setCount(count=> count+1);

    const decrementCount = () => setCount(count => Math.max(count-1,0));

    return [count, incrementCount, decrementCount];
}

// MyCount 컴포넌트
function MyCount() {

    const [count, incrementCount, decrementCount] = useCounter(3);

        return (
        <div>
            <button onClick={()=> decrementCount()}>▼</button>
            <span>{count}</span>
            <button onClick={()=> incrementCount()}>▲</button>
        </div>
    );
}

// MyMenu 컴포넌트
const MAX_CAPACITY = 10;

function MenuItem({ name }) {

    const [count, incrementCount, decrementCount] = useCounter(3);

    const [isFull, setIsFull ] = useState(false);

    useEffect(()=>{
        setIsFull(count>= MAX_CAPACITY)
    },[count]);

    return (
        <div>
            <span>{name}</span>
            <button onClick={()=> decrementCount()}>▼</button>
            <span>{count}</span>
            <button onClick={()=> incrementCount()}>▲</button>

            { isFull && <p style={{color:'red'}}>담을 수 있는 과일이 다 찼습니다.</p> }
        </div>
    );
}

// MyCount 컴포넌트
function MyMenu() {
    return (
        <div>
            <MenuItem name="사과 " />
            <MenuItem name="배" />
            <MenuItem name="귤" />
        </div>
    );
}

// 전체 컴포넌트
function App() {
    return (
        <div className="App">
            <h5>[ MyCount 컴포넌트 ]</h5>
            <MyCount />

            <h5>[ MyMenu 컴포넌트 ]</h5>
            <MyMenu />
        </div>
    );
}

export default App;