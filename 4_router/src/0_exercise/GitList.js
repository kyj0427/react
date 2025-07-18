
// GitList.js

import { Link } from "react-router-dom";
import GitDetail from "./GitDetail";

const GitList = (props) =>{

    let list = props.gits.map((item, idx)=>{
        return(
            <div key={idx}>
                <div>
                    <Link to={`/detail/${idx}`}><h3>{item.full_name}</h3></Link>
                    <h5>{item.html_url}</h5>
                </div>

            </div>
        )
    })

    return(
        <div>
            <p>Git 페이지입니다</p>
            <hr/>
            {list}
        </div>
    )
}

export default GitList;