import React from "react";
import {connect} from 'react-redux';
import {Provider} from 'react-redux';

import MoviesList from "./components/movies-list/MoviesList";
import MainNavigation from "./components/main-navigation/MainNavigation";
import MainBanner from "./components/main-banner/MainBanner";

import {getGenres, getConfigurations, getMainMovies} from "./redux-store/actions";
import {appStore} from "./redux-store/store";

import './App.scss';

class App extends React.Component {

   componentDidMount() {
      const {genres = '', mainMovies = '', configurations = '',
         getGenres, getConfigurations, getMainMovies} = this.props;
      if (!genres) {
         getGenres && getGenres();
      }
      if (!mainMovies) {
         getConfigurations && getConfigurations();
      }
      if (!configurations) {
         getMainMovies && getMainMovies();
      }
   }

   render() {
      const {genres = '', mainMovies = '', configurations = ''} = this.props;

      return (
         <Provider store={appStore}>
            <div className="App">
               <header className="header">
                  <div className="container">
                     <MainNavigation/>

                     <MainBanner movie={mainMovies[0]}/>
                  </div>
               </header>

               <section className="movies-popular">
                  <div className="container">
                     <MoviesList/>
                  </div>
               </section>
            </div>
         </Provider>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
