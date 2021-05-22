import { Movie } from "../model/Movie";
import { MovieContext, MovieContextProvider } from '../context/movie-context';
import { useContext } from "react";
import MovieResults from "./MovieResultsRoute";
import './MovieDetails.css';

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
            overview: movie.overview,
            // genres: movie.genres,
            poster_path: movie.poster_path
        }
        addMovie(listMovie);
        console.log(movies);
    }

    return(
        <div className="MovieDetails">
            <div>
            <h3>{movie.title}</h3>
            </div>
            {/* <p className="allCaps">{movie.genres}</p> */}
            <p className="allCaps">RELEASE DATE:{" "}{movie.release_date}</p>
            <p className="allCaps">VOTE AVERAGE:{" "}{movie.vote_average.toFixed(1)}/10</p>
            <i className="fas fa-star" id="star" onClick={handleAddMovie}></i>
            {/* <button onClick={handleAddMovie}>Add to Watchlist</button> */}
            <p>{movie.overview}</p>
            { movie.poster_path && <img src={movie.poster_path} alt="" /> }
        </div>
    )

}

export default MovieDetails;