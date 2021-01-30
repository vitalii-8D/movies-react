import React, {Component} from 'react';

import './MovieItem.scss';

class MovieItem extends Component {
   render() {
      return (
         <div className="movies-item">

            <div className="movies-item_img">
               <img src="https://image.tmdb.org/t/p/w500/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg" alt="Ave"/>
                  <div className="movies-item_rating">
                     <div className="movie-rating">Rating: 5.6</div>
                     <div className="movie-votes">Votes: 1138</div>
                     <div className="movie-genres">Action, Crime, Drama, Thriller</div>
                     <div className="movie-published">2020-07-02</div>
                  </div>
            </div>

            <div className="movies-item_info">
               <div className="movies-item_info_title">Ava</div>
               <div className="movies-item_info_tagline">~ Kill. Or be killed. ~</div>
               <div className="movies-item_info_description">
                  A black ops assassin is forced to fight
                  for her own survival after a job goes dangerously wrong.
               </div>
               <div className="btn-wrapper">
                  <button className="watch-btn"><span>Watch</span></button>
               </div>
            </div>

         </div>
      );
   }
}

export default MovieItem;
