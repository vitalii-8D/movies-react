import React, {Component} from 'react';

import './MainBanner.scss';

class MainBanner extends Component {
   render() {
      return (
         <div className="header-banner">
            <div className="header-banner_description">
               <h2 className="banner-title">Wonder Woman 1984</h2>
               <div className="banner-overview">
                  Wonder Woman comes into conflict with
                  the Soviet Union during the Cold War
                  in the 1980s and finds a formidable
                  foe by the name of the Cheetah.
               </div>
               <button type="button" className="banner-btn btn"><span>Watch now</span></button>
            </div>

            <div className="header-banner_info">
               <div className="header-banner_info-left">
                  <div className="banner_published banner-info_item">
                     Published <span>Feb 20, 2014</span>
                  </div>
                  <div className="banner_rating banner-info_item">
                     Rating <span>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                    </span>
                  </div>
               </div>

               <div className="header-banner_info-right">
                  <div className="banner_like-numbers banner-info_item">
                     <i className="far fa-heart"/> <span>2,548</span>
                  </div>
                  <div className="banner_comment-numbers banner-info_item">
                     <i className="far fa-comments"/> <span>21</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default MainBanner;
