function SearchMovie() {

    return(
        <form className="SearchMovie" > 
            <h2>Search for movies!</h2>
            <label>Release Year: 
                <input type="number" />
            </label>
            <button type="submit">Search</button>
        </form>
    )

}

export default SearchMovie;