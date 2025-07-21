import { useState } from "react";
import App from './components/App';

import produce from 'immer';


const TodoContext = () => {
    const [todoList, setTodoList] = useState([
        { no : 1, todo : "일어나기", done : true},
        { no : 2, todo : "씻기",    done : false},
        { no : 3, todo : "옷입기",  done : false},        
    ]);

    // [0] 함수 기존 구조만
    const addTodo       = (todo) =>{
        // 1- ... 전개연산자
        // alert()
        let newTodoList = [...todoList, {no:new Date().getTime(), todo:todo, done:false}]
        setTodoList(newTodoList)

        //  2- immer

    }
    const deleteTodo    = (no)  => {
        //  1- ... 전개연산자 이용

        // alert(no)
        let idx =todoList.findIndex((todo)=> todo.no === no)
        // alert(idx)
        todoList.splice(idx, 1)
        let newTodoList = todoList.map((todo)=> {return {...todo}})
        setTodoList(newTodoList);

        //  2- immer
    }
    const toggleDone    = (no)   => { 
        // alert(no)
        //  1- ... 전개연산자 이용
        let newTodoList = todoList.map((todo)=>{
            // 기존의 todo done(no에 해당하는) 값을 바꿔줌
            if(todo.no === no) todo.done = !todo.done;
            // 나머지 값을 복사해서 새 객체로 리턴
            return {...todo}
        })
        setTodoList(newTodoList)
        //  2- immer
    }

    // App 컴포넌트는 props 를 통해 속성 4개를 받음 
    return(<App todoList={todoList}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleDone={toggleDone} />);

}

export default TodoContext;