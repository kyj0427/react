import '../css/board.css'

import { useEffect, useState } from 'react';
import axios from 'axios';

function App(){

    // [1-2] useState로 상태값 지정
    const [boardContent, setBoardContent] = useState({
        btitle : '',
        bname : '',
        mid : '',
        bpw : '',
        bcontent : ''
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = (e) => {
        const {name, value} = e.target;
        setBoardContent({
            ...boardContent,
            [name] : value
        })
        // 값변경시 (키보드 누를 때마다) 확인한다면
        // console.log(boardContent)
    }

    const insertBtnHandle = function(evt){
        evt.preventDefault();

        axios.post('http://localhost:8000/api/insert', boardContent)
            .then((result) => boardLoad());
            
    }

    const deleteBtnHandle = (bnum)=>{

        axios.delete(`http://localhost:8000/api/delete/${bnum}`)
        .then((result) => boardLoad());
    }

    const boardLoad = () => {
        axios.get('http://localhost:8000/api/get')
            .then((result)=>{ setViewContent(result.data) })
    }

    useEffect(()=>{
        boardLoad();
    }, []);


    // ----------------------------------------------------
    // 0. 화면 출력
    return (
        <div>               
                <table>
                    <tr>
                        <td><label>글제목</label></td>  {/* [1-1] 입력값의 상태가 변경시 */}
                        <td><input type="text" name="btitle" onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td><label>작성자</label></td>
                        <td><input type="text" name="bname" onChange={getValue}/></td>
                    </tr>   
                    <tr>
                        <td><label>아이디</label></td>
                        <td><input type="text" name="mid" onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td><label>비밀번호</label></td>
                        <td><input type="text" name="bpw" onChange={getValue}/></td>
                    </tr>
                    <tr>
                        <td><label>내용</label></td>
                        <td>
                            <textarea name="bcontent" id="bcontent" cols="30" rows="5" onChange={getValue}></textarea>
                        </td>
                    </tr>  
                    <tr>
                        <td colSpan="2">    
                            {/* 필수연습 */}
                            <input type="submit"  value="입력" onClick={insertBtnHandle}/>
                            {/* 선택연습 */}
                            <input type="submit"  value="수정"/>
                        </td>
                    </tr>
                </table>

                {/* [2-2] 화면출력 */}
                <hr/>
                <div className='App'> [ 목록 ] </div>
                <table>
                {
                    viewContent.map((item, idx) =>  
                        <tr className='listBox' key={idx}>
                            {/* 선택연습: 제목을 클릭하면 해당하는 레코드가 위의 화면 출력 */}
                            <td>{item.btitle}</td>
                            <td>{item.bname}</td>
                            {/* 필수연습 */}
                            <td><button onClick={()=>deleteBtnHandle(item.bnum)}>삭제</button></td>
                        </tr>
                    )
                }
                </table>

        </div>
    ); 

}

export default App;