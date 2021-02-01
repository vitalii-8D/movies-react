import React, {Component} from 'react';
import {connect} from "react-redux";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
} from 'react-router-dom';

import MainNavigation from "../main-navigation/MainNavigation";
import MainBanner from "../main-banner/MainBanner";
import MoviesList from "../movies-list/MoviesList";

import {getConfigurations, getGenres, getMainMovies} from "../../redux-store/actions";

import './MainApp.scss';

class MainApp extends Component {

   componentDidMount() {
      const {genres = '', mainMovies = '', configurations = '',
         getGenres, getConfigurations, getMainMovies} = this.props;

      if (!genres.length) {
         getGenres && getGenres();
      }
      if (!Object.keys(mainMovies).length) {
         getMainMovies && getMainMovies();
      }
      if (!Object.keys(configurations).length) {
         getConfigurations && getConfigurations();
      }

   }

   render() {
      const {genres, mainMovies: {results = ''}, configurations} = this.props;

      return (
         <Router>
            <Switch>

               <div>
                  <header className="header">
                     <div className="container">
                        <MainNavigation/>

                        <Route path='/home' exact>
                           {!!results && <MainBanner movie={results[0]}/>}
                        </Route>
                     </div>
                  </header>

                  <section className="movies-popular">
                     <div className="container">
                        <Route path='/home' exact>
                           {!!results && <MoviesList movies={results}/>}
                        </Route>
                     </div>
                  </section>
               </div>

               <Redirect from='/' to='/home'/>
            </Switch>
         </Router>
      );
   }
}

const mapStateToProps = (store) => {
   const {genres, mainMovies, configurations} = store;
   return {
      genres, mainMovies, configurations
   }
}

const mapDispatchToProps = {
   getGenres, getConfigurations, getMainMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
