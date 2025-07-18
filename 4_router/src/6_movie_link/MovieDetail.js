//MovieDetail.js
// react 에서는 파라매터를 useParams() 를 이용하여 받아준다

import { Link, useParams } from "react-router-dom";

const MovieDetail = (props) =>{

    const {idx} = useParams();

    return(
        <div>
            <h3>{props.movies[idx].title}({props.movies[idx].year})</h3>
            <img src={props.movies[idx].medium_cover_image}></img>
            <h3>{props.movies[idx].genres}</h3>

            <br/>

            <Link to ='/'>뒤로(목록보기)</Link>
        </div>
    )
}

export default MovieDetail;