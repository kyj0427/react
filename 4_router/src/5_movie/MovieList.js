
// 5_movie / MovieList.js

import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./component/Movie";

const MovieList = ()=>{

    const [isLoading, setIsLoading] = useState(true)

    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        await axios.get('https://yts.mx/api/v2/list_movies.json')
                .then(result => {
                    //console.log(result.data.data.movies)

                    const movies_temp =  result.data.data.movies;
                    // setMovies(movies_temp);
                    setMovies([...movies_temp])

                    setIsLoading(false)
                })
    }

    useEffect(()=>{        
        getMovies();
    },[])

    return(
        <div>{ isLoading?'로딩중....' :
            //인자가 한개면 () 생략가능 
            // {}생략가능      movies.map((movie) => {return <movie/>})
                            movies.map(movie=><Movie
                                                    key={movie.id}
                                                    id={movie.id}
                                                    title={movie.title}
                                                    year={movie.year}
                                                    poster={movie.small_cover_image}
                                                    genres={movie.genres}     
                            />)
        }</div>
    )
}


export default MovieList;