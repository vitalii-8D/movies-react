import React, {Component} from 'react';

import MovieItem from "../movie-item/MovieItem";

import './MoviesList.scss';

class MoviesList extends Component {
   render() {
      return (
         <div className="movies-list">
            <MovieItem/>

            <MovieItem/>

            <MovieItem/>

            <MovieItem/>

            <MovieItem/>

            <MovieItem/>

            <MovieItem/>
            <MovieItem/>

            <MovieItem/>
            <MovieItem/>

         </div>
      );
   }
}

export default MoviesList;
