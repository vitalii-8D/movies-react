import React, {Component} from 'react';
import {connect} from 'react-redux';

import './MovieItem.scss';

class MovieItem extends Component {
   render() {
      const {movie = {}, configurations = {}} = this.props;
      const {images: {base_url = '', poster_sizes = []} = {}} = configurations;

      return (
         <div className="movies-item">

            <div className="movies-item_img">
               <img src={`${base_url}${poster_sizes[4]}${movie.poster_path}`} alt="Ave"/>
               <div className="movies-item_rating">
                  <div className="movie-rating">Rating: {movie.vote_average}</div>
                  <div className="movie-votes">Votes: {movie.vote_count}</div>
                  <div className="movie-genres">Action, Crime, Drama, Thriller</div>
                  <div className="movie-published">{movie.release_date}</div>
               </div>
            </div>

            <div className="movies-item_info">
               <div className="movies-item_info_title">{movie.original_title}</div>
               <div className="movies-item_info_description">
                  {'    ' + movie.overview}
               </div>
               <div className="btn-wrapper">
                  <button className="watch-btn"><span>Watch</span></button>
               </div>
            </div>

         </div>
      );
   }
}

const mapStateToProps = (store) => {
   const {configurations} = store;
   return {
      configurations
   }
}

export default connect(mapStateToProps)(MovieItem);
