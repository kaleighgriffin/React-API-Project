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
        <header>
          <h1>MOVIES</h1>
          <nav>
            <NavLink to="/search-movie">Search for Movie</NavLink>{" "}
            <NavLink to="/watchlist">Watchlist</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/search-movie">
            <SearchMovieRoute />
          </Route>
          <Route path="/search-results">
            <MovieResultsRoute />
          </Route>
          <MovieContextProvider>
          <Route path="/watchlist">
            <WatchlistRoute />
          </Route>
          </MovieContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
