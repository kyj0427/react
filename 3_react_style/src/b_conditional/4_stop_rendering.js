//4_stop_rendering.js

/*
    컴포넌트의 랜더링 막기 
        => return null
*/

import { useState } from 'react';
import '../App.css';

function Banner(props){
    if(!props.show) return null;
    return <div className='App-header'>광고</div>
}

function MainPage(props){

    const [show , setShow] = useState(false);

    return(
        <div>
            <button onClick={()=> setShow( (show)=>!show)}>{show? '감추기': '보이기'}</button>
            <hr/>
            <Banner show={show}/>
        </div>
    )
}

export default MainPage;