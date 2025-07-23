
// 2_App.tsx : 컴포넌트를 만들어서 출력하는 곳

import { useState } from "react";
import Calc from "./2_Calc";


const App = () =>{

    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    return(
        <div>
            <Calc x={1} y={2} op={"+"}/>
            <Calc x={4} y={5} op={"-"}/>
            <Calc x={3} y={8} op={"*"}/>
            <Calc x={3} y={8} />
            <Calc/>
        </div>
    )
}

export default App;