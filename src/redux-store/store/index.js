import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

import {movieReducer} from "../reducers";

export const appStore = createStore(movieReducer, composeWithDevTools(
   applyMiddleware(thunk)
))
