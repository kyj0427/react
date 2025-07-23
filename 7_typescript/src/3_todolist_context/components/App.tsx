import InputTodo    from "./InputTodo";
import TodoList     from "./TodoList";

import {TodoListItemType} from '../TodoContext';

// type AppProps = {
//     todoList:   Array<TodoListItemType>;
//     addTodo :   (todo:string) => void;
//     deleteTodo: (no:number) => void  ;
//     toggleDone: (no:number) => void  ;
// }

const App = () =>{
    return (
        // [0] 기존 구조
        <div>
            <div>
                <div>할일목록</div>
            </div>
            <div>
                <div>
                    <InputTodo  />
                    <TodoList   />
                </div>
            </div>
        </div> 
    );
}

export default App;