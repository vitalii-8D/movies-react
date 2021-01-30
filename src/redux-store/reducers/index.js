import {actionTypes} from "../../constants";
const {GENRES_LOADED, MAIN_MOVIES_LOADED, CONFIGURATIONS_LOADED} = actionTypes;

const defaultStore = {
   genres: [],
   mainMovies: [],
   configurations: []
}

export const movieReducer = (store = defaultStore, action) => {
   switch (action.type) {
      case GENRES_LOADED: {

         return {
            ...store,
            genres: action.payload
         }
      }

      case MAIN_MOVIES_LOADED: {

         return {
            ...store,
            mainMovies: action.payload
         }
      }

      case CONFIGURATIONS_LOADED: {

         return {
            ...store,
            configurations: action.payload
         }
      }

      default: {
         return store;
      }
   }
}
