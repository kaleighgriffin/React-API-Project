import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Movie } from "../model/Movie";
import { fetchMovieInfo } from "../service/MovieApiService";
import MovieDetails from "./MovieDetails";
import './MovieResultsRoute.css'


function MovieResults() {
    const [ moviesCriteria, setMoviesCriteria ] = useState<Movie[]>([]);
    const [ page, setPage ] = useState(1);
    const query = new URLSearchParams(useLocation().search)
    const year = parseInt(query.get('year')??'');
    const genre = query.get('genre')??'';
    // const pageNum = parseInt(query.get('page')??'');
    const voteAverage = query.get('voteAverage')??'';

    function pageUp() {
        setPage(page + 1);
    }

    function pageDown() {
        setPage(page - 1);
    }

    useEffect(() => {
        fetchMovieInfo(year, genre, voteAverage).then(data => {
            setMoviesCriteria(data);
        })
    }, [year, genre, voteAverage])

    console.log(document.URL)
    return(
        <div className="MovieResults">
            <p className="instructions">Click the star to add a movie to your personalized watchlist!</p>
           {moviesCriteria.map((movie, index) =>
           <MovieDetails key={index} movie={movie}/>
            )}
            <div className="buttonDiv">
                <button type="button" onClick={pageDown}>Previous Page</button>
                <button type="button" onClick={pageUp}>Next Page</button>
            </div>
        </div>
    );

}

export default MovieResults;