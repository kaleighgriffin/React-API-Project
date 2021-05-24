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
            poster_path: movie.poster_path,
            tagline: movie.tagline
        }
        addMovie(listMovie);
        console.log(movies);
    }

    return(
        <div className="MovieDetails">
            <div>
            <i className="fas fa-star" id="star" onClick={handleAddMovie}></i><br></br>
            <h3>{movie.title}</h3>
            <p>{movie.tagline}</p>
            <p>{movie.genres}</p>
            </div>
            <div className="MovieInfo">
                { movie.poster_path && <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" /> }
                <div className="Column">
                    <p className="allCaps">RELEASE DATE:{" "}{movie.release_date}</p>
                    <p className="allCaps">VOTE AVERAGE:{" "}{movie.vote_average.toFixed(1)}/10</p>
                </div>
            </div>
            <p>{movie.overview}</p>
        </div>
    )

}

export default MovieDetails;