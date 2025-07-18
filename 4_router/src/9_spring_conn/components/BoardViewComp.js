import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoardViewComp(){

    const {seq} = useParams(); 

    //빈객체 등록
    const [board, setBoard] = useState({});

    useEffect(()=>{
        axios.get('/api/board/'+ seq)
        .then(result => setBoard(result.data))
    },[])

    const navigate = useNavigate();
    
    const returnList = ()=>{
        navigate('/')
    }
    const deleteBtnHandle = function(){
        // axios.delete('/api/board/'+seq);
        axios.delete(`/api/board/${seq}`);
        navigate('/')
    }

    return(
        <div>
            <div className='col-md-6 offset-md-3'>
                <h3 className='text-center'> 게시글 보고 </h3>
                <div className='card-body'>
                    <div className='row'>
                        <div className='alert alert-success'>제목:{board.title}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>작성자:{board.writer}</div>
                    </div>

                    <div className='row'>
                        <div className='alert alert-success'>내용 {board.content}</div>
                    </div>

                    <button className='btn btn-primary' style={{marginLeft:'10px'}}
                    onClick={returnList}>글목록으로 이동</button>
                    <button className='btn btn-danger' style={{marginLeft:'10px'}}
                    onClick={deleteBtnHandle}>삭제하기</button>
                </div>
            </div>
        </div>
    )

}

export default BoardViewComp;