import { useContext, useState } from "react";
import TodoContext from "../TodoContext";


const InputTodo = (props) => {

    // -----------------------------------
    // 컨텍스트를 사용하고자 한다면 
    const value = useContext(TodoContext);

    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');

    const changeTodo = (evt) => {
        setTodo(evt.target.value)
    }

    const addHandler = () => {
        // -------------------------------
        // props.addTodo(todo);
        // ? <<  ~있으면 그떄 함수를 사용해라
        value?.actions.addTodo(todo);
        setTodo('');
    }

    // enter처리
    const enterKey = (evt) => {
        if(evt.key === 'Enter') { addHandler();}
    }

    return(
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input type='text' id='msg' name='msg' 
                        value={todo} placeholder="여기에 입력" className="form-control" 
                        onChange={changeTodo} onKeyUp={enterKey}
                        />
                    <span className="btn btn-warning" onClick={addHandler}> [ 추가 ] </span>    
                </div>
            </div>
        </div>
    );


}

export default InputTodo;