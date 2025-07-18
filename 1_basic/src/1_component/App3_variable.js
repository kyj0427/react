//App3_variable.js

import '../App.css';

let our = '우리팀화이팅';

let mystyle = 'App-link';

function msg(){return "오늘도 행복";}

const styleA = {color:'blue' , Fontsize:'22px'};

function App(){
    return(
        <div className='App'>
            <h2 className={mystyle}>{our}</h2>
            {/* <h2 className='App-link'>{our}</h2> <= 오리지널*/}
            <hr/>
            <h4>msg()</h4>
            {/* 안에{} 는 함수 밖에{} 는 js를 실행하기위함 */}
            <h4 style={{color:'red' , fontSize:'22px'}}>{msg()}</h4> {/*함수 사용하려면 반드시 {} 묶어야한다 */}
        </div>
    )

}

export default App;