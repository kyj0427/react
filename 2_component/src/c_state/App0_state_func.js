// App0_state_func.js

import { useState } from "react";

function CLassComp() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h3> 함수형 컴포넌트 </h3>
            <p> 숫자 : {number}</p>
            <hr />
            <input type='button' value='확인1' onClick={function () {
                    setNumber(Math.ceil(Math.random() * 100));
                }}
            />
            <input
                type='button'
                value='확인2'
                onClick={() => {
                    setNumber(Math.ceil(Math.random() * 100));
                }}
            />
        </div>
    );
}

export default CLassComp;
