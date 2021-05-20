import { useContext } from "react";
import { MovieContext } from "../context/movie-context";

function Watchlist() {

    const { movies } = useContext(MovieContext);

    return(
        <div className="Watchlist">
            <h2 className="WatchlistHeader">Watchlist</h2>
            <ul>
                {movies.map((movie, i) =>
                    <li key={i}>
                        {movie.title}
                    </li>
                    )}
            </ul>
        </div>
    )

}

export default Watchlist;