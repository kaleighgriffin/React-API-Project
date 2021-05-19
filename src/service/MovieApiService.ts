import { Movie } from '../model/Movie';

const mdbCredentials: string = process.env.REACT_APP_MOVIE_API_KEY || "";

export function fetchMovieInfo(year: number): Promise<Movie[]> {

    return fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&api_key=${mdbCredentials}`)
    .then(res => res.json())
    .then((data: Movie[]) => {
        return data;
    });

}


