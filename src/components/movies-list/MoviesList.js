import React, {Component} from 'react';
import {connect} from 'react-redux';

import MovieItem from "../movie-item/MovieItem";

import {getMainMovies} from "../../redux-store/actions";

import './MoviesList.scss';

class MoviesList extends Component {

   componentDidMount() {
      /*const {mainMovies, getMainMovies} = this.props;

      if (!Object.keys(mainMovies).length) {
         getMainMovies && getMainMovies();
      }*/
   }

   render() {
      // const {mainMovies: {results}} = this.props;
      const {movies: results} = this.props;

      return (
         <div className="movies-list">
            {!!results && results.map((item, index) => {
               if (index == 0) return;

               return <MovieItem movie={item}/>
            })}
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const {mainMovies} = state;

   return {
      mainMovies
   }
}

const mapDispatchToProps = {
   getMainMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
