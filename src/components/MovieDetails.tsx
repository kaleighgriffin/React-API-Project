import { Movie } from "../model/Movie";
import { MovieContext, MovieContextProvider } from '../context/movie-context';
import { useContext } from "react";
import MovieResults from "./MovieResultsRoute";


interface Props {
    movie: Movie;
}

function MovieDetails({ movie }: Props) {

    const { addMovie, movies } = useContext(MovieContext);

    function handleAddMovie() {
        const listMovie: Movie = {
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average,
            overview: movie.overview
        }
        addMovie(listMovie);
        console.log(movies);
    }

    return(
        <div className="MovieDetails">
            <div>
            <h3>{movie.title}</h3>
            <button onClick={handleAddMovie}>Add to Watchlist</button>
            </div>
            <p>Release Date:{" "}{movie.release_date}</p>
            <p>Vote Average:{" "}{movie.vote_average.toFixed(1)}/10</p>
            <p>{movie.overview}</p>
        </div>
    )

}

export default MovieDetails;