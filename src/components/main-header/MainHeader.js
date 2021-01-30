import React, {Component} from 'react';

import './MainHeader.scss';
import MainNavigation from "./main-navigation/MainNavigation";
import MainBanner from "./main-banner/MainBanner";

class MainHeader extends Component {
   render() {
      return (
         <header className="header">
            <div className="container">
               <MainNavigation/>

               <MainBanner/>
            </div>
         </header>
      );
   }
}

export default MainHeader;
