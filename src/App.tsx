import React from 'react';
import './App.css';
import { fetchMovieInfo } from './service/MovieApiService';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'
import SearchMovieRoute from './components/SearchMovieRoute';
import MovieResultsRoute from './components/MovieResultsRoute';
import WatchlistRoute from './components/WatchlistRoute';
import { MovieContextProvider } from './context/movie-context';

function App() {
  return (
    <div className="App">
      <Router>
      <MovieContextProvider>
        <header>
          <h1>GC MOVIE DATABASE</h1>
          <nav>
            <NavLink to="/search-movie" className="navLinks">Search for Movie</NavLink>{" | "}
            <NavLink to="/watchlist" className="navLinks">Watchlist</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/search-movie">
            <SearchMovieRoute />
          </Route>
          <Route path="/search-results">
            <MovieResultsRoute />
          </Route>
          <Route path="/watchlist">
            <WatchlistRoute />
          </Route>
        </Switch>
        </MovieContextProvider>
      </Router>
    </div>
  );
}

export default App;
