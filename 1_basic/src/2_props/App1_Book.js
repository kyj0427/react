// App1_Book.js
import "../App.css"

function Book(props){
    return(
        <div>
            <h2>책제목: {props.title}</h2>
            <h4>저자:   {props.writer} </h4>
            <h5>가격:   {props.price}</h5>
        </div>
    );
}


function App(){
    return(
        <div className="App">
            <Book title='자,,바'   writer='김용재' price='2000원'/>
            <Book title='파이썬' writer='용용' price='3000원'/>
            <Book title='리액트' writer='버블' price='4400원'/>
            
        </div>
    )
}

export default App;

