
// 6_movie_link / Movie.js

const Movie = (props) => {

    return(
        <div>
            <div>{props.id} : {props.title} ({props.year})</div>
            <img src = {props.poster} alt={props.title}></img>
            <ul> {props.genres.map((genre,idx)=><li key={idx}>{genre}</li> )}</ul>
            <hr/>
        </div>
    )
}

export default Movie;