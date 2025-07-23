import { useContext, useState } from "react";
import TodoContext from "../TodoContext";


// type InputTodoType = {
//     addTodo : (todo:string) => void;
// }

const InputTodo = () => {

    //context 를 받기위해서 필요함
    const value = useContext(TodoContext);
    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');

    const changeTodo = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(evt.target.value)
    }

    const addHandler = ()=> {
        value?.actions.addTodo(todo);
        setTodo('');
    }

    const enterKey = (evt : React.KeyboardEvent) =>{
        if(evt.key === 'Enter') { addHandler();}
    }

    return(
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <input type='text' id='msg' name='msg' 
                        value={todo} placeholder="여기에 입력" className="form-control"
                        onChange={changeTodo}
                        onKeyUp={enterKey}
                        />
                    <span className="btn btn-info" onClick={addHandler}> [ 추가 ] </span>    
                </div>
            </div>
        </div>
    );


}

export default InputTodo;