import { Movie } from "../model/Movie";


interface Props {
    movie: Movie;
}

function MovieDetails({ movie }: Props) {

    return(
        <div className="MovieDetails">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
            <p>{movie.runtime}</p>
            <p>{movie.overview}</p>
        </div>
    )

}

export default MovieDetails;