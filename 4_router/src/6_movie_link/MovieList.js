
// MovieList.js

import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const MovieList = (props) =>{

    let list = props.movies.map((movie, idx)=>{
        return(
            <div key={{idx}}>
                <div>
                    {/* h태그안에 들어있는것 = 변수 =>{}처리 필요 */}
                    <Link to={`/detail/${idx}`}><h3>{movie.title}</h3></Link>
                    <h5>{movie.year}</h5>
                    <img src={movie.small_cover_image}/>
                </div>

            </div>
        )
    })

    return(
        <div>
            <p>영화목록 페이지입니다</p>
            <hr/>
            {list}
        </div>
    )
}

export default MovieList;