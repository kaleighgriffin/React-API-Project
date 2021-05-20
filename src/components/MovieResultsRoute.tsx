import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Movie } from "../model/Movie";
import { fetchMovieInfo } from "../service/MovieApiService";
import MovieDetails from "./MovieDetails";


function MovieResults() {
    const [ moviesCriteria, setMoviesCriteria ] = useState<Movie[]>([]);
    const query = new URLSearchParams(useLocation().search)
    const year = parseInt(query.get('year')??'');
    const genre = query.get('genre')??'';
    const castMember = query.get('castMember')??'';

    useEffect(() => {
        fetchMovieInfo(year, genre, castMember).then(data => {
            setMoviesCriteria(data)
        })
    }, [year, genre, castMember])

    return(
        <div className="MovieResults">
           {moviesCriteria.map((movie, index) =>
           <MovieDetails key={index} movie={movie}/>
            )}
        </div>
    );

}

export default MovieResults;