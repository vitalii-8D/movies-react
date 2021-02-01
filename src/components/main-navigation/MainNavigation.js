import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";

import './MainNavigation.scss';

const links = ['home', 'genres', 'filters', '*some*'];

class MainNavigation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeLinkName: ''
      }
   }

   componentDidMount() {
      const {location} = this.props;
      const currentActiveLink = location.pathname.split('/')[1];
      this.setState({
         activeLinkName: currentActiveLink
      })
      debugger
   }

   onActive = (e) => {
      const {classList} = e.target;
      this.setState({
         activeLinkName: classList[1]
      })
      debugger
   }
   render() {
      const {activeLinkName} = this.state;
      debugger
      return (
         <div className="header-top">
            <div className="header-top_logo">
               <img src="../../../images/logo.png" alt="movie-store"/>
            </div>
            <div className="header-top_nav">
               {!!links && links.map(link => {
                  return (
                     <Link
                        to={`/${link}`}
                        className={`nav-item ${link} ${link === activeLinkName ? 'active' : ''}`}
                        onClick={this.onActive}
                     >{link}</Link>
                  )
               })}
               {/*<Link className="nav-item active">Home</Link>
               <Link className="nav-item">Genres</Link>
               <Link className="nav-item">Filters</Link>
               <Link className="nav-item">*Some*</Link>*/}
            </div>
            <div className="header-top_user">
               <div className="user-img"><img src="../../../images/user-icon.jpg" alt="user-icon"/></div>
               <div className="user-name">Japan Tian</div>
            </div>
         </div>
      );
   }
}

export default withRouter(MainNavigation);
