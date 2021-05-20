import { Movie } from "../model/Movie";
import { MovieContext, MovieContextProvider } from '../context/movie-context';
import { useContext } from "react";


interface Props {
    movie: Movie;
}

function MovieDetails({ movie }: Props) {

    const { addMovie } = useContext(MovieContext);

    return(
        <div className="MovieDetails">
            <div>
            <h3>{movie.title}</h3>
            <button onClick={addMovie}>Add to Watchlist</button>
            </div>
            <p>Release Date:{" "}{movie.release_date}</p>
            <p>Popularity Rating:{" "}{movie.popularity.toFixed(2)}%</p>
            <p>{movie.overview}</p>
        </div>
    )

}

export default MovieDetails;