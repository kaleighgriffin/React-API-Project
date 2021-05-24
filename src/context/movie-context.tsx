import { Movie } from '../model/Movie';
import { createContext, ReactNode, useState } from 'react';

interface MovieContextValue {
    movies: Movie[];
    addMovie: (movie: Movie) => number;
    removeMovie: (index: number) => void;
}

const defaultValue: MovieContextValue = {
    movies: [],
    addMovie: () => 0,
    removeMovie: () => {}
};

export const MovieContext = createContext(defaultValue);

export function MovieContextProvider({children}: { children: ReactNode }) {
    const [ movies, setMovies ] = useState<Movie[]>([]);

    function addMovie(watchlistMovie: Movie): number {
        setMovies([...movies, watchlistMovie]);
        console.log(watchlistMovie);
        return movies.length;
    }

    function removeMovie(index: number): void {
        setMovies(prev => [ ...prev.slice(0, index), ...prev.slice(index + 1)]);
    }
    
    return (
        <MovieContext.Provider value={{movies, addMovie, removeMovie}}>
            {children}
        </MovieContext.Provider>
    );
}