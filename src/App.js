import React, { useState } from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [current, setCurrent] = useState({});
  const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

  console.log(popularFilmsUrl)
  
  const handleDetailsClick = film => {
    console.log(`Fetching movie details for ${film.title}`)
    setCurrent(film)
  }

  return (
    <div className="film-library">
      <FilmListing films={films} handleDetailsClick={handleDetailsClick} />
      <FilmDetails film={current} />
    </div>
  );
}

export default App;

