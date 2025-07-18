import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BoardInsertComp () {

    //사용자 입력값을 저장한 변수 선언

    const [title,setTitle] = useState('');
    const [writer,setWriter] = useState('');
    const [content,setContent] = useState('');

    const navigate =useNavigate();

    const cancleBtnHandler = function(){
        navigate('/')
        // navigate(-1) //history.back() => 뒤로가기 버튼
    }

    const saveBtnHandle = function(evt){
        evt.preventDefault(); //항상 페이지 새로고침 해야되는 지 안해야되는지 생각해봐야함

        // alert(title+"/"+writer+content)

        let board ={
            title: title,
            writer: writer,
            content: content
        }
        //  왼쪽의 이름은 백엔드의 BoardVO의 멤버 변수명 
        //  오른쪽의 이름은 위에 state 변수
        axios.post('/api/board/write', null, {params:board});  
        //백엔드에서 postmaping을 사용했게때문에 axios.post 사용 
    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="title" name="title" className="form-control" 
                                    value={title} onChange={(evt)=>{setTitle(evt.target.value)}}
                                    /></div>
                                <div className = "form-group">
                                    <label> 작성자 </label>
                                    <input type="text" placeholder="writer" name="writer" className="form-control" 
                                    value={writer} onChange={(evt)=>{setWriter(evt.target.value)}}/>
                                </div>
                                <div className = "form-group">
                                    <label> 내용  </label>
                                    <textarea placeholder="content" name="content" className="form-control" 
                                    value={content} onChange={(evt)=>{setContent(evt.target.value)}}/>
                                </div>
                                <div className = "form-group">
                                    <button className="btn btn-success"
                                            onClick={saveBtnHandle}
                                                                        >저장하기</button>
                                    <button className="btn btn-danger" 
                                            onClick={cancleBtnHandler}
                                            style={{marginLeft:"10px"}}>취소하기</button>
                                </div>                           
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoardInsertComp;