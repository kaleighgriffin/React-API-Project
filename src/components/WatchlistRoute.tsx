import { useContext, useState } from "react";
import { MovieContext } from "../context/movie-context";
import './WatchListRoute.css'

function Watchlist() {

    const { movies, removeMovie } = useContext(MovieContext);
    const [ showMovieInfo, setMovieInfo ] = useState(-1);
    console.log(movies);

    function showDetails(index: number) {
        setMovieInfo(index);
    }

    function hideDetails(index: number) {
        setMovieInfo(-1);
    }

    return(
        <div className="Watchlist">
            <h2 className="WatchlistHeader">Watchlist</h2>
            <ul>
                {movies.map((movie, i) =>
                    <li key={i}>
                        {movie.title}
                        { showMovieInfo === i &&
                        <div className="infoContainer">
                            <div className="movieInfo">
                                <button onClick={() => hideDetails(i)}>Close</button>
                                <p>{ movie.poster_path && <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" /> }</p>
                                <p>Release Date: {movie.release_date}</p>
                                <p>Vote Average: {movie.vote_average}/10</p>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        }
                        <button onClick={() => showDetails(i)}>See more details</button>
                        <button onClick={() => removeMovie(i)}>Remove</button>
                    </li>
                    )}
            </ul>
        </div>
    )

}

export default Watchlist;