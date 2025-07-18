// 0_review / 1_spread.js

import { useRef, useState } from "react";

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
        //console.log(name + ":" + value)
        
        // setFormData({[name]:value})
        // console.log(formData)

        setFormData({...formData, [name]:value} )
        console.log(formData)
    }
    const onSubmit = (evt) => {
        evt.preventDefault();

        const info = {
            id : nextId.current
            ,   userid : formData.userid
            , username : formData.username
        }

        //list는 붙히기 작업가능 
        setData( {...data ,array : data.array.concat(info)})
        console.log(data);
        
        // 화면 초기화
        setFormData({userid:'', username:''})

        nextId.current += 1;
    }
    const onRemove = id =>{
        setData({...data, array: data.array.filter(item => item.id !== id)})
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
                <button>등록</button>
            </form>
            <hr/>
            <div>
                <ul>
                    {   // {} : return 생략 못함
                        // () : return 생략 가능
                        data.array.map((item, idx)=> (
                            <li key={item.id} onClick={onRemove(item.id)}> {item.userid} :: {item.username} </li> 
                        ))
                    }
                </ul>
            </div>
        </div>
    )


}

export default App;