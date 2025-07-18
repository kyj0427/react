//GitDetail.js
// react 에서는 파라매터를 useParams() 를 이용하여 받아준다

import { Link, useParams } from "react-router-dom";

const GitDetail = (props) =>{

    const {idx} = useParams();

    return(
        <div>
            <h3>{props.gits[idx].title}({props.gits[idx].full_name})</h3>
            <h3>{props.gits[idx].html_url}</h3>

            <br/>

            <Link to ='/'>뒤로(목록보기)</Link>
        </div>
    )
}

export default GitDetail;