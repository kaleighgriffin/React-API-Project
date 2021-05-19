import React from 'react';
import './App.css';
import { fetchMovieInfo } from './service/MovieApiService';

function App() {
  return (
    <div className="App">
      <p>{fetchMovieInfo}</p>
    </div>
  );
}

export default App;
