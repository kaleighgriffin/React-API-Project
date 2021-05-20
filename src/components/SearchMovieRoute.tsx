import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { Movie } from "../model/Movie";


function SearchMovie() {
    const [ year, setYear ] = useState("");
    const [ genre, setGenre ] = useState("");
    const [ castMember, setCastMember ] = useState("");
    const history = useHistory();

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
  
        history.push(`/search-results?year=${year}&genre=${genre}&cast-member=${castMember}`) 
        // history.push(`/search-results?year=${year}`) 
    }
    
    return(
        <form className="SearchMovie" onSubmit={handleSubmit}> 
            <h2>Search for movies!</h2>
            <label>Release Year: 
                <input type="number" value={year} onChange={e => setYear(e.target.value)} />
            </label>
            <label>Genre: 
                <select placeholder="Select Genre" onChange={e => setGenre(e.target.value)}>
                    <option value="">Select Genre</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="35">Comedy</option>
                    <option value="18">Drama</option>
                    <option value="14">Fantasy</option>
                    <option value="878">Science Fiction</option>
                </select>
            </label>
            <label>Cast Member: 
                <select placeholder="Select Cast Member" onChange={e => setCastMember(e.target.value)}>
                    <option value="">Select Cast Member</option>
                    <option value="500">Tom Cruise</option>
                    <option value="23659">Will Farrell</option>
                    <option value="3896">Liam Neeson</option>
                </select>
            </label>
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchMovie;