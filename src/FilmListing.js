  
import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    const allFilms = this.props.films.map((film) =>{
      return (
        <FilmRow film={film} />
      )
    })
    return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
          <div className="film-list-filter">
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className="film-list-filter">
              FAVES
              <span className="section-count">0</span>
              <button onClick={this.handleFilterClick}></button>
          </div>
      </div>
  
      {allFilms}
  </div>
    );
  }
}

export default FilmListing;