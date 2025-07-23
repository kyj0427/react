import { useState } from "react";


type InputTodoType = {
    addTodo : (todo:string) => void;
}

const InputTodo = (props:InputTodoType) => {
    // [0] 화면 구성 확인
    const [todo, setTodo] = useState('');

    const changeTodo = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(evt.target.value)
    }

    const addHandler = ()=> {
        props.addTodo(todo);
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