import React from 'react';
import './App.css';
import { fetchMovieInfo } from './service/MovieApiService';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'
import SearchMovieRoute from './components/SearchMovieRoute';
import MovieResultsRoute from './components/MovieResultsRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>MOVIES</h1>
          <nav>
            <NavLink to="/search-movie">Search for Movie</NavLink>{" "}
            <NavLink to="/watchlist">Watchlist</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/search-movie">
            <SearchMovieRoute onSubmit={handleSubmit}/>
          </Route>
          <Route path="/search-results">
            <MovieResultsRoute year={year}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
