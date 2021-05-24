import { Movie } from '../model/Movie';

const mdbCredentials: string = process.env.REACT_APP_MOVIE_API_KEY || "";

export function fetchMovieInfo(year: number, genre: string, voteAverage: string): Promise<Movie[]> {

    console.log(year, genre, voteAverage);
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&primary_release_year=${year}&sort_by=vote_average.${voteAverage}&api_key=${mdbCredentials}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        return data.results;
    });
    
}

// https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&with_cast=${castMember}&primary_release_year=${year}&api_key=${mdbCredentials}