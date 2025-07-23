
import {TodoListItemType} from '../TodoContext';

type TodoListItemProp = {
    todoItem :  TodoListItemType;
    deleteTodo : (no:number) => void ;
    toggleDone : (no:number) => void ;
}

const TodoListItem = (props:TodoListItemProp) => {

    let itemClassName = 'list-group-item';
    if (props.todoItem.done) itemClassName += '  list-group-item-success';
    // [0] 기존 구조
    return (
        <li className={itemClassName}>
            <span className={props.todoItem.done?"todo-done  pointer":"pointer"}  
                onClick={()=> props.toggleDone(props.todoItem.no) } 
            >
                {props.todoItem.todo}
                {props.todoItem.done?'  (완료)':''}
            </span>
            <span className="float-end badge bg-secondary pointer"
                onClick={()=> props.deleteTodo(props.todoItem.no) }
            > [ 삭제 ] </span>
        </li>
    );

   
}

export default TodoListItem;