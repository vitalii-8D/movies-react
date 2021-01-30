import React, {Component} from 'react';

import './MainNavigation.scss';

class MainNavigation extends Component {
   render() {
      return (
         <div className="header-top">
            <div className="header-top_logo">
               <img src="../../../images/logo.png" alt="movie-store"/>
            </div>
            <div className="header-top_nav">
               <div className="nav-item active">Home</div>
               <div className="nav-item">Filters</div>
               <div className="nav-item">*Some*</div>
               <div className="nav-item">*Some*</div>
            </div>
            <div className="header-top_user">
               <div className="user-img"><img src="../../../images/user-icon.jpg" alt="user-icon"/></div>
               <div className="user-name">Japan Tian</div>
            </div>
         </div>
      );
   }
}

export default MainNavigation;
