
/*
    랜더링 성능을 최적화 하기 위해 
    callback 함수를 사용해야한다 

        - useMemo( func, [])
        - useCallback(func, [])

*/

//App4_useRef3.js
import { useCallback, useRef, useState } from 'react';

import '../App.css';
import produce from 'immer';

const App = () => {

    //키 값을 부여하기위한 도구
    const nextId = useRef(1);

    const [formData , setFormData] = useState({ userid:''
                        , username:''
                        , email:'' })

    const [data , setData] = useState({
        array: [],
        other: null
    }) 
    
    const onInputChange = useCallback((evt)=>{
        const {name, value} = evt.target; 
        // console.log(`${name} : ${value}`)
        setFormData({...formData, [name]: value})
    },[formData])

    const onSubmit = (evt)=>{
        // alert('ok')
        // prevent로 막아두고 진행해야 갱신막을수있다
        evt.preventDefault();

        //복사본 생성
        const info = {
            // ref로 만들어주고 난 후 그변수의 current 값 항상명시
            id : nextId.current
            ,userid : formData.userid
            ,username : formData.username
            ,email : formData.email
        }
        
        // array에 새 항목 추가
        setData({...data, array: data.array.concat(info)});

        // 폼 데이타 초기화
        setFormData({userid:'', username:'', email:''})

        
        console.log(data);

        // 다음에 쓸 id 증가
        nextId.current += 1;
    }

    const onRemove = useCallback((id) => {
        alert(id);
        // 이 부분은 오늘 확인만 합시다
        setData( produce(data, draft => {
            draft.array.splice(draft.array.findIndex( info => info.id===id), 1);
        }) )
        //setData({...data, array:data.array.filter(info=> info.id!==id)})
    }, [data])

    return (
        <div className='App'>
            {/* 이벤트랑 함수명을 동일하게 주는편이 편하다 */}
            <form onSubmit={onSubmit}>
                <input type='text' name="userid" placeholder="아이디" 
                onChange={onInputChange} value={formData.userid}/><br/>

                <input type='text' name="username" placeholder="이름" 
                onChange={onInputChange} value={formData.username}/><br/>

                <input type='text'name="email" placeholder="이메일" 
                onChange={onInputChange} value={formData.email}/><br/>

                <button type="submit">등록</button>
            </form>

            <hr/>
            <ul>
                {
                    data.array.map((info)=>{
                        return(
                        <li key={info.id} onClick={()=> onRemove(info.id)}>
                            <span>{info.userid}:{info.username}:{info.email}</span>
                        </li>
                    )})
                }
            </ul>


        </div>
    )
}

export default App;