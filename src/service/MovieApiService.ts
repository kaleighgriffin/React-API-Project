import { Movie } from '../model/Movie';

const mdbCredentials: string = process.env.REACT_APP_MOVIE_API_KEY || "";

export function fetchMovieInfo(): Promise<Movie> {

    return fetch(`https://developers.themoviedb.org/3`)
    .then(res => res.json())
    .then((data: Movie) => {
        return data;
    });

}