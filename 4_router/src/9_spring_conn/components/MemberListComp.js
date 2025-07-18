import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MemberListComp() {
    
    const[ boards,setBoards] = useState([])

    useEffect(()=>{
        axios.get('/member/viewMemberList') //back - end 서버연결 (8080 톰캣서버)
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
                            <th>id</th>
                            <th>이름</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            boards.map( boards =>
                                <tr key={boards.id}>
                                    <td>{boards.id}</td>
                                    <td>{boards.name}</td>
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

export default MemberListComp;
