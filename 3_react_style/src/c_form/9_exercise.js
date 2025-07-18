import { useState, useRef } from "react"

const Cost = (props)=>{

    

    return(
        <div>
            <h5>{props.title}</h5>
            <input type="text" value={props.value} ></input>
        </div>
    )
}





const App = ()=>{

    const elemW = useRef(null); //값이 아닌 연결하기 위한 것 
    const elemD = useRef(null); //값이 아닌 연결하기 위한 것 
    const [data, setData] = useState({
        w : ""
        , d :""
})

    return(
        <div>
            <Cost title="원화 금액을 입력하세요" ref={elemW} ></Cost>
            <Cost title="달러 금액을 입력하세요" ref={elemD}></Cost>
        </div>
    )
}

export default App;