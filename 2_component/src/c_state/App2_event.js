//App2_event.js

import '../App.css';

function App(props){

    function btnClick(){ alert('확인1');}

    return(    
        <div className='App'>
            
            {/* 읽으면서 발생함 */}
            {/* <button onClick={ alert('확인0')}>이벤트확인0 (이벤트처리 아님)</button> */}

            {/* onclick =>(이벤트) 에는 반드시 함수가 들어와야함 */}
            <button onClick={ btnClick}>이벤트확인1</button>
            <hr/>

            {/* jsx 의 코딩을 위한 {{함수처리를 위한}}  */}
            <button onClick={function btnClick() { alert('확인2'); } }>이벤트확인2</button>
            <hr/>

            <button onClick={ ()=> { alert('확인3'); } }>이벤트확인3</button>
            <hr/>
        </div>
    )
}

export default App;