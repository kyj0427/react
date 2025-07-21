import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import TodoContext from "../TodoContext";

const TodoList = (props) => {

    // let items = props.todoList.map((item)=>{
    //     return <TodoListItem key={item.no} 
    //                 todoItem={item} 
    //                 deleteTodo={props.deleteTodo}
    //                 toggleDone={props.toggleDone}
    //     />
    // });

    // context 개념은 props 로 받지않고 받은 value 값을 리턴해야한다
    const value = useContext(TodoContext);

    let items = value?.state.todoList.map((item)=>{
        return <TodoListItem key={item.no} 
                    todoItem={item} 
                    deleteTodo={value?.actions.deleteTodo} 
                    toggleDone={value?.actions.toggleDone}
        />
    });

    return(
        // [0] 기존 구조
        <div>
            <div>
                <ul>{items}</ul>
            </div>
        </div>
    
    );
}

export default TodoList;