import { Movie } from '../model/Movie';
import { createContext, ReactNode, useState } from 'react';

interface MovieContextValue {
    movies: Movie[];
    addMovie: (movie: Movie) => number;
}

const defaultValue: MovieContextValue = {
    movies: [],
    addMovie: () => 0
};

export const MovieContext = createContext(defaultValue);

export function MovieContextProvider({children}: { children: ReactNode }) {
    const [ movies, setMovies ] = useState<Movie[]>();
}