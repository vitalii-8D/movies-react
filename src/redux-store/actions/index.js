import {actionTypes, api_token} from "../../constants";
const {CONFIGURATIONS_LOADED, MAIN_MOVIES_LOADED, GENRES_LOADED} = actionTypes;

export const getGenres = () => {
   return (dispatch, getState) => {

      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_token}&language=en-US`)
         .then(response => response.json())
         .then(data => {
            dispatch({
               type: GENRES_LOADED,
               payload: data.data
            })
         })
         .catch(err => {
            console.log(err);
         })
   }
}
export const getMainMovies = () => {
   return (dispatch) => {

      fetch()
         .then(response => response.json())
         .then(data => {
            dispatch({
               type: MAIN_MOVIES_LOADED,
               payload: data.data
            })
         })
         .catch(err => {
            console.log(err);
         })
   }
}

export const getConfigurations = () => {
   return (dispatch) => {

      fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_token}`)
         .then(response => response.json())
         .then(data => {
            dispatch({
               type: CONFIGURATIONS_LOADED,
               payload: data.data
            })
         })
         .catch(err => {
            console.log(err);
         })
   }
}
