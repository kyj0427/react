//App5_todo.js

/*
    랜더링 성능 향상
        -useMemo()
        -useCallback() : 자주쓰는 함수를 캐싱
*/


import { useCallback, useMemo, useState } from 'react';
import '../App.css'

const App = ()=>{
    //초기화
    const [todo , setTodo] = useState('');
    //배열생성
    const [todoList, setTodoList] = useState([]);
    
    //usecallback 함수로 성능향상
    const addTodo = useCallback((todo)=>{
        //배열을 만들때 변수를 한개 더만들어주는게 좋다 (기존의 todoList를 전개연산자로 처리)
        const newTodoList = [...todoList,{id:new Date().getTime(), todo: todo}]
        setTodoList(newTodoList);
        setTodo('')
    }, [todoList])

    // useMemo함수로 성능향상
    const getTodoListCount = (todoList)=>{
        return todoList.length;
    }
    
    const resultCount = useMemo(() => getTodoListCount(todoList), [todoList]);
    
    //usecallback 함수로 성능향상
    // 인자가 1개일때 생략가능 
    const deleteTodo = useCallback( id =>{
        //todolist에서 요소 한개씩 뽑아서 id값이 같은걸 찾는다
        let idx = todoList.findIndex(item => item.id === id)

        //전개연산자로 새롭게 newtodolist 생성
        let newTodoList = [...todoList]
        newTodoList.splice(idx, 1)

        //자른 후에 newtodolist로 변경
        setTodoList(newTodoList)
    },[todoList])
    
    return(
        <div className="App"> 
        {/* todo 변수와 입력창을 연결시켜줌 */}
            <input type='text' value={todo} onChange={(evt)=>setTodo(evt.target.value)}></input>
            <button onClick={()=> addTodo(todo)}>할일 추가</button>
            <hr/>
            <div className='App-subtitle'>남은 할일의 갯수 : {resultCount}</div>
            <hr/>

            {/* 여기에 할일 목록 출력 */}
            <ul>
                {
                    todoList.map((item)=> {
                    return (
                        <li key={item.id}>
                            <span>{item.todo}</span>
                            <button onClick={()=> deleteTodo(item.id)}>삭제</button>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}
export default App;