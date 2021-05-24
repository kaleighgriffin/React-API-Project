import { useContext, useState } from "react";
import { MovieContext } from "../context/movie-context";

function Watchlist() {

    const { movies, removeMovie } = useContext(MovieContext);
    const [ showMovieInfo, setMovieInfo ] = useState(-1);
    console.log(movies);

    function showDetails(index: number) {
        setMovieInfo(index);
    }

    return(
        <div className="Watchlist">
            <h2 className="WatchlistHeader">Watchlist</h2>
            <ul>
                {movies.map((movie, i) =>
                    <li key={i}>
                        {movie.title}
                        { showMovieInfo === i &&
                        <div className="movieInfo">
                            <p>{ movie.poster_path && <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} alt="" /> }</p>
                            <p>{movie.release_date}</p>
                            <p>{movie.vote_average}</p>
                            <p>{movie.overview}</p>
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