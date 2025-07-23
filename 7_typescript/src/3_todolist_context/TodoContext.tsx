import { useState, JSX } from "react";
import App from './components/App';
import React from "react";
import produce from 'immer';

export type TodoListItemType = {
    no      : number;
    todo    : string;
    done    : boolean;
}


//-------------------------------
export type TodoListContextValueType = {
    state : { todoList: Array<TodoListItemType>},
    actions : {
        addTodo : (todo:string) => void
        deleteTodo : (no:number)=> void
        toggleDone : (no:number)=> void
    }
}

const TodoContext = React.createContext<TodoListContextValueType|null>(null);

type PropsType = {
    children : JSX.Element | JSX.Element[]
} 
const TodoProvider = (props:PropsType) => {
    const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
        { no : 1, todo : "일어나기", done : true},
        { no : 2, todo : "씻기",    done : false},
        { no : 3, todo : "옷입기",  done : false},        
    ]);

    // [0] 함수 기존 구조만
    const addTodo       = (todo:string) =>{
        // 1- ...
        let newTodoList = [...todoList, {no:new Date().getTime(), todo:todo, done:false }]
        setTodoList(newTodoList)

        // 2- immer

    }

    const deleteTodo    = (no:number)  => {
        //alert(no)
        // 1- ...
        let idx = todoList.findIndex((todo)=> todo.no === no)
        //alert(idx)
        todoList.splice(idx, 1)
        let newTodoList = todoList.map((todo) => {return {...todo}})
        setTodoList(newTodoList);

        // 2- immer

    }

    const toggleDone    = (no:number)   => {
        
        //alert(no)
        // 1- ...
        let newTodoList = todoList.map((todo)=>{
            if(todo.no===no) todo.done = !todo.done;
            return {...todo}
        })
        setTodoList(newTodoList)

        // 2- immer
    }

    const values = {
        state : {todoList},
        actions : {addTodo, deleteTodo, toggleDone}
    }
    return(
        <TodoContext.Provider value={values}>
            { props.children }
        </TodoContext.Provider>
    );

}

export {TodoProvider};
export default TodoContext;