import React, { FormEvent, useState } from "react";
import { Movie } from "../model/Movie";

interface Props {
    onSubmit: (movie: Movie) => void;
}

function SearchMovie({onSubmit}: Props) {

    const [ year, setYear ] = useState("");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const movie: Movie = {
            release_date: String(year)
        }
        onSubmit(movie);
    }

    return(
        <form className="SearchMovie" onSubmit={handleSubmit}> 
            <h2>Search for movies!</h2>
            <label>Release Year: 
                <input type="number" value={year} onChange={e => setYear(e.target.value)} />
            </label>
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchMovie;