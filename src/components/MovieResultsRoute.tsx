import { useEffect, useState } from "react";
import { Movie } from "../model/Movie";
import { fetchMovieInfo } from "../service/MovieApiService";

interface Props {
    year: number
}

function MovieResults({year}: Props) {
    const [ movieYear, setMovieYear ] = useState<Movie[]>([]);

    useEffect(() => {
        fetchMovieInfo(year).then(data => {
            setMovieYear(data)
        })
    }, [movieYear])

    return(
        <div className="MovieResults">
           
        </div>
    )

}

export default MovieResults;