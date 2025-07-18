

import { useRef, useState } from "react";
import produce from 'immer';

const App = () => {

    const nextId = useRef(1);

    const [formData, setFormData] = useState({
        userid : ''
        , username : ''
    });

    const [data, setData] = useState({
        array: []
        , others: null
    })

    const onChange = (evt)=>{
        const {name, value} = evt.target;
        
        //setFormData({...formData, [name]:value} )
        setFormData( produce(formData, draft =>{ draft[name]=value } ))
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        const info = {
            id : nextId.current
            , userid : formData.userid
            , username : formData.username
        }

        //setData( {...data, array : data.array.concat(info)} )
        setData( produce(data, draft=> { draft.array.push(info)}) )
        nextId.current += 1; 

        // 화면 초기화
        setFormData({userid:'', username:''})

       
    }

    const onRemove = id =>{
        //setData({...data, array: data.array.filter(item => item.id !== id)})
        setData( produce(data, draft => { 
            draft.array.splice(draft.array.findIndex( info=> info.id===id), 1)
        }))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='userid'    
                        value={formData.userid} placeholder="아이디"
                        onChange={onChange} /><br/>
                <input type='text' name='username' 
                        value={formData.username} placeholder="이름 "
                        onChange={onChange} /><br/>
                <button type='submit'>등록</button>
            </form>
            <hr/>
            <div>
                <ul>
                    {  
                        data.array.map((item, idx)=> (
                            <li key={item.id} onClick={() => onRemove(item.id)}> {item.userid} :: {item.username} </li> 
                        ))
                    }
                </ul>
            </div>
        </div>
    )


}

export default App;