import React, {Component} from 'react';
import {connect} from 'react-redux';

import {api_token} from "../../constants";

import './MainBanner.scss';

class MainBanner extends Component {

   render() {
      const {movie, imgConfigs = {}} = this.props;
      const {base_url='', backdrop_sizes=[]} = imgConfigs;

      return (
         <div className="header-banner" style={{backgroundImage: `url("${base_url}${backdrop_sizes[2]}${movie.backdrop_path}")`}}>
            <div className="header-banner_description">
               <h2 className="banner-title">{movie.title}</h2>
               <div className="banner-overview">
                  {movie.overview}
               </div>
               <button type="button" className="banner-btn btn"><span>Watch now</span></button>
            </div>

            <div className="header-banner_info">
               <div className="header-banner_info-left">
                  <div className="banner_published banner-info_item">
                     Released <span>{movie.release_date}</span>
                  </div>
                  <div className="banner_rating banner-info_item">
                     Rating <span>
                     {movie.vote_average}
                        {/*<i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>*/}
                    </span>
                  </div>
                  <div className="banner_votes_count banner-info_item">
                     Votes <span>{movie.vote_count}</span>
                  </div>
               </div>

               <div className="header-banner_info-right">
                  <div className="banner_like-numbers banner-info_item">
                     <i className="far fa-heart"/> <span>{Math.floor(movie.popularity)}</span>
                  </div>
                  {/*<div className="banner_comment-numbers banner-info_item">
                     <i className="far fa-comments"/> <span>21</span>
                  </div>*/}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const {configurations: {images}} = state;

   return {
      imgConfigs: images
   }
}

export default connect(mapStateToProps)(MainBanner);
