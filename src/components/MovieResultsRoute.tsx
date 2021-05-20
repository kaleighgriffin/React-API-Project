import { useEffect, useState } from "react";
import { Movie } from "../model/Movie";
import { fetchMovieInfo } from "../service/MovieApiService";
import MovieDetails from "./MovieDetails";

interface Props {
    year: number
}

function MovieResults({year}: Props) {
    const [ movieYear, setMovieYear ] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMovieInfo(year).then(data => {
            setMovieYear(data)
        })
    }, [])

    return(
        <div className="MovieResults">
           {movieYear.map((movie, index) =>
           <MovieDetails key={index} movie={movie}/>
            )}
        </div>
    );

}

export default MovieResults;