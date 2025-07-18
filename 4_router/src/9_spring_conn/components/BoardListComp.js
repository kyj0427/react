import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BoardListComp () {
    
    const[ boards,setBoards] = useState([])

    useEffect(()=>{
        axios.get('/api/board') //back - end 서버연결 (8080 톰캣서버)
            .then( result => {
                // console.log(result.data);
                const temp = result.data;
                setBoards([...temp]);

            })
    },[])
    
    const navigate = useNavigate();

    const createBoard =()=>{
        navigate('/api/insert-board')

    }
    const readBoard = (evt, seq)=>{
        evt.preventDefault();
        navigate(`/api/view-board/${seq}`); //문자열 포멧팅
        // navigate('/api/view-board/'+ seq);
    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>타이틀</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boards.map( boards =>
                                <tr key={boards.seq}>
                                    <td>{boards.seq}</td>
                                    <td>
                                        <a onClick={(evt)=>{readBoard(evt, boards.seq)}}>{boards.title}</a>
                                    </td>
                                    <td>{boards.writer}</td>
                                    <td>{boards.regdate}</td>
                                    <td>{boards.cnt}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>  

            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}>글작성</button>
            </div>       

        </div>
    );

}

export default BoardListComp;
