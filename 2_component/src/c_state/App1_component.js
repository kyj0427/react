// App1_component.js

import '../App.css';
import XHeader from './components/MyHeader';
import MyMenu from './components/MyMenu';

//값 변경하고싶을 때 state

//function App(){
//const App = function(){
const App = () => {
    
    return(
        <div className='App'>
            <XHeader title='메뉴1' content='맛있는 밥'></XHeader>
            <XHeader title='메뉴2' content='맛있는 면'/>
            <XHeader title='메뉴3' content='맛있는 거'/>
            <hr/>
            <MyMenu data='안녕하세요'></MyMenu>
            <MyMenu data='하이'/>
        </div>
    )
}

export default App;