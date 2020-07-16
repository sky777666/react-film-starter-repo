import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './fave';

// class FilmRow extends Component {
//       // when you create an instance of a class Component, do this
//       constructor() {
//           // a call for the super()
//           // inherit all properties of a Component class
//           super();
//           // define inital state
//            this.state = {
  
//            }
              
//       }
  
//                   handleDetailsClick = (e) => {
//                       console.log("Fetching Details ! ")
//                       this.setState({
                          
                          
//                       })
//                   }





class FilmRow extends Component {

handleDetailsClick = (film) => {
  console.log(`Fetching details for ${film.title} 🐝`)
}

  render() {
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster 
          poster_path={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}
          title={this.props.film.title}
        />

        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date.substr(0,4)}</p>
        </div>
        <Fave />
      </div>
    );
  }
}
export default FilmRow;