import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { Movie } from "../model/Movie";
import './SearchMovieRoute.css';


function SearchMovie() {
    const [ year, setYear ] = useState("");
    const [ genre, setGenre ] = useState("");
    const [ voteAverage, setVoteAverage ] = useState("");
    const history = useHistory();

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
  
        history.push(`/search-results?year=${year}&genre=${genre}&sort_by=vote_average.${voteAverage}`) 
        // history.push(`/search-results?year=${year}`) 
        console.log(voteAverage);
    }
    
    return(
        <form className="SearchMovie" onSubmit={handleSubmit}> 
            <h2>Enter your search criteria and view the movie results!</h2>
            <div className="SearchForm">
                <label>Release Year: 
                    <input type="number" value={year} onChange={e => setYear(e.target.value)} />
                </label><br></br>
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
                </label><br></br>
                <label>Sort by:
                    <select placeholder="Select One" onChange={e => setVoteAverage(e.target.value)}>
                        <option value="">Select One</option>
                        <option value="desc">Highest Vote Average</option>
                        <option value="asc">Lowest Vote Average</option>
                    </select>
                </label><br></br>
                {/* <label>Sort by Highest Vote Average: 
                    <input name="sortBy" type="radio" value="desc" onChange={e => setVoteAverage(e.target.value)} />
                </label>
                <label>Sort by Lowest Vote Average: 
                    <input name="sortBy" type="radio" value="asc" onChange={e => setVoteAverage(e.target.value)} />
                </label> */}
                <button type="submit">Search</button>
            </div>
        </form>
    )

}

export default SearchMovie;