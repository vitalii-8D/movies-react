import React, {Component} from 'react';
import {connect} from "react-redux";

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
         getConfigurations && getConfigurations();
      }
      if (!Object.keys(configurations).length) {
         getMainMovies && getMainMovies();
      }
      debugger
   }

   render() {
      const {genres, mainMovies: {results = ''}, configurations} = this.props;

      return (
         <div>
            <header className="header">
               <div className="container">
                  <MainNavigation/>

                  {results && <MainBanner movie={results[5]}/>}
               </div>
            </header>

            <section className="movies-popular">
               <div className="container">
                  <MoviesList/>
               </div>
            </section>
         </div>
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
